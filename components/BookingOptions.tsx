"use client";

import { useLang } from "@/lib/LanguageContext";
import { bookingLinks, policies, services } from "@/lib/booking";

export function BookingOptions() {
  const { lang } = useLang();
  const ko = lang === "ko";

  return (
    <main className="pt-28 pb-24">
      <section className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[.2em] uppercase mb-4" style={{ color: "var(--cta)" }}>BOOKING</p>
        <h1 className="text-4xl md:text-5xl font-semibold mb-5" style={{ fontFamily: "var(--font-noto-serif)" }}>
          {ko ? "원하는 상담을 선택해 주세요" : "Choose the support that fits you"}
        </h1>
        <p className="max-w-2xl leading-relaxed mb-10" style={{ color: "var(--text-sec)" }}>
          {ko ? "시간과 가격을 확인한 뒤 예약하거나 일정을 문의할 수 있습니다. 예약 가능 시간은 예약 시스템에서 고객님의 현지 시간대로 표시됩니다." : "Check the duration and price, then book or ask about scheduling. Available times appear in your local time zone."}
        </p>

        <div className="grid md:grid-cols-6 gap-5 mb-8">
          {services.map((service) => (
            <article
              key={service.id}
              className={`rounded-3xl p-6 md:p-7 flex flex-col border ${service.id.startsWith("couple-") ? "md:col-span-3" : "md:col-span-2"}`}
              style={{
                background: service.featured ? "var(--cta-dim)" : "var(--surface)",
                borderColor: service.featured ? "var(--cta)" : service.id === "intensive-individual-program" ? "#9b8264" : "var(--line)",
                borderWidth: service.id === "intensive-individual-program" ? "1.5px" : "1px",
              }}
            >
              {service.featured && <span className="self-start text-xs rounded-full px-3 py-1 mb-4 text-white" style={{ background: "var(--cta)" }}>{ko ? "가장 추천 · 반복되는 고민에" : "Recommended"}</span>}
              {service.id === "intensive-individual-program" && <span className="self-start text-xs rounded-full px-3 py-1 mb-4" style={{ background: "var(--bg)", color: "var(--cta)", border: "1px solid var(--line)" }}>{ko ? "집중적인 지원이 필요한 시기에 · 상담 후 추천" : "Focused support · recommended after consultation"}</span>}
              <h2 className="text-xl md:text-2xl font-semibold mb-3">{ko ? service.title : service.titleEn}</h2>
              <div className="flex items-end gap-3 mb-5"><strong className="text-3xl" style={{ color: "var(--cta)" }}>{service.price}</strong><span>{ko ? service.duration : service.durationEn}</span></div>
              {service.compareAt && <p className="text-sm mb-4" style={{ color: "var(--text-sec)" }}>{service.compareAt}</p>}
              <p className="mb-4 leading-relaxed" style={{ color: "var(--text-sec)" }}>{service.forWhom}</p>
              {service.id === "intensive-individual-program" ? (
                <details className="mb-7 text-sm flex-1">
                  <summary className="cursor-pointer font-medium">{ko ? "포함 내용 보기" : "View what is included"}</summary>
                  <ul className="space-y-2 mt-3">{service.includes.map((item) => <li key={item}>✓ {item}</li>)}</ul>
                </details>
              ) : (
                <ul className="space-y-2 mb-7 text-sm flex-1">{service.includes.map((item) => <li key={item}>✓ {item}</li>)}</ul>
              )}
              <a href={service.href} target="_blank" rel="noopener noreferrer" className="min-h-12 rounded-full px-5 py-3 text-center font-medium text-white" style={{ background: "var(--cta)" }}>{ko ? service.action : service.actionEn}</a>
              <p className="text-xs leading-relaxed mt-3" style={{ color: "var(--text-sec)" }}>
                {service.id === "individual-session"
                  ? (ko ? "원하는 시간을 선택해 주세요. 결제 확인 후 예약이 최종 확정됩니다." : "Choose your preferred time. The booking is finalized after payment is verified.")
                  : service.id === "individual-program"
                    ? (ko ? "간단한 신청 내용을 확인한 뒤 결제 방법과 첫 상담 일정을 안내드립니다." : "After reviewing your short application, we will provide payment details and the first-session schedule.")
                    : service.id === "intensive-individual-program"
                      ? (ko ? "신청 내용을 확인한 뒤 프로그램 적합 여부, 결제 방법과 첫 상담 일정을 안내드립니다." : "After reviewing your application, we will confirm suitability, payment, and the first-session schedule.")
                    : (ko ? "제출 후 진행 가능 여부, 일정과 결제 방법을 개별적으로 안내드립니다." : "After submission, we will confirm availability, scheduling, and payment details individually.")}
              </p>
              {service.id === "intensive-individual-program" && <p className="text-xs leading-relaxed mt-3" style={{ color: "var(--text-muted)" }}>{ko ? "집중 프로그램은 모든 고객에게 필요한 과정은 아닙니다. 현재 상황과 필요한 지원의 빈도를 확인한 뒤 적합한 경우 안내드립니다." : "The intensive program is not necessary for everyone. It is offered when suitable after reviewing your situation and support needs."}</p>}
            </article>
          ))}
        </div>

        <article className="rounded-2xl p-6 md:p-8 border mb-12 md:flex md:items-center md:justify-between md:gap-10" style={{ background: "var(--cta-dim)", borderColor: "var(--line)" }}>
          <div className="max-w-2xl">
            <p className="text-xs tracking-[.16em] uppercase mb-3" style={{ color: "var(--cta)" }}>{ko ? "선택 가능한 사전상담" : "Optional introduction"}</p>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{ko ? "어떤 상담이 맞는지 모르겠어요" : "Not sure which option fits?"}</h2>
            <p style={{ color: "var(--text-sec)" }}>{ko ? "결제 전 무료 15분 사전상담에서 현재 상황과 필요한 도움을 간단히 확인할 수 있습니다. 유료상담의 필수 단계는 아닙니다." : "Use an optional free 15-minute call before payment to briefly check your needs. It is not required for paid counseling."}</p>
          </div>
          <div className="mt-6 md:mt-0 md:w-72 shrink-0">
            <a href={bookingLinks.FREE_CONSULTATION_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-center rounded-full px-6 font-semibold text-white" style={{ background: "var(--cta)" }}>{ko ? "무료 15분 예약하기" : "Book a free 15-minute call"}</a>
            <p className="text-xs text-center mt-3 leading-relaxed" style={{ color: "var(--text-sec)" }}>{ko ? "원하는 시간을 선택하면 별도 결제 없이 예약이 확정됩니다." : "Choose a time and your booking is confirmed without payment."}</p>
          </div>
        </article>

        <section className="rounded-3xl p-6 md:p-8 mb-8" style={{ background: "var(--surface)" }}>
          <h2 className="text-2xl font-semibold mb-6">{ko ? "예약과 결제는 이렇게 진행됩니다" : "How booking and payment work"}</h2>
          <ol className="grid md:grid-cols-4 gap-4">{(ko ? ["1. 상품 선택", "2. 시간 선택 또는 일정 문의", "3. 결제 안내", "4. 결제 확인 후 최종 확정"] : ["1. Choose a service", "2. Book or ask", "3. Payment details", "4. Final confirmation"]).map((step) => <li key={step} className="rounded-2xl p-4" style={{ background: "var(--bg)" }}>{step}</li>)}</ol>
          <p className="font-semibold mt-6">{ko ? "유료상담 예약은 결제 확인 후 최종 확정됩니다." : "Paid bookings are confirmed after payment is verified."}</p>
          <p className="text-sm mt-2" style={{ color: "var(--text-sec)" }}>{ko ? "계좌이체 안내는 신청 후 안내 화면 또는 개별 메시지로 안전하게 전달됩니다. 4주 프로그램은 결제 후 첫 일정만 선택하고, 나머지 3회는 첫 상담 후 조율합니다." : "Bank-transfer details are provided privately after application. Programs book the first session first; the remaining three are arranged afterward."}</p>
        </section>

        <details className="rounded-3xl border p-6 mb-8" style={{ borderColor: "var(--line)" }}><summary className="font-semibold cursor-pointer">{ko ? "취소 및 일정 변경 규정 확인" : "Cancellation and rescheduling policy"}</summary><p className="mt-5 text-sm"><strong>{ko ? "무료 15분 상담: " : "Free consultation: "}</strong>{policies.free}</p><ul className="mt-4 space-y-2 text-sm">{policies.paid.map((item) => <li key={item}>• {item}</li>)}</ul></details>

        <p className="text-sm leading-relaxed p-5 rounded-2xl" style={{ background: "var(--surface)", color: "var(--text-sec)" }}>{ko ? "Mindcare Abroad의 상담은 관계, 감정 및 일상 문제를 함께 정리하고 실천 방향을 찾는 비의료적 상담 및 코칭 서비스입니다. 의료적 진단이나 정신과적 치료, 응급 서비스를 대신하지 않습니다." : "Mindcare Abroad provides non-medical counseling and coaching for relationships, emotions, and everyday concerns. It does not replace medical diagnosis, psychiatric treatment, or emergency services."}</p>
        <p className="text-center mt-8"><a href={bookingLinks.kakao} target="_blank" rel="noreferrer noopener" className="underline underline-offset-4">{ko ? "예약 전 궁금한 점이 있나요? 카카오톡으로 문의하기" : "Questions before booking? Ask via KakaoTalk"}</a></p>
      </section>
    </main>
  );
}
