"use client";

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";

export function Footer() {
  const { lang, toggle } = useLang();
  const t = content.footer;
  const nav = content.nav;

  return (
    <footer
      className="py-12 border-t"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--line)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
          <div>
            <p
              className="text-base tracking-widest font-medium mb-1"
              style={{ color: "var(--cta)", fontFamily: "var(--font-dm-mono)" }}
            >
              Mindcare Abroad
            </p>
            <p
              className="text-sm"
              style={{
                color: "var(--text-sec)",
                fontFamily: "var(--font-noto-sans)",
              }}
            >
              {t.tagline[lang]}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/mindcare.abroad"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
              style={{
                color: "var(--text-sec)",
                fontFamily: "var(--font-dm-mono)",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <circle cx="17.5" cy="6.5" r="1.5" />
              </svg>
              {t.instagram}
            </a>
            <span style={{ color: "var(--line)" }}>|</span>
            <a
              href="mailto:mindcare.abroad@gmail.com"
              className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
              style={{
                color: "var(--text-sec)",
                fontFamily: "var(--font-dm-mono)",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
              </svg>
              mindcare.abroad@gmail.com
            </a>
            <span style={{ color: "var(--line)" }}>|</span>
            <p
              className="text-sm"
              style={{
                color: "var(--text-sec)",
                fontFamily: "var(--font-dm-mono)",
              }}
            >
              {t.location}
            </p>
            <span style={{ color: "var(--line)" }}>|</span>
            <button
              onClick={toggle}
              className="text-sm tracking-widest transition-opacity hover:opacity-70"
              style={{
                color: "var(--text-sec)",
                fontFamily: "var(--font-dm-mono)",
              }}
            >
              {nav.lang[lang]}
            </button>
          </div>
        </div>

        <div className="pt-6 border-t" style={{ borderColor: "var(--line)" }}>
          <p
            className="text-xs leading-relaxed max-w-2xl"
            style={{
              color: "var(--text-muted)",
              fontFamily: "var(--font-noto-sans)",
            }}
          >
            {t.legal[lang]}
          </p>
        </div>

        {/* German SEO hidden text */}
        <p className="sr-only">
          Koreanische psychologische Beratung für Koreaner in Deutschland und
          ganz Europa. Online-Sitzungen auf Koreanisch, auch in Hamburg
          persönlich verfügbar.
        </p>
      </div>
    </footer>
  );
}
