import { spotlights } from "@/lib/data";

export default function SpotlightSection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="section-wrap">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Travel Updates</p>
          <h2 className="mt-2 font-display text-3xl text-brand-900 sm:text-4xl">What families are asking about right now</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {spotlights.map((spotlight) => (
            <article key={spotlight.id} className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm">
              <p className="inline-flex rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-800">
                {spotlight.tag}
              </p>
              <h3 className="mt-4 font-display text-2xl text-brand-900">{spotlight.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-700">{spotlight.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
