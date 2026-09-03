import type { TicketType } from "@/lib/festival-data";

export default function TicketCard({
  ticket,
  onSelect,
}: {
  ticket: TicketType;
  onSelect: (ticket: TicketType) => void;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-amber/30 bg-cream-light p-6 shadow-sm">
      <h3 className="font-display text-2xl text-rust-dark">{ticket.name}</h3>
      <p className="mt-2 text-sm text-bark/80 leading-relaxed flex-1">{ticket.description}</p>

      <ul className="mt-4 space-y-1.5 text-sm text-bark/70">
        {ticket.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <span className="text-amber">🔥</span> {feature}
          </li>
        ))}
      </ul>

      <p className="mt-5 font-display text-xl text-rust">{ticket.price}</p>

      <button
        type="button"
        onClick={() => onSelect(ticket)}
        className="mt-4 rounded-full bg-rust px-5 py-2.5 text-sm font-medium text-cream-light transition-colors hover:bg-rust-dark"
      >
        Get this pass
      </button>
    </div>
  );
}
