"use client";

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { FadeUp } from "./FadeUp";
import Link from "next/link";
import { bookingLinks } from "@/lib/booking";

export function Booking() {
  const { lang } = useLang();
  const t = content.booking;

  return (
    <section id="booking" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeUp>
          <p
            className="text-xs tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "var(--font-dm-mono)", color: "var(--cta)" }}
          >
            {t.eyebrow[lang]}
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4 whitespace-pre-line"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            {t.heading[lang]}
          </h2>
          <p
            className="text-sm mb-12 inline-flex items-center justify-center gap-2"
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
              className="max-w-2xl mx-auto text-sm leading-relaxed whitespace-pre-line"
              style={{
                color: "var(--text-sec)",
                fontFamily: "var(--font-noto-sans)",
              }}
            >
              {t.intro[lang]}
            </p>
          </FadeUp>

          <FadeUp>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-3">
                <Link
                  href={bookingLinks.selection}
                  className="flex min-h-14 items-center justify-center w-full px-6 py-4 rounded-2xl text-base font-semibold transition-opacity hover:opacity-85"
                  style={{
                    backgroundColor: "var(--cta)",
                    color: "#fff",
                    fontFamily: "var(--font-noto-sans)",
                  }}
                >
                  {t.bookBtn[lang]}
                </Link>
                <p className="text-sm leading-6" style={{ color: "var(--text-sec)" }}>
                  {t.bookingHint[lang]}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={bookingLinks.kakao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-14 items-center justify-center w-full px-6 py-4 rounded-2xl text-base font-semibold border transition-opacity hover:opacity-75"
                  style={{
                    backgroundColor: "transparent",
                    color: "var(--cta)",
                    borderColor: "var(--cta)",
                    fontFamily: "var(--font-noto-sans)",
                  }}
                >
                  {t.kakaoBtn[lang]}
                </a>
                <p className="text-sm leading-6" style={{ color: "var(--text-sec)" }}>
                  {t.inquiryHint[lang]}
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
