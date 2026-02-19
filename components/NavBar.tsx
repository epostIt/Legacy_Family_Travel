"use client";

import { useState } from "react";
import { navLinks } from "@/lib/data";

type NavBarProps = {
  onPlanClick: () => void;
};

export default function NavBar({ onPlanClick }: NavBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-100/70 bg-white/90 backdrop-blur">
      <div className="section-wrap flex h-20 items-center justify-between">
        <a href="#top" className="font-display text-xl font-semibold text-brand-900">
          Legacy Family Travel
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            link.label === "Contact" ? (
              <button
                key={link.href}
                type="button"
                onClick={onPlanClick}
                className="text-sm font-medium text-slate-700 transition hover:text-brand-700"
              >
                {link.label}
              </button>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition hover:text-brand-700"
              >
                {link.label}
              </a>
            )
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" onClick={onPlanClick} className="btn-primary hidden sm:inline-flex">
            Plan My Trip
          </button>
          <button
            type="button"
            className="rounded-full border border-brand-200 p-2 text-brand-800 md:hidden"
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen((value) => !value)}
          >
            ☰
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-brand-100 bg-white px-6 py-4 md:hidden" aria-label="Mobile Primary">
          <div className="section-wrap flex flex-col gap-4 px-0">
            {navLinks.map((link) => (
              link.label === "Contact" ? (
                <button
                  key={link.href}
                  type="button"
                  className="text-left text-sm font-medium text-slate-700 transition hover:text-brand-700"
                  onClick={() => {
                    setMobileOpen(false);
                    onPlanClick();
                  }}
                >
                  {link.label}
                </button>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-700 transition hover:text-brand-700"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              )
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onPlanClick();
              }}
              className="btn-primary mt-2 w-full"
            >
              Plan My Trip
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
