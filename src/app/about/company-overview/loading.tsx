export default function CompanyOverviewLoading() {
  return (
    <section className="min-h-[70vh] flex items-center bg-navy animate-pulse">
      <div className="max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-2xl space-y-4">
          <div className="h-4 w-32 bg-white/10 rounded" />
          <div className="h-12 w-96 bg-white/10 rounded" />
          <div className="h-6 w-80 bg-white/10 rounded" />
          <div className="h-12 w-40 bg-white/10 rounded mt-8" />
        </div>
      </div>
    </section>
  );
}
