'use client';

import Link from 'next/link';
import { Home, ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-nueera pt-24 pb-4">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 text-[var(--text-muted)] hover:text-[var(--blue-primary)] transition-colors"
          >
            <Home className="w-4 h-4" />
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <ChevronRight className="w-3.5 h-3.5 text-[var(--text-muted)]" />
            {item.href ? (
              <Link href={item.href} className="text-[var(--text-muted)] hover:text-[var(--blue-primary)] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--text-primary)] font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
