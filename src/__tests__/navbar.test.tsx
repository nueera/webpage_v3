import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

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

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

vi.mock('lucide-react', () => ({
  Menu: () => <svg data-testid="menu-icon" />,
  X: () => <svg data-testid="x-icon" />,
  MessageCircle: () => <svg data-testid="message-icon" />,
}));

vi.mock('@/components/theme-toggle', () => ({
  default: () => <button data-testid="theme-toggle">Toggle</button>,
}));

vi.mock('@/components/premium-button', () => ({
  PremiumButton: ({ children, ...props }: { children: React.ReactNode; [key: string]: unknown }) => (
    <button {...props}>{children}</button>
  ),
}));

vi.mock('@/components/ui-extensions', () => ({
  ScrollProgress: () => <div data-testid="scroll-progress" />,
}));

// Mock IntersectionObserver
beforeEach(() => {
  vi.stubGlobal('IntersectionObserver', class {
    observe() {}
    unobserve() {}
    disconnect() {}
  });
});

describe('Navbar', () => {
  it('renders all navigation links', async () => {
    const { default: Navbar } = await import('@/components/navbar');
    render(<Navbar />);

    expect(screen.getByText('Home')).toHaveAttribute('href', '/');
    expect(screen.getByText('About')).toHaveAttribute('href', '/about');
    expect(screen.getByText('Services')).toHaveAttribute('href', '/services');
    expect(screen.getByText('Portfolio')).toHaveAttribute('href', '/portfolio');
    expect(screen.getByText('Contact')).toHaveAttribute('href', '/contact');
  });

  it('has accessible mobile menu button', async () => {
    const { default: Navbar } = await import('@/components/navbar');
    render(<Navbar />);

    const menuButton = screen.getByRole('button', { name: /open menu/i });
    expect(menuButton).toBeInTheDocument();
  });

  it('opens mobile menu with dialog role', async () => {
    const { default: Navbar } = await import('@/components/navbar');
    render(<Navbar />);

    const menuButton = screen.getByRole('button', { name: /open menu/i });
    fireEvent.click(menuButton);

    const dialog = screen.getByRole('dialog', { name: /navigation menu/i });
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveAttribute('aria-modal', 'true');
  });

  it('closes mobile menu on Escape key', async () => {
    const { default: Navbar } = await import('@/components/navbar');
    render(<Navbar />);

    const menuButton = screen.getByRole('button', { name: /open menu/i });
    fireEvent.click(menuButton);

    const dialog = screen.getByRole('dialog', { name: /navigation menu/i });
    fireEvent.keyDown(dialog, { key: 'Escape' });

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
