import { NextResponse } from 'next/server';

/* ─── In-memory rate limiting (5 submissions per IP per hour) ─── */

const submissions = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(clientIp: string): boolean {
  const now = Date.now();
  const entry = submissions.get(clientIp);

  if (!entry) {
    submissions.set(clientIp, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  // Window expired — reset
  if (now > entry.resetTime) {
    submissions.set(clientIp, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count += 1;
  return false;
}

/* ─── Sanitization helpers ─── */

function trimString(val: unknown): string {
  if (typeof val !== 'string') return '';
  return val.trim();
}

function stripHtml(text: string): string {
  return text.replace(/<[^>]*>/g, '');
}

/* ─── POST handler ─── */

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // ── Honeypot check: bots fill hidden fields, humans don't ──
    if (body.website && body.website.trim().length > 0) {
      // Return fake success silently — don't log, don't process
      return NextResponse.json({
        success: true,
        message: 'Thank you! We\'ll get back to you soon.',
      });
    }

    // ── Rate limiting ──
    const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          errors: ['Too many submissions. Please try again later.'],
        },
        { status: 429 }
      );
    }

    // ── Extract & sanitize fields ──
    const name = trimString(body.name);
    const email = trimString(body.email);
    const phone = trimString(body.phone);
    const company = trimString(body.company);
    const service = trimString(body.service);
    const budget = trimString(body.budget);
    const timeline = trimString(body.timeline);
    const source = trimString(body.source);
    const message = stripHtml(trimString(body.message));

    // ── Validation ──
    const errors: string[] = [];

    if (!name || name.length < 2) {
      errors.push('Name must be at least 2 characters.');
    }
    if (name.length > 100) {
      errors.push('Name must be under 100 characters.');
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push('Please provide a valid email address.');
    }

    if (!message || message.length < 10) {
      errors.push('Message must be at least 10 characters.');
    }
    if (message.length > 5000) {
      errors.push('Message must be under 5,000 characters.');
    }

    // Phone is optional but if provided must be valid
    if (phone && phone.length > 0) {
      const phoneClean = phone.replace(/[\s\-()]/g, '');
      if (!/^\+?\d{7,15}$/.test(phoneClean)) {
        errors.push('Please provide a valid phone number.');
      }
    }

    if (errors.length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // ── Log the submission ──
    console.log('📧 Contact form submission:', {
      timestamp: new Date().toISOString(),
      ip: clientIp,
      name,
      email,
      phone: phone || null,
      company: company || null,
      service: service || null,
      budget: budget || null,
      timeline: timeline || null,
      source: source || null,
      message,
    });

    // ── Store in Google Sheet ──
    const sheetsWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (sheetsWebhookUrl) {
      try {
        await fetch(sheetsWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            phone: phone || '',
            company: company || '',
            service: service || '',
            budget: budget || '',
            timeline: timeline || '',
            source: source || '',
            message,
            ip: clientIp,
          }),
        });
        console.log('✅ Submission saved to Google Sheets');
      } catch (sheetErr) {
        console.error('⚠️ Google Sheets write failed:', sheetErr);
        // Don't fail the form submission if Sheets is down
      }
    } else {
      console.warn('⚠️ GOOGLE_SHEETS_WEBHOOK_URL not set — submissions not saved to Google Sheets');
    }

    // ── Success response ──
    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry! Our team will review your details and reach out within 24 hours to schedule a free strategy call.',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        success: false,
        errors: ['Something went wrong. Please try again later.'],
      },
      { status: 500 }
    );
  }
}

/* ─── GET handler (health check) ─── */

export async function GET() {
  return NextResponse.json({ message: 'Contact API endpoint' });
}
