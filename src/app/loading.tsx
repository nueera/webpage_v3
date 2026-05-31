export default function Loading() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[var(--bg-main)]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-[var(--border-soft)]" />
          <div className="absolute inset-0 rounded-full border-4 border-t-[var(--blue-primary)] animate-spin" />
        </div>
        <p className="text-[var(--text-muted)] text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
}
