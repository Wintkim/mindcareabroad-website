"use client";

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
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
        <a
          href="#"
          className="text-lg sm:text-xl tracking-[0.12em] font-medium whitespace-nowrap"
          style={{ color: "var(--cta)", fontFamily: "var(--font-dm-mono)" }}
        >
          {t.logo}
        </a>

        <div className="flex items-center gap-2 sm:gap-4">
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
            href="/booking"
            className="inline-flex min-h-11 items-center px-5 sm:px-6 py-2.5 rounded-full text-base font-semibold whitespace-nowrap transition-opacity hover:opacity-85"
            style={{
              backgroundColor: "var(--cta)",
              color: "#fff",
              fontFamily: "var(--font-noto-sans)",
            }}
          >
            {lang === "ko" ? "상담 예약" : "Book"}
          </Link>
        </div>
      </div>
    </nav>
  );
}
