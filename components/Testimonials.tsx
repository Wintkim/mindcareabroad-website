"use client";

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { FadeUp } from "./FadeUp";

export function Testimonials() {
  const { lang } = useLang();
  const t = content.testimonials;

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32"
      style={{ backgroundColor: "var(--surface)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <p
            className="text-xs tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-dm-mono)", color: "var(--cta)" }}
          >
            {t.eyebrow[lang]}
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-16"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            {t.heading[lang]}
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-6">
          {t.cards.map((card, i) => (
            <FadeUp key={i} delay={(i + 1) as 1 | 2 | 3}>
              <div
                className="p-8 rounded-2xl border h-full flex flex-col"
                style={{
                  backgroundColor: "var(--bg)",
                  borderColor: "var(--line)",
                }}
              >
                <span
                  className="text-6xl leading-none mb-3 block select-none"
                  style={{
                    color: "var(--cta)",
                    fontFamily: "Georgia, serif",
                    opacity: 0.5,
                  }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p
                  className="text-base leading-relaxed flex-1"
                  style={{
                    color: "var(--text)",
                    fontFamily: "var(--font-noto-sans)",
                  }}
                >
                  {card.text}
                </p>
                <p
                  className="text-xs mt-6 pt-4"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-dm-mono)",
                    borderTop: "1px solid var(--line)",
                  }}
                >
                  — {card.source}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
