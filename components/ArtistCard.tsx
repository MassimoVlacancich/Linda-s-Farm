import type { LineupSlot } from "@/lib/festival-data";

const GENRE_STYLES: Record<LineupSlot["genre"], string> = {
  rock: "bg-rust/15 text-rust-dark",
  country: "bg-amber/25 text-rust-dark",
  blues: "bg-dusk/15 text-dusk",
};

export default function ArtistCard({ slot }: { slot: LineupSlot }) {
  return (
    <div className="flex items-start justify-between gap-3 rounded-xl border border-bark/10 bg-cream-light px-4 py-3">
      <div>
        <p className="text-xs uppercase tracking-wide text-bark/50">{slot.time} · {slot.label}</p>
        <p className="font-display text-lg leading-snug">{slot.artist}</p>
      </div>
      <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs capitalize ${GENRE_STYLES[slot.genre]}`}>
        {slot.genre}
      </span>
    </div>
  );
}
