"use client";

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { bookingLinks } from "@/lib/booking";
import Link from "next/link";

export function Nav() {
  const { lang, toggle } = useLang();
  const t = content.nav;
  return (
    <nav
      className="absolute top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg max-[360px]:text-sm sm:text-xl tracking-[0.12em] font-medium whitespace-nowrap"
          style={{ color: "var(--cta)", fontFamily: "var(--font-dm-mono)" }}
        >
          {t.logo}
        </Link>

        <div className="flex min-w-0 items-center gap-2 sm:gap-4">
          <button
            onClick={toggle}
            className="min-h-11 px-2 text-base font-medium tracking-widest transition-opacity hover:opacity-70"
            style={{
              color: "var(--text-sec)",
              fontFamily: "var(--font-dm-mono)",
            }}
          >
            {t.lang[lang]}
          </button>
          <Link
            href={bookingLinks.selection}
            className="inline-flex min-h-11 min-w-0 items-center justify-center px-3 sm:px-6 py-2.5 rounded-full text-sm sm:text-base text-center font-semibold sm:whitespace-nowrap transition-opacity hover:opacity-85"
            style={{
              backgroundColor: "var(--cta)",
              color: "#fff",
              fontFamily: "var(--font-noto-sans)",
            }}
          >
            {t.cta[lang]}
          </Link>
        </div>
      </div>
    </nav>
  );
}
