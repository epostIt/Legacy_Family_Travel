"use client";

import { useCallback, useEffect, useState } from "react";
import type { Destination } from "@/lib/data";

type DestinationsCarouselProps = {
  destinations: Destination[];
};

export default function DestinationsCarousel({ destinations }: DestinationsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const next = useCallback(() => {
    setActiveIndex((current) => (current + 1) % destinations.length);
  }, [destinations.length]);

  const prev = useCallback(() => {
    setActiveIndex((current) => (current - 1 + destinations.length) % destinations.length);
  }, [destinations.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % destinations.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [destinations.length]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      prev();
    }
  };

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(event.changedTouches[0]?.clientX ?? null);
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStart === null) return;

    const end = event.changedTouches[0]?.clientX ?? touchStart;
    const delta = touchStart - end;

    if (delta > 45) next();
    if (delta < -45) prev();

    setTouchStart(null);
  };

  return (
    <section id="destinations" className="bg-brand-50 py-20 lg:py-24">
      <div className="section-wrap">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Featured Destinations</p>
            <h2 className="mt-2 font-display text-3xl text-brand-900 sm:text-4xl">
              Find the right trip for your family
            </h2>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              className="rounded-full border border-brand-300 bg-white p-2.5 text-brand-800 transition hover:bg-brand-100"
              aria-label="Previous destination"
              onClick={prev}
            >
              ←
            </button>
            <button
              type="button"
              className="rounded-full border border-brand-300 bg-white p-2.5 text-brand-800 transition hover:bg-brand-100"
              aria-label="Next destination"
              onClick={next}
            >
              →
            </button>
          </div>
        </div>

        <div
          className="overflow-hidden rounded-3xl border border-brand-200 bg-white shadow-soft"
          onKeyDown={handleKeyDown}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          tabIndex={0}
          aria-label="Destination carousel"
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {destinations.map((destination) => (
              <article key={destination.id} className="min-w-full p-6 sm:p-8 lg:p-10">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                  <div
                    className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${destination.gradientClass}`}
                    aria-hidden="true"
                  />

                  <div>
                    <h3 className="font-display text-3xl text-brand-900">{destination.name}</h3>
                    <p className="mt-4 max-w-xl text-lg text-slate-600">{destination.hook}</p>

                    <div className="mt-6 flex flex-wrap gap-3 text-sm">
                      <span className="rounded-full bg-brand-100 px-4 py-2 font-medium text-brand-800">
                        Best months: {destination.bestMonths}
                      </span>
                      <span className="rounded-full bg-brand-100 px-4 py-2 font-medium text-brand-800">
                        Ideal for: {destination.idealFor}
                      </span>
                    </div>

                    <button
                      type="button"
                      className="mt-7 inline-flex rounded-full border border-brand-300 bg-white px-5 py-2.5 text-sm font-semibold text-brand-800 transition hover:bg-brand-50"
                    >
                      View sample plan
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2" aria-label="Carousel pagination">
          {destinations.map((destination, index) => (
            <button
              key={destination.id}
              type="button"
              aria-label={`Go to ${destination.name}`}
              aria-current={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                activeIndex === index ? "w-8 bg-brand-700" : "bg-brand-300 hover:bg-brand-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
