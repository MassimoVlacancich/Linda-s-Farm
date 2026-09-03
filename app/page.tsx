import Link from "next/link";
import BonfireScene from "@/components/BonfireScene";
import StringLights from "@/components/StringLights";
import { FESTIVAL_HOURS, getFestivalDays } from "@/lib/festival-data";

const VIBE_POINTS = [
  {
    title: "Room to breathe",
    body: "Tents pitched generously apart — this is a countryside campsite, not a squeeze.",
    icon: "🌾",
  },
  {
    title: "Bonfires, big and small",
    body: "Small fires dotted between tents, and bigger points where the tea and hot toddies flow.",
    icon: "🔥",
  },
  {
    title: "Hay bales everywhere",
    body: "Proper seating, farmyard-style, scattered around every fire and stage.",
    icon: "🪢",
  },
  {
    title: "Lightbulb-lit stages",
    body: "String lights and lanterns, not stadium rigs. Cosy over spectacle, always.",
    icon: "💡",
  },
  {
    title: "No huge crowds",
    body: "Five stages spread across the farm means you're never packed in shoulder to shoulder.",
    icon: "🚶",
  },
  {
    title: "Dress like a lumberjack",
    body: "Warm jumpers, flannel, wellies. Sunset to 1am gets properly chilly — dress for it.",
    icon: "🧣",
  },
];

const QUICK_LINKS = [
  { href: "/lineup", title: "Line-up", body: "Rock, country & blues across five stages." },
  { href: "/food", title: "Food", body: "Organic food trucks scattered around the site." },
  { href: "/campsite", title: "Campsite", body: "Tent pitches, fires, and what to bring." },
  { href: "/tickets", title: "Tickets", body: "Priced in the only currency that matters." },
];

export default function Home() {
  const days = getFestivalDays();
  const dateRange =
    days.length > 1
      ? `${days[0].label} – ${days[days.length - 1].label}`
      : days[0].label;

  return (
    <div>
      <section className="relative overflow-hidden">
        <BonfireScene className="absolute inset-0 h-full w-full" />
        <div className="relative mx-auto max-w-4xl px-5 py-28 sm:py-36 text-center text-cream-light">
          <p className="text-sm uppercase tracking-[0.3em] text-amber">
            {dateRange} · {FESTIVAL_HOURS}
          </p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl font-semibold">
            Linda&apos;s Farm Festival
          </h1>
          <p className="mt-5 text-lg text-cream-light/90 max-w-2xl mx-auto leading-relaxed">
            My friends said they were going to Lindisfarne. I heard{" "}
            <span className="text-amber">&quot;Linda&apos;s Farm&quot;</span> — and pictured
            something far cosier: bonfires between the tents, hay bales for seating,
            and rock, country &amp; blues drifting across the field until 1am.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/lineup"
              className="rounded-full bg-rust px-6 py-3 text-sm font-medium hover:bg-rust-dark transition-colors"
            >
              See the line-up
            </Link>
            <Link
              href="/tickets"
              className="rounded-full border border-amber/60 px-6 py-3 text-sm font-medium hover:bg-dusk-light transition-colors"
            >
              Get a pass
            </Link>
          </div>
        </div>
      </section>

      <StringLights className="-mt-1" />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <h2 className="font-display text-3xl text-center">Not your usual festival</h2>
        <p className="mt-2 text-center text-bark/70 max-w-xl mx-auto">
          We built this on purpose to feel like the countryside, not a car park.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VIBE_POINTS.map((point) => (
            <div key={point.title} className="rounded-2xl border border-bark/10 bg-cream-light p-6">
              <span className="text-2xl">{point.icon}</span>
              <h3 className="mt-3 font-display text-lg">{point.title}</h3>
              <p className="mt-1.5 text-sm text-bark/75 leading-relaxed">{point.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-dusk text-cream-light py-16">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-display text-3xl text-center">Around the farm</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-cream-light/15 bg-dusk-light p-6 hover:border-amber/50 transition-colors"
              >
                <h3 className="font-display text-lg text-amber">{link.title}</h3>
                <p className="mt-1.5 text-sm text-cream-light/75 leading-relaxed">{link.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="font-display text-3xl">Getting there</h2>
            <p className="mt-3 text-bark/80 leading-relaxed">
              Same spot as the festival we definitely did not mishear: Holy Island,
              Northumberland. It&apos;s a real tidal island, joined to the mainland by a
              causeway that floods twice a day — so check the safe crossing times
              before you set off, unless a swim is part of your festival experience.
            </p>
            <p className="mt-3 text-bark/80 leading-relaxed">
              Gates open at 4pm, music starts at 5pm sharp. Bring wellies. Bring a jumper.
              Bring another jumper.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-bark/10 shadow-sm">
            <iframe
              title="Map of Holy Island, Northumberland"
              src="https://www.google.com/maps?q=Holy+Island,+Northumberland,+UK&output=embed"
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
