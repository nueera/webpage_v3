import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const isUpstashConfigured =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN;

let upstashLimiter: Ratelimit | null = null;

if (isUpstashConfigured) {
  const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
  });

  upstashLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(5, '1 h'),
    analytics: true,
  });
}

/* ─── In-memory fallback (resets on restart) ─── */

const submissions = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

function isInMemoryRateLimited(clientIp: string): boolean {
  const now = Date.now();
  const entry = submissions.get(clientIp);

  if (!entry) {
    submissions.set(clientIp, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

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

export async function isRateLimited(clientIp: string): Promise<boolean> {
  if (upstashLimiter) {
    const { success } = await upstashLimiter.limit(clientIp);
    return !success;
  }
  return isInMemoryRateLimited(clientIp);
}
