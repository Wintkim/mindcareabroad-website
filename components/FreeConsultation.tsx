"use client";

import Link from "next/link";
import { bookingLinks } from "@/lib/booking";
import { useLang } from "@/lib/LanguageContext";

export function FreeConsultation() {
  const { lang } = useLang();
  const ko = lang === "ko";

  return (
    <main className="pt-28 pb-20">
      <section className="max-w-3xl mx-auto px-6">
        <p className="text-xs tracking-[.2em] uppercase mb-4" style={{ color: "var(--cta)" }}>FREE 15 MINUTES</p>
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-5" style={{ fontFamily: "var(--font-noto-serif)" }}>
          {ko ? "부담 없이 15분, 먼저 이야기해 보세요" : "Start with a free 15-minute conversation"}
        </h1>
        <p className="text-lg leading-relaxed mb-9" style={{ color: "var(--text-sec)" }}>
          {ko ? "긴 사연을 미리 적을 필요는 없습니다. 현재 가장 궁금한 점과 어떤 도움이 맞을지 짧게 확인합니다." : "No long story is required. We briefly check what you need and which kind of support may fit."}
        </p>

        <div className="rounded-3xl p-6 md:p-8 mb-6" style={{ background: "var(--surface)" }}>
          <h2 className="text-xl font-semibold mb-5">{ko ? "15분 동안 확인하는 것" : "What we cover"}</h2>
          <ul className="grid gap-3">
            {(ko ? ["지금 가장 도움받고 싶은 부분", "상담 방식이 나와 잘 맞는지", "1회 상담과 4주 프로그램 중 어떤 선택이 적합한지"] : ["What you most want help with", "Whether the approach feels right", "Whether a single session or program fits best"]).map((item) => <li key={item} className="flex gap-3"><span style={{ color: "var(--cta)" }}>✓</span>{item}</li>)}
          </ul>
        </div>

        <a href={bookingLinks.FREE_CONSULTATION_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-center rounded-full px-7 text-lg font-semibold text-white" style={{ background: "var(--cta)" }}>
          {ko ? "무료 15분 예약하기" : "Book a free 15-minute call"}
        </a>
        <p className="text-sm mt-3 text-center" style={{ color: "var(--text-sec)" }}>{ko ? "원하는 시간을 선택하면 별도 결제 없이 예약이 확정됩니다." : "Choose a time and your booking is confirmed without payment."}</p>

        <div className="mt-12 pt-8 border-t" style={{ borderColor: "var(--line)" }}>
          <h2 className="text-2xl font-semibold mb-3">{ko ? "이미 상담을 시작할 준비가 되셨나요?" : "Ready to begin?"}</h2>
          <p className="mb-5" style={{ color: "var(--text-sec)" }}>{ko ? "무료 상담을 거치지 않고 원하는 유료 상품을 바로 선택해도 됩니다." : "You can choose a paid service directly without taking the free call first."}</p>
          <Link href="/booking" className="inline-flex min-h-12 items-center rounded-full px-6 border font-medium" style={{ color: "var(--cta)", borderColor: "var(--cta)" }}>{ko ? "유료상담 상품 보기" : "View paid services"}</Link>
        </div>
      </section>
    </main>
  );
}
