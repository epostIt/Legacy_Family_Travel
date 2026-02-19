import type { Testimonial } from "@/lib/data";

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="py-20 lg:py-24">
      <div className="section-wrap">
        <h2 className="font-display text-3xl text-brand-900 sm:text-4xl">
          Families we&apos;ve helped make memories
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">{testimonial.tripType}</p>
              <p className="mt-4 leading-relaxed text-slate-700">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="mt-6 font-medium text-brand-900">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
