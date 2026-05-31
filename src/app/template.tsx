import PageTransitionProgress from '@/components/page-transition-progress';

/**
 * template.tsx re-mounts on every navigation,
 * so the PageTransitionProgress bar triggers each route change.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageTransitionProgress />
      {children}
    </>
  );
}
