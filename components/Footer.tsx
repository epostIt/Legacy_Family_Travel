import { businessInfo, travelAdvisories } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-white py-10">
      <div className="section-wrap flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-xl text-brand-900">Legacy Family Travel</p>
          <p className="mt-2 text-sm text-slate-600">{businessInfo.tagline}</p>
          <p className="mt-2 text-sm text-slate-600">
            {businessInfo.phone} •{" "}
            <a href={`mailto:${businessInfo.primaryEmail}`} className="underline">
              {businessInfo.primaryEmail}
            </a>
          </p>
        </div>
      </div>

      <p className="section-wrap mt-6 text-xs text-slate-500">
        © {new Date().getFullYear()} Legacy Family Travel. All rights reserved.
      </p>
      <div className="section-wrap mt-4 rounded-2xl border border-brand-100 bg-brand-50/50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-800">Travel Notes</p>
        <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-slate-600">
          {travelAdvisories.map((advisory) => (
            <li key={advisory}>{advisory}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
