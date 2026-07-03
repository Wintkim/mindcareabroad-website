"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import { contactLinks, content } from "@/lib/content";

export function Nav() {
  const { lang, toggle } = useLang();
  const t = content.nav;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b" : ""
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(238,225,208,0.95)" : "transparent",
        borderColor: "var(--line)",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-base tracking-widest font-medium"
          style={{ color: "var(--cta)", fontFamily: "var(--font-dm-mono)" }}
        >
          {t.logo}
        </a>

        <div className="flex items-center gap-4">
          <button
            onClick={toggle}
            className="text-sm tracking-widest transition-opacity hover:opacity-70"
            style={{
              color: "var(--text-sec)",
              fontFamily: "var(--font-dm-mono)",
            }}
          >
            {t.lang[lang]}
          </button>
          <a
            href={contactLinks.bookingForm}
            target="_blank"
            rel="noreferrer noopener"
            className="px-5 py-2 rounded-full text-sm font-medium transition-opacity hover:opacity-85"
            style={{
              backgroundColor: "var(--cta)",
              color: "#fff",
              fontFamily: "var(--font-noto-sans)",
            }}
          >
            {t.cta[lang]}
          </a>
        </div>
      </div>
    </nav>
  );
}
