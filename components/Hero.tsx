import Image from "next/image";

type HeroProps = {
  onPlanClick: () => void;
};

const trustItems = [
  "Certified Travel Expertise",
  "Custom Itineraries",
  "Multi-Gen Specialists",
] as const;

export default function Hero({ onPlanClick }: HeroProps) {
  return (
    <section id="hero" className="relative overflow-hidden py-20 lg:py-24">
      <div
        className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-brand-50 to-transparent"
        aria-hidden="true"
      />
      <div className="section-wrap relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-brand-700">
            Legacy Family Travel
          </p>
          <h1 className="font-display text-4xl leading-tight text-brand-900 sm:text-5xl lg:text-6xl">
            We make the plans, you make the memories.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Providing families with vacations that will
            be remembered for a lifetime. 
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button type="button" onClick={onPlanClick} className="btn-primary">
              Contact us
            </button>
            <a href="#destinations" className="btn-secondary">
              Explore Destinations
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-600">
            {trustItems.map((item, index) => (
              <span key={item} className="flex items-center gap-3">
                {index > 0 && (
                  <span
                    className="hidden h-1 w-1 rounded-full bg-brand-400 sm:inline-block"
                    aria-hidden="true"
                  />
                )}
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl rounded-3xl border border-brand-200 bg-white p-4 shadow-soft">
          <div className="relative overflow-hidden rounded-2xl bg-brand-50 p-4 sm:p-6">
            <Image
              src="/images/logo.jpg"
              alt="Legacy Family Travel logo"
              width={900}
              height={900}
              className="h-auto w-full rounded-xl object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
