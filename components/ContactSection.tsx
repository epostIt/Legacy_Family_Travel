"use client";

import { FormEvent, useState } from "react";
import { businessInfo, tripRegions } from "@/lib/data";

export default function ContactSection() {
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitState("submitting");

    const response = await fetch("/api/inquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source: "Contact section",
        name: formData.get("name"),
        email: formData.get("email"),
        region: formData.get("region"),
        message: formData.get("message"),
      }),
    });

    if (response.ok) {
      setSubmitState("success");
      form.reset();
      return;
    }

    setSubmitState("error");
  };

  return (
    <section id="contact" className="bg-brand-900 py-20 text-white lg:py-24">
      <div className="section-wrap grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">Plan Your Next Vacation</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">Let&apos;s build your family&apos;s signature trip.</h2>
          <p className="mt-5 max-w-md text-brand-100">
            {businessInfo.tagline} Tell us who&apos;s traveling and where you&apos;d like to go. We&apos;ll return with curated options and practical guidance.
          </p>

          <div className="mt-8 space-y-2 text-sm text-brand-100">
            <p>
              Business email:{" "}
              <a href={`mailto:${businessInfo.primaryEmail}`} className="underline">
                {businessInfo.primaryEmail}
              </a>
            </p>
            <p>Phone: {businessInfo.phone}</p>
            <p>Typical response time: 1 business day</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 text-slate-900 shadow-soft sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-700">
              Name
              <input
                required
                name="name"
                type="text"
                className="mt-1.5 w-full rounded-xl border border-slate-300 px-3 py-2.5"
              />
            </label>

            <label className="text-sm font-medium text-slate-700">
              Email
              <input
                required
                name="email"
                type="email"
                className="mt-1.5 w-full rounded-xl border border-slate-300 px-3 py-2.5"
              />
            </label>
          </div>

          <label className="mt-4 block text-sm font-medium text-slate-700">
            Preferred destination region
            <select required name="region" className="mt-1.5 w-full rounded-xl border border-slate-300 px-3 py-2.5">
              <option value="">Select a region</option>
              {tripRegions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </label>

          <label className="mt-4 block text-sm font-medium text-slate-700">
            Message
            <textarea
              name="message"
              rows={4}
              className="mt-1.5 w-full rounded-xl border border-slate-300 px-3 py-2.5"
              placeholder="Share travel dates, ages, and any must-haves."
            />
          </label>

          <button
            type="submit"
            disabled={submitState === "submitting"}
            className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          >
            {submitState === "submitting" ? "Sending..." : "Send inquiry"}
          </button>

          {submitState === "success" && (
            <p className="mt-4 rounded-xl bg-emerald-50 p-3 text-sm font-medium text-emerald-700" role="status">
              Thanks! Your message was received. We&apos;ll reply within one business day.
            </p>
          )}

          {submitState === "error" && (
            <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm font-medium text-red-700" role="alert">
              We couldn&apos;t send your message right now. Please email us directly at {businessInfo.primaryEmail}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
