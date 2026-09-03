import type { FoodStall } from "@/lib/festival-data";

export default function FoodStallCard({ stall }: { stall: FoodStall }) {
  return (
    <div className="rounded-2xl border border-bark/10 bg-cream-light p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg text-rust-dark">{stall.name}</h3>
      </div>
      <p className="mt-2 text-sm text-bark/80 leading-relaxed">{stall.description}</p>
      <p className="mt-3 text-xs text-moss">📍 Near {stall.near}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {stall.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-moss/15 px-2.5 py-1 text-xs text-moss">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
