import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

vi.mock('next/image', () => ({
  default: (props: Record<string, unknown>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={(props.alt as string) || ''} src={props.src as string} />
  ),
}));

vi.mock('next/link', () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: unknown }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

vi.mock('lucide-react', () => ({
  Mail: () => <svg data-testid="mail-icon" />,
  ArrowRight: () => <svg data-testid="arrow-icon" />,
  ChevronDown: () => <svg data-testid="chevron-down" />,
  ChevronUp: () => <svg data-testid="chevron-up" />,
  MessageCircle: () => <svg data-testid="message-icon" />,
}));

describe('Footer', () => {
  it('renders quick links with correct hrefs', async () => {
    const { default: Footer } = await import('@/components/footer');
    render(<Footer />);

    const aboutLinks = screen.getAllByRole('link', { name: 'About Us' });
    expect(aboutLinks.length).toBeGreaterThanOrEqual(1);
    aboutLinks.forEach(link => {
      expect(link).toHaveAttribute('href', '/about');
    });

    const servicesLinks = screen.getAllByRole('link', { name: 'Services' });
    expect(servicesLinks.length).toBeGreaterThanOrEqual(1);
    servicesLinks.forEach(link => {
      expect(link).toHaveAttribute('href', '/services');
    });
  }, 15000);

  it('renders service links with correct hrefs', async () => {
    const { default: Footer } = await import('@/components/footer');
    render(<Footer />);

    const webDevLinks = screen.getAllByText('Web Development');
    expect(webDevLinks.length).toBeGreaterThanOrEqual(1);
    webDevLinks.forEach(link => {
      expect(link).toHaveAttribute('href', '/services#web-development');
    });
  });

  it('renders copyright with current year', async () => {
    const { default: Footer } = await import('@/components/footer');
    render(<Footer />);

    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
  });
});
