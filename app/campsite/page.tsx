import StringLights from "@/components/StringLights";
import { CAMPSITE } from "@/lib/festival-data";

export default function CampsitePage() {
  return (
    <div>
      <section className="bg-dusk text-cream-light py-14">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <h1 className="font-display text-4xl">Campsite</h1>
          <p className="mt-2 text-cream-light/75">
            Pitched with plenty of space, a fire never too far away.
          </p>
        </div>
        <StringLights className="mt-8" />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 space-y-14">
        <div>
          <h2 className="font-display text-2xl">Pitches</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {CAMPSITE.zones.map((zone) => (
              <div key={zone.name} className="rounded-2xl border border-bark/10 bg-cream-light p-5">
                <h3 className="font-display text-lg text-rust-dark">{zone.name}</h3>
                <p className="mt-2 text-sm text-bark/75 leading-relaxed">{zone.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl">What&apos;s included on site</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {CAMPSITE.amenities.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-bark/10 bg-cream-light px-4 py-3 text-sm text-bark/80"
              >
                <span className="text-amber">🔥</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl">What to bring</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {CAMPSITE.whatToBring.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-bark/10 bg-cream-light px-4 py-3 text-sm text-bark/80"
              >
                <span className="text-amber">🧣</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-bark/10 bg-dusk text-cream-light p-6 text-sm leading-relaxed">
          <h2 className="font-display text-xl text-amber mb-2">Lay of the land</h2>
          <p className="text-cream-light/80">
            Stages sit at the edges of the field, ringed by camping. Bonfires and hay
            bale seating fill the space in between, with the bigger tea &amp; blanket
            points roughly in the middle — so wherever you&apos;re pitched, you&apos;re never
            more than a short stroll from a fire and a cup of tea.
          </p>
        </div>
      </section>
    </div>
  );
}
