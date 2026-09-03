"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/lineup", label: "Line-up" },
  { href: "/food", label: "Food" },
  { href: "/campsite", label: "Campsite" },
  { href: "/tickets", label: "Tickets" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-dusk text-cream-light shadow-lg shadow-black/20">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-display text-xl tracking-wide">
          🔥 Linda&apos;s Farm
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded border border-amber/40 px-3 py-1.5 text-sm"
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? "Close" : "Menu"}
        </button>

        <ul className="hidden md:flex items-center gap-7 text-sm tracking-wide">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-amber transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-5 pb-4 text-sm">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded px-2 py-2 hover:bg-dusk-light hover:text-amber transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
