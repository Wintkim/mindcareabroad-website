"use client";

import { useLang } from "@/lib/LanguageContext";
import { contactLinks, content } from "@/lib/content";
import { FadeUp } from "./FadeUp";

export function Booking() {
  const { lang } = useLang();
  const t = content.booking;

  return (
    <section id="booking" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <p
            className="text-xs tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-dm-mono)", color: "var(--cta)" }}
          >
            {t.eyebrow[lang]}
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            {t.heading[lang]}
          </h2>
          <p
            className="text-sm mb-12 inline-flex items-center gap-2"
            style={{
              color: "var(--text-sec)",
              fontFamily: "var(--font-noto-sans)",
            }}
          >
            <span aria-hidden="true">🌍</span>
            {t.note[lang]}
          </p>
        </FadeUp>

        <div className="space-y-6">
          <FadeUp>
            <p
              className="text-sm leading-relaxed"
              style={{
                color: "var(--text-sec)",
                fontFamily: "var(--font-noto-sans)",
              }}
            >
              {t.intro[lang]}
            </p>
          </FadeUp>

          <FadeUp>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={contactLinks.bookingForm}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center w-full px-6 py-4 rounded-2xl text-base font-medium transition-opacity hover:opacity-85"
                style={{
                  backgroundColor: "var(--cta)",
                  color: "#fff",
                  fontFamily: "var(--font-noto-sans)",
                }}
              >
                {t.bookBtn[lang]}
              </a>

              <a
                href={contactLinks.kakao}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center w-full px-6 py-4 rounded-2xl text-base font-medium border transition-opacity hover:opacity-75"
                style={{
                  backgroundColor: "transparent",
                  color: "var(--cta)",
                  borderColor: "var(--cta)",
                  fontFamily: "var(--font-noto-sans)",
                }}
              >
                {t.kakaoBtn[lang]}
              </a>
            </div>
          </FadeUp>

          <FadeUp>
            <div
              className="p-5 rounded-2xl border"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--line)",
              }}
            >
              <p
                className="text-xs tracking-[0.15em] uppercase mb-2"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  color: "var(--text-muted)",
                }}
              >
                {t.responseLabel[lang]}
              </p>
              <p
                className="text-sm"
                style={{
                  color: "var(--text-sec)",
                  fontFamily: "var(--font-noto-sans)",
                }}
              >
                {t.responseText[lang]}
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
