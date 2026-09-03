"use client";

import Link from "next/link";
import { useState } from "react";

const REVEAL_CLICKS = 5;

export default function Footer() {
  const [clicks, setClicks] = useState(0);
  const revealed = clicks >= REVEAL_CLICKS;

  return (
    <footer className="mt-24 bg-dusk text-cream-light">
      <div className="mx-auto max-w-6xl px-5 py-12 grid gap-8 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg text-amber">Linda&apos;s Farm</p>
          <p className="mt-2 text-sm text-cream-light/70">
            Sunset to sunrise, five stages, one very cosy field. Today through Sunday.
          </p>
        </div>

        <div className="text-sm">
          <p className="text-amber mb-2">Around the site</p>
          <ul className="space-y-1 text-cream-light/70">
            <li><Link href="/lineup" className="hover:text-amber">Line-up</Link></li>
            <li><Link href="/food" className="hover:text-amber">Food</Link></li>
            <li><Link href="/campsite" className="hover:text-amber">Campsite</Link></li>
            <li><Link href="/tickets" className="hover:text-amber">Tickets</Link></li>
          </ul>
        </div>

        <div className="text-sm text-cream-light/70">
          <p className="text-amber mb-2">Getting there</p>
          <p>Holy Island, Northumberland. Mind the tides.</p>

          <button
            type="button"
            onClick={() => setClicks((c) => c + 1)}
            className="mt-4 inline-flex items-center gap-2 text-xs text-cream-light/40 hover:text-amber transition-colors"
            aria-label="A little hay bale, curiously clickable"
          >
            🌾 <span className="underline decoration-dotted">psst</span>
          </button>

          {revealed && (
            <p className="mt-3 rounded border border-amber/30 bg-dusk-light p-3 text-xs leading-relaxed text-cream-light/90">
              True story: my friends were going to <strong>Lindisfarne</strong>.
              I misheard it as <strong>&quot;Linda&apos;s Farm&quot;</strong> and
              spent a solid ten minutes picturing bonfires, hay bales, and a
              lineup of country crooners before anyone corrected me. This site
              is what I pictured. We are never speaking of this again.
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-cream-light/10 px-5 py-4 text-center text-xs text-cream-light/40">
        Linda&apos;s Farm Festival — a very fictional, very cosy weekend.
      </div>
    </footer>
  );
}
