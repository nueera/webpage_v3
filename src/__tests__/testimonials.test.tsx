import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

vi.mock('next/image', () => ({
  default: (props: Record<string, unknown>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={(props.alt as string) || ''} src={props.src as string} />
  ),
}));

vi.mock('lucide-react', () => ({
  Star: ({ className }: { className?: string }) => <svg className={className} data-testid="star-icon" />,
  Quote: ({ className }: { className?: string }) => <svg className={className} data-testid="quote-icon" />,
}));

vi.mock('@/components/ui-extensions', () => ({
  SectionBadge: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SectionTitle: ({ children, className }: { children: React.ReactNode; className?: string }) => <h2 className={className}>{children}</h2>,
  FadeUp: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('TestimonialsSection', () => {
  it('renders all testimonials (mobile + desktop)', async () => {
    const { TestimonialsSection } = await import('@/components/testimonials-section');
    render(<TestimonialsSection />);

    const priya = screen.getAllByText('Priya Mehta');
    expect(priya.length).toBeGreaterThanOrEqual(1);

    const amit = screen.getAllByText('Amit Deshmukh');
    expect(amit.length).toBeGreaterThanOrEqual(1);

    const sneha = screen.getAllByText('Sneha Kulkarni');
    expect(sneha.length).toBeGreaterThanOrEqual(1);
  });

  it('has accessible carousel attributes', async () => {
    const { TestimonialsSection } = await import('@/components/testimonials-section');
    render(<TestimonialsSection />);

    const carousel = screen.getByRole('region', { name: /client testimonials/i });
    expect(carousel).toHaveAttribute('aria-roledescription', 'carousel');
  });

  it('has accessible tab navigation', async () => {
    const { TestimonialsSection } = await import('@/components/testimonials-section');
    render(<TestimonialsSection />);

    const tablist = screen.getByRole('tablist', { name: /testimonial navigation/i });
    expect(tablist).toBeInTheDocument();

    const tabs = screen.getAllByRole('tab');
    expect(tabs.length).toBeGreaterThanOrEqual(1);
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
  });
});
