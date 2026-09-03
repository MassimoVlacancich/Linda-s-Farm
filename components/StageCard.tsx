import type { Stage } from "@/lib/festival-data";

export default function StageCard({ stage }: { stage: Stage }) {
  return (
    <div className="rounded-2xl border border-bark/10 bg-cream-light p-5 shadow-sm">
      <h3 className="font-display text-xl text-rust-dark">{stage.name}</h3>
      <p className="mt-2 text-sm text-bark/80 leading-relaxed">{stage.blurb}</p>
    </div>
  );
}
