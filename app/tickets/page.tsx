"use client";

import { useState } from "react";
import StringLights from "@/components/StringLights";
import TicketCard from "@/components/TicketCard";
import { TICKETS, type TicketType } from "@/lib/festival-data";

export default function TicketsPage() {
  const [selected, setSelected] = useState<TicketType | null>(null);
  const [name, setName] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  function closeModal() {
    setSelected(null);
    setConfirmed(false);
    setName("");
  }

  return (
    <div>
      <section className="bg-dusk text-cream-light py-14">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <h1 className="font-display text-4xl">Tickets</h1>
          <p className="mt-2 text-cream-light/75">
            Priced fairly. Paid affectionately. No card required — this is not a
            real checkout, and never will be.
          </p>
        </div>
        <StringLights className="mt-8" />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-6 sm:grid-cols-3">
          {TICKETS.map((ticket) => (
            <TicketCard key={ticket.name} ticket={ticket} onSelect={setSelected} />
          ))}
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-dusk/80 px-4"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-cream-light p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {!confirmed ? (
              <>
                <h2 className="font-display text-2xl text-rust-dark">{selected.name}</h2>
                <p className="mt-1 text-sm text-bark/70">{selected.description}</p>
                <p className="mt-4 font-display text-lg text-rust">
                  Total due: {selected.price}
                </p>

                <label className="mt-5 block text-sm text-bark/70">
                  Name on the pass
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Linda"
                    className="mt-1 w-full rounded-lg border border-bark/20 bg-cream px-3 py-2 text-bark outline-none focus:border-rust"
                  />
                </label>

                <div className="mt-6 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setConfirmed(true)}
                    disabled={!name.trim()}
                    className="flex-1 rounded-full bg-rust px-5 py-2.5 text-sm font-medium text-cream-light disabled:opacity-40 hover:bg-rust-dark transition-colors"
                  >
                    Pay in kisses 💋
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded-full border border-bark/20 px-5 py-2.5 text-sm text-bark/70 hover:border-bark/40"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center">
                <p className="text-3xl">💋💋💋</p>
                <h2 className="mt-3 font-display text-2xl text-rust-dark">
                  You&apos;re in, {name}!
                </h2>
                <p className="mt-2 text-sm text-bark/75 leading-relaxed">
                  {selected.name} confirmed. Payment of {selected.price.toLowerCase()}{" "}
                  received in full — we&apos;ll collect in person, by the fire, no receipts
                  necessary.
                </p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-6 rounded-full bg-rust px-6 py-2.5 text-sm font-medium text-cream-light hover:bg-rust-dark transition-colors"
                >
                  Back to the field
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
