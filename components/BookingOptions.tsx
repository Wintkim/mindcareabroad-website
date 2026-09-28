"use client";

import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";
import { bookingLinks, policies, services } from "@/lib/booking";
import { content, ctaLabels } from "@/lib/content";
import { CalButton } from "./CalButton";

export function BookingOptions() {
  const { lang } = useLang();
  const ko = lang === "ko";
  const groups = [
    { id: "individual", title: content.services.pricing.personalLabel },
    { id: "couple", title: content.services.pricing.couplesLabel },
  ] as const;

  return (
    <main className="pt-28 pb-24">
      <section className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[.2em] uppercase mb-4" style={{ color: "var(--cta)" }}>BOOKING</p>
        <h1 className="text-4xl md:text-5xl font-semibold mb-5" style={{ fontFamily: "var(--font-noto-serif)" }}>
          {ko ? "원하는 상담을 선택해 주세요" : "Choose the support that fits you"}
        </h1>
        <p className="max-w-2xl leading-relaxed mb-8" style={{ color: "var(--text-sec)" }}>
          {ko ? "지금 필요한 지원과 상담 횟수를 살펴보고 원하는 시간을 먼저 예약해 주세요." : "Explore the support and number of sessions that suit you, then book a time."}
        </p>

        <div className="flex items-center gap-4 mb-12">
          <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0" style={{ background: "var(--surface2)" }}>
            <Image src="/profile.png.png" alt={ko ? "김겨울 상담자" : "Kim Kyeoul, counselor"} fill className="object-cover" sizes="56px" />
          </div>
          <div>
            <p className="font-semibold">{ko ? "상담자 김겨울" : "Counselor Kim Kyeoul"} <span className="text-sm font-normal" style={{ color: "var(--text-muted)" }}>· {content.about.location}</span></p>
            <p className="text-sm" style={{ color: "var(--text-sec)" }}>{content.about.credentials[lang]}</p>
          </div>
        </div>

        {groups.map((group) => (
        <section key={group.id} aria-labelledby={`${group.id}-heading`}>
        <h2 id={`${group.id}-heading`} className="text-2xl font-semibold mb-5">{group.title[lang]}</h2>
        <div className="grid md:grid-cols-6 gap-5 mb-8">
          {services.filter((service) => service.category === group.id).map((service) => (
            // Each card spans three shared rows (content / CTA / supporting copy) so buttons line up across a row.
            <article
              key={service.id}
              id={service.id}
              className={`rounded-3xl p-6 md:p-7 border grid grid-rows-subgrid row-span-3 gap-y-0 ${service.id.startsWith("couple-") ? "md:col-span-3" : "md:col-span-2"} ${service.featured ? "order-first md:order-none shadow-[0_10px_30px_rgba(45,74,69,0.12)]" : ""}`}
              style={{
                background: service.featured ? "rgba(45, 74, 69, 0.08)" : "var(--surface)",
                borderColor: service.featured ? "var(--cta)" : service.kind === "program" ? "rgba(45, 74, 69, 0.3)" : "var(--line)",
                borderWidth: service.featured ? "2px" : "1px",
              }}
            >
              <div className="flex flex-col pb-6">
                {service.badge && <span className="self-start text-xs rounded-full px-3 py-1 mb-4" style={{ background: service.featured ? "var(--cta)" : "var(--bg)", color: service.featured ? "#fff" : "var(--cta)" }}>{ko ? service.badge : service.badgeEn}</span>}
                <h3 className="text-xl md:text-2xl font-semibold mb-3">{ko ? service.title : service.titleEn}</h3>
                <strong className="text-3xl" style={{ color: "var(--cta)" }}>{service.price}</strong>
                <p className="text-sm mt-1 mb-4" style={{ color: "var(--text-sec)" }}>
                  {ko ? service.duration : service.durationEn}
                  {service.perSession && ` · ${ko ? service.perSession : service.perSessionEn}`}
                </p>
                <p className="leading-relaxed" style={{ color: "var(--text-sec)" }}>{ko ? service.forWhom : service.forWhomEn}</p>
                {service.id === "intensive-individual-program" ? (
                  <details className="mt-4 text-sm">
                    <summary className="cursor-pointer font-medium">{ko ? "포함 내용 보기" : "View what is included"}</summary>
                    <ul className="space-y-1.5 mt-3">{(ko ? service.includes : service.includesEn).map((item) => <li key={item}>✓ {item}</li>)}</ul>
                  </details>
                ) : service.kind === "program" && (
                  <ul className="space-y-1.5 mt-4 text-sm">{(ko ? service.includes : service.includesEn).map((item) => <li key={item}>✓ {item}</li>)}</ul>
                )}
                {"steps" in service && (
                  <div className="rounded-2xl p-4 mt-4 text-sm" style={{ background: "var(--bg)" }}>
                    <p className="font-medium mb-2">{content.booking.stepsLabel[lang]}</p>
                    <ol className="space-y-1" style={{ color: "var(--text-sec)" }}>{(ko ? service.steps : service.stepsEn).map((step) => <li key={step}>{step}</li>)}</ol>
                  </div>
                )}
              </div>
              <CalButton href={service.href} service={service.id} className={`self-end h-12 w-full rounded-full px-6 text-center text-white flex items-center justify-center ${service.featured ? "font-semibold shadow-md" : "font-medium"}`} style={{ background: "var(--cta)" }}>{ko ? service.action : service.actionEn}</CalButton>
              <div className="flex flex-col items-start pt-3 text-xs leading-relaxed">
                <p style={{ color: "var(--text-sec)" }}>
                  {service.kind === "program" ? content.booking.programScheduleHint[lang] : content.booking.sessionBookingHint[lang]}
                </p>
                {service.kind === "program" && <a href={bookingLinks.kakao} target="_blank" rel="noopener noreferrer" className="mt-2 text-sm underline underline-offset-4" style={{ color: "var(--cta)" }}>{ctaLabels.inquire[lang]}</a>}
                {"upgradeNote" in service && <p className="mt-2" style={{ color: "var(--text-muted)" }}>{ko ? service.upgradeNote : service.upgradeNoteEn}</p>}
                {service.id === "intensive-individual-program" && <p className="mt-2" style={{ color: "var(--text-muted)" }}>{ko ? "주 2회가 부담되시면 4주 개인 프로그램으로 시작하셔도 괜찮아요. 첫 상담에서 함께 맞는 빈도를 정할 수 있어요." : "If twice a week feels like too much, the 4-week program is a fine place to start. We can decide the right pace together in the first session."}</p>}
              </div>
            </article>
          ))}
        </div>
        </section>
        ))}

        <section aria-labelledby="testimonials-heading" className="mb-12">
          <h2 id="testimonials-heading" className="text-2xl font-semibold mb-5">{content.testimonials.heading[lang]}</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {content.testimonials.cards.map((card) => (
              <figure key={card.source} className="rounded-2xl p-5 border" style={{ background: "var(--surface)", borderColor: "var(--line)" }}>
                <blockquote className="text-sm leading-relaxed">“{card.text}”</blockquote>
                <figcaption className="text-xs mt-3" style={{ color: "var(--text-muted)" }}>- {card.source}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <article className="rounded-2xl p-6 md:p-8 border mb-12 md:flex md:items-center md:justify-between md:gap-10" style={{ background: "var(--cta-dim)", borderColor: "var(--line)" }}>
          <div className="max-w-2xl">
            <p className="text-xs tracking-[.16em] uppercase mb-3" style={{ color: "var(--cta)" }}>{ctaLabels.inquire[lang]}</p>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">{ko ? "어떤 상담이 맞는지 모르겠어요" : "Not sure which option fits?"}</h2>
            <p style={{ color: "var(--text-sec)" }}>{content.services.trust.points.slice(0, 3).map((point) => point[lang]).join(" ")}</p>
          </div>
          <div className="mt-6 md:mt-0 md:w-72 shrink-0">
            <a href={bookingLinks.kakao} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-center rounded-full px-6 font-semibold text-white" style={{ background: "var(--cta)" }}>{ctaLabels.inquire[lang]}</a>
            <p className="text-xs text-center mt-3 leading-relaxed" style={{ color: "var(--text-sec)" }}>{content.booking.inquiryHint[lang]}</p>
          </div>
        </article>

        <section className="rounded-3xl p-6 md:p-8 mb-8" style={{ background: "var(--surface)" }}>
          <h2 className="text-2xl font-semibold mb-6">{ko ? "예약과 결제는 이렇게 진행됩니다" : "How booking and payment work"}</h2>
          <ol className="grid md:grid-cols-4 gap-4">{(ko ? ["1. 서비스 선택", "2. 첫 회기 시간 예약", "3. 결제 안내", "4. 결제 확인 후 확정"] : ["1. Choose a service", "2. Book your first session", "3. Payment information", "4. Confirmed after payment"]).map((step) => <li key={step} className="rounded-2xl p-4" style={{ background: "var(--bg)" }}>{step}</li>)}</ol>
          <p className="font-semibold mt-6">{ko ? "유료상담 예약은 결제 확인 후 최종 확정됩니다." : "Paid bookings are confirmed once payment arrives."}</p>
          <p className="text-sm mt-2" style={{ color: "var(--text-sec)" }}>{ko ? "프로그램은 첫 회기만 먼저 예약하고, 나머지 회차는 첫 상담 후 함께 조율합니다." : "For programs, book only the first session; the remaining sessions are arranged together afterward."}</p>
        </section>

        <details className="rounded-3xl border p-6 mb-8" style={{ borderColor: "var(--line)" }}><summary className="font-semibold cursor-pointer">{ko ? "취소 및 일정 변경 규정 확인" : "Cancellation and rescheduling policy"}</summary><ul className="mt-4 space-y-2 text-sm">{(ko ? policies.paid : policies.paidEn).map((item) => <li key={item}>• {item}</li>)}</ul></details>

        <p className="text-sm leading-relaxed p-5 rounded-2xl" style={{ background: "var(--surface)", color: "var(--text-sec)" }}>{ko ? "Mindcare Abroad의 상담은 관계, 감정 및 일상 문제를 함께 정리하고 실천 방향을 찾는 비의료적 상담 및 코칭 서비스입니다. 의료적 진단이나 정신과적 치료, 응급 서비스를 대신하지 않습니다." : "Mindcare Abroad provides non-medical counseling and coaching for relationships, emotions, and everyday concerns. It does not replace medical diagnosis, psychiatric treatment, or emergency services."}</p>
      </section>
    </main>
  );
}
