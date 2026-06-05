"use client";

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { FadeUp } from "./FadeUp";

function KakaoIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2.5C5.858 2.5 2.5 5.19 2.5 8.5c0 2.098 1.248 3.946 3.148 5.058l-.77 2.856a.25.25 0 00.384.271L8.94 14.67A9.58 9.58 0 0010 14.75c4.142 0 7.5-2.69 7.5-6s-3.358-5.25-7.5-5.25z"
        fill="#191600"
      />
    </svg>
  );
}

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
            <span>🌍</span>
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
              {lang === "ko"
                ? "지금 바로 연결하고 싶다면 카카오톡으로, 천천히 예약하고 싶다면 폼으로 문의해 주세요 :)"
                : "If you want to connect right away, use KakaoTalk. If you prefer to take it slowly, use the booking form."}
            </p>
          </FadeUp>

          <FadeUp>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="https://open.kakao.com/o/sqXbS7xi"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center w-full px-6 py-4 rounded-2xl text-base font-medium transition-opacity hover:opacity-85"
                style={{
                  backgroundColor: "var(--cta)",
                  color: "#fff",
                  fontFamily: "var(--font-noto-sans)",
                }}
              >
                {lang === "ko"
                  ? "지금 바로 카카오톡으로 문의하기"
                  : "Contact via KakaoTalk now"}
              </a>

              <a
                href="https://forms.gle/9bVLEtrsjJjk52U36"
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
                {lang === "ko" ? "예약폼 작성하기" : "Fill booking form"}
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
                {lang === "ko" ? "응답 시간" : "Response time"}
              </p>
              <p
                className="text-sm"
                style={{
                  color: "var(--text-sec)",
                  fontFamily: "var(--font-noto-sans)",
                }}
              >
                {lang === "ko"
                  ? "보통 24시간 이내에 답장드립니다"
                  : "Usually responds within 24 hours."}
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
