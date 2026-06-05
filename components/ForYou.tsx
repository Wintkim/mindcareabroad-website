"use client";

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { FadeUp } from "./FadeUp";

export function ForYou() {
  const { lang } = useLang();
  const t = content.forYou;

  return (
    <section id="for-you" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <p
            className="text-xs tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-dm-mono)", color: "var(--cta)" }}
          >
            {t.eyebrow[lang]}
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-6"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            {t.heading[lang]}
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl mb-16"
            style={{
              color: "var(--text-sec)",
              fontFamily: "var(--font-noto-sans)",
            }}
          >
            {t.intro[lang]}
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.cards.map((card, i) => (
            <FadeUp
              key={i}
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="h-full"
            >
              <div
                className="p-6 rounded-2xl border h-full flex flex-col"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--line)",
                }}
              >
                <span className="text-2xl mb-3 block" aria-hidden="true">
                  {card.icon}
                </span>
                <h3
                  className="text-base font-medium mb-2"
                  style={{ fontFamily: "var(--font-noto-sans)" }}
                >
                  {card.title[lang]}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "var(--text-sec)",
                    fontFamily: "var(--font-noto-sans)",
                  }}
                >
                  {card.desc[lang]}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
