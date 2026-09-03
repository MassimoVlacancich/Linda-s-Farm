"use client";

import { useState } from "react";
import StringLights from "@/components/StringLights";
import ArtistCard from "@/components/ArtistCard";
import { FESTIVAL_HOURS, getFestivalDays, getLineup } from "@/lib/festival-data";

export default function LineupPage() {
  const days = getFestivalDays();
  const lineup = getLineup(days);
  const [activeDay, setActiveDay] = useState(0);
  const day = lineup[activeDay];

  return (
    <div>
      <section className="bg-dusk text-cream-light py-14">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <h1 className="font-display text-4xl">Line-up</h1>
          <p className="mt-2 text-cream-light/75">
            Five stages, {FESTIVAL_HOURS} every night. Our dream bill — the kind of
            lineup we&apos;d love to wake up to, not a confirmed booking (yet).
          </p>
        </div>
        <StringLights className="mt-8" />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="flex flex-wrap justify-center gap-2">
          {lineup.map((d, i) => (
            <button
              key={d.day.label}
              type="button"
              onClick={() => setActiveDay(i)}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                i === activeDay
                  ? "bg-rust text-cream-light"
                  : "bg-cream-light border border-bark/15 text-bark/70 hover:border-rust/50"
              }`}
            >
              {d.day.weekday} <span className="opacity-70">· {d.day.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {day.stages.map(({ stage, slots }) => (
            <div key={stage.slug} className="rounded-2xl border border-bark/10 bg-cream-light/60 p-5">
              <h2 className="font-display text-xl text-rust-dark">{stage.name}</h2>
              <p className="mt-1 text-xs text-bark/60">{stage.blurb}</p>
              <div className="mt-4 space-y-3">
                {slots.map((slot) => (
                  <ArtistCard key={`${slot.time}-${slot.artist}`} slot={slot} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
