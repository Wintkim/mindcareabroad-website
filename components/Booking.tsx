"use client";

import { useLang } from "@/lib/LanguageContext";
import { contactLinks, content } from "@/lib/content";
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
            className="text-3xl md:text-4xl font-semibold mb-4"
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
              className="max-w-2xl mx-auto text-sm leading-relaxed"
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
                <a
                  href={bookingLinks.FREE_CONSULTATION_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-14 items-center justify-center w-full px-6 py-4 rounded-2xl text-base font-semibold transition-opacity hover:opacity-85"
                  style={{
                    backgroundColor: "var(--cta)",
                    color: "#fff",
                    fontFamily: "var(--font-noto-sans)",
                  }}
                >
                  {lang === "ko" ? "무료 상담 시간 선택" : "Choose a free consultation time"}
                </a>
                <p className="text-sm leading-6" style={{ color: "var(--text-sec)" }}>
                  {lang === "ko" ? "원하는 시간을 선택하면 별도 결제 없이 예약이 확정됩니다." : "Choose a time and your booking is confirmed without payment."}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/booking"
                  className="flex min-h-14 items-center justify-center w-full px-6 py-4 rounded-2xl text-base font-semibold border transition-opacity hover:opacity-75"
                  style={{
                    backgroundColor: "transparent",
                    color: "var(--cta)",
                    borderColor: "var(--cta)",
                    fontFamily: "var(--font-noto-sans)",
                  }}
                >
                  {lang === "ko" ? "유료상담 바로 예약하기" : "Book a paid session"}
                </Link>
                <p className="text-sm leading-6" style={{ color: "var(--text-sec)" }}>
                  {lang === "ko" ? "상담 상품과 예약 방법을 한눈에 확인할 수 있습니다." : "Review paid services and booking options."}
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp>
            <div
              className="p-5 rounded-2xl border text-center"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--line)",
              }}
            >
              <p
                className="text-sm tracking-[0.12em] uppercase mb-2"
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  color: "var(--text-muted)",
                }}
              >
                {t.responseLabel[lang]}
              </p>
              <p
                className="text-base md:text-lg"
                style={{
                  color: "var(--text-sec)",
                  fontFamily: "var(--font-noto-sans)",
                }}
              >
                {t.responseText[lang]}
              </p>
            </div>
          </FadeUp>
          <p className="text-center text-sm"><a href={contactLinks.kakao} target="_blank" rel="noreferrer noopener" className="underline underline-offset-4">{lang === "ko" ? "예약 전 궁금한 점이 있나요? 카카오톡으로 문의하기" : "Questions? Ask on KakaoTalk"}</a></p>
        </div>
      </div>
    </section>
  );
}
