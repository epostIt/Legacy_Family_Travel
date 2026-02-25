"use client";

import { FormEvent, useEffect, useState } from "react";
import { businessInfo } from "@/lib/data";

type PlanCruiseModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function PlanCruiseModal({
  open,
  onClose,
}: PlanCruiseModalProps) {
  const [submitState, setSubmitState] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [validationMessage, setValidationMessage] = useState("");

  useEffect(() => {
    if (open) {
      setSubmitState("idle");
      setValidationMessage("");
    }
  }, [open]);

  if (!open) return null;

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();

    if (!email) {
      setValidationMessage("Email is required.");
      setSubmitState("idle");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setValidationMessage("Please enter a valid email address.");
      setSubmitState("idle");
      return;
    }

    setValidationMessage("");

    setSubmitState("submitting");

    const response = await fetch("/api/inquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        source: "Quick planner modal",
        name: formData.get("name"),
        email: formData.get("email"),
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-soft sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl text-brand-900">
              Easier travel is just a click away.
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Share a few details and we&apos;ll follow up with tailored
              options.
            </p>
            <p className="mt-1 text-xs text-slate-500">
              {businessInfo.advisorName} • {businessInfo.phone}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="text-2xl leading-none text-slate-400 hover:text-slate-600"
          >
            ×
          </button>
        </div>

        <form className="mt-6 space-y-4" onSubmit={onSubmit}>
          <label className="block text-sm font-medium text-slate-700">
            Name
            <input
              required
              name="name"
              type="text"
              className="mt-1.5 w-full rounded-xl border border-slate-300 px-3 py-2.5"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Email
            <input
              required
              name="email"
              type="email"
              className="mt-1.5 w-full rounded-xl border border-slate-300 px-3 py-2.5"
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            What kind of vacation can we help you plan?
            <textarea
              name="message"
              className="mt-1.5 w-full rounded-xl border border-slate-300 px-3 py-2.5"
              rows={3}
            />
          </label>

          <button
            type="submit"
            disabled={submitState === "submitting"}
            className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitState === "submitting" ? "Sending..." : "Submit"}
          </button>

          {validationMessage && (
            <p
              className="rounded-xl bg-amber-50 p-3 text-sm font-medium text-amber-700"
              role="alert"
            >
              {validationMessage}
            </p>
          )}

          {submitState === "success" && (
            <p
              className="rounded-xl bg-emerald-50 p-3 text-sm font-medium text-emerald-700"
              role="status"
            >
              Thanks! Your inquiry was sent.
            </p>
          )}

          {submitState === "error" && (
            <p
              className="rounded-xl bg-red-50 p-3 text-sm font-medium text-red-700"
              role="alert"
            >
              We couldn&apos;t send your inquiry right now. Please email{" "}
              {businessInfo.primaryEmail}.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
