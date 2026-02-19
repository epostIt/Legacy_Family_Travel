import Image from "next/image";
import { businessInfo, certifications, specialties } from "@/lib/data";

function CertificationIcon({ icon }: { icon: "award" | "compass" | "academic" | "anchor" }) {
  if (icon === "award") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="4.5" />
        <path d="M8 13.5 6.5 21 12 18l5.5 3-1.5-7.5" />
      </svg>
    );
  }

  if (icon === "compass") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="8" />
        <path d="m10 10 6-2-2 6-6 2 2-6Z" />
      </svg>
    );
  }

  if (icon === "academic") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 9 12 4l9 5-9 5-9-5Z" />
        <path d="M7 11v4c0 1.8 2.2 3 5 3s5-1.2 5-3v-4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="8.5" r="1.5" />
      <path d="M12 10v10M8 13.5h8M6 18.5a6 6 0 0 0 12 0" />
    </svg>
  );
}

export default function WhyCruisesSection() {
  return (
    <section id="why-work-with-us" className="py-20 lg:py-24">
      <div className="section-wrap grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
        <article className="rounded-3xl border border-brand-100 bg-brand-50/70 p-7 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Why Work With Us</p>
              <h2 className="mt-3 font-display text-3xl text-brand-900 sm:text-4xl">{businessInfo.advisorName}</h2>
              <p className="mt-4 max-w-md text-slate-700">
                You work directly with Laurie for every step, from destination and lodging strategy to activity planning and practical pre-trip guidance.
              </p>
            </div>
            <Image
              src={businessInfo.headshotUrl}
              alt="Portrait of Laurie Strickland"
              width={176}
              height={176}
              className="h-36 w-36 self-start rounded-2xl object-cover shadow-soft sm:h-40 sm:w-40"
            />
          </div>

          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            {specialties.map((specialty) => (
              <li key={specialty} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
                {specialty}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-brand-100 bg-white p-7 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Credentials</p>
          <h3 className="mt-3 font-display text-3xl text-brand-900">Certifications and Training</h3>

          <ul className="mt-6 space-y-3">
            {certifications.map((certification) => (
              <li key={certification.id} className="rounded-2xl border border-brand-100 bg-brand-50/40 p-4">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-brand-800">
                    <CertificationIcon icon={certification.icon} />
                  </span>
                  <p className="font-semibold text-brand-900">{certification.title}</p>
                </div>
                <p className="mt-1 text-sm text-slate-600">{certification.issuer}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
