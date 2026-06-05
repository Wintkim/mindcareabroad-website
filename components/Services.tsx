"use client";

import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { FadeUp } from "./FadeUp";

export function Services() {
  const { lang } = useLang();
  const t = content.services;

  return (
    <section
      id="services"
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

        {/* 서비스 카드 4개 */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {t.items.map((item, i) => (
            <FadeUp key={i} delay={(i + 1) as 1 | 2}>
              <div
                className="p-8 rounded-2xl border h-full"
                style={{
                  backgroundColor: "var(--bg)",
                  borderColor: "var(--line)",
                }}
              >
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ fontFamily: "var(--font-noto-serif)" }}
                >
                  {item.title[lang]}
                </h3>
                <p
                  className="text-sm italic mb-3"
                  style={{
                    color: "var(--cta)",
                    fontFamily: "var(--font-noto-sans)",
                    opacity: 0.75,
                  }}
                >
                  {item.hook[lang]}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    color: "var(--text-sec)",
                    fontFamily: "var(--font-noto-sans)",
                  }}
                >
                  {item.desc[lang]}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* 진행 방식 */}
        <FadeUp>
          <div
            className="rounded-2xl border p-6 mb-12"
            style={{
              backgroundColor: "var(--bg)",
              borderColor: "var(--line)",
            }}
          >
            <p
              className="text-xs tracking-[0.15em] uppercase mb-4"
              style={{
                fontFamily: "var(--font-dm-mono)",
                color: "var(--text-muted)",
              }}
            >
              {t.formats.label[lang]}
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {t.formats.list.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm"
                  style={{
                    fontFamily: "var(--font-noto-sans)",
                    color: "var(--text-sec)",
                  }}
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item[lang]}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* 가격 카드 */}
        <FadeUp>
          <p
            className="text-xs tracking-[0.15em] uppercase mb-8"
            style={{
              fontFamily: "var(--font-dm-mono)",
              color: "var(--text-muted)",
            }}
          >
            {t.pricing.label[lang]}
          </p>

          {/* 개인 세션 */}
          <p
            className="text-sm font-semibold mb-4"
            style={{
              fontFamily: "var(--font-noto-sans)",
              color: "var(--text)",
            }}
          >
            {lang === "ko" ? "개인 세션" : "Personal sessions"}
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {t.pricing.personal.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl flex flex-col"
                style={{
                  backgroundColor: item.badge ? "var(--cta-dim)" : "var(--bg)",
                  border: item.badge
                    ? "2px solid var(--cta)"
                    : "1px solid var(--line)",
                }}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4
                    className="text-base font-semibold"
                    style={{
                      fontFamily: "var(--font-noto-sans)",
                      color: "var(--text)",
                    }}
                  >
                    {item.title[lang]}
                  </h4>
                  {item.badge && (
                    <span
                      className="text-xs px-2 py-0.5 rounded-full shrink-0"
                      style={{
                        backgroundColor: "var(--cta)",
                        color: "#fff",
                        fontFamily: "var(--font-noto-sans)",
                      }}
                    >
                      {item.badge[lang]}
                    </span>
                  )}
                </div>
                <p
                  className="text-xs mb-5 flex-1"
                  style={{
                    color: "var(--text-sec)",
                    fontFamily: "var(--font-noto-sans)",
                  }}
                >
                  {item.desc[lang]}
                </p>
                <div>
                  <p
                    className="text-3xl font-bold"
                    style={{
                      color: "var(--cta)",
                      fontFamily: "var(--font-noto-sans)",
                    }}
                  >
                    {item.price[lang]}
                  </p>
                  {item.subPrice && (
                    <p
                      className="text-xs mt-1"
                      style={{
                        color: "var(--text-muted)",
                        fontFamily: "var(--font-noto-sans)",
                      }}
                    >
                      {item.subPrice[lang]}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 커플/부부 세션 */}
          <p
            className="text-sm font-semibold mb-4"
            style={{
              fontFamily: "var(--font-noto-sans)",
              color: "var(--text)",
            }}
          >
            {lang === "ko" ? "커플/부부 세션" : "Couples sessions"}
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {t.pricing.couples.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl flex flex-col"
                style={{
                  backgroundColor: item.badge ? "var(--cta-dim)" : "var(--bg)",
                  border: item.badge
                    ? "2px solid var(--cta)"
                    : "1px solid var(--line)",
                }}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4
                    className="text-base font-semibold"
                    style={{
                      fontFamily: "var(--font-noto-sans)",
                      color: "var(--text)",
                    }}
                  >
                    {item.title[lang]}
                  </h4>
                  {item.badge && (
                    <span
                      className="text-xs px-2 py-0.5 rounded-full shrink-0"
                      style={{
                        backgroundColor: "var(--cta)",
                        color: "#fff",
                        fontFamily: "var(--font-noto-sans)",
                      }}
                    >
                      {item.badge[lang]}
                    </span>
                  )}
                </div>
                <p
                  className="text-xs mb-5 flex-1"
                  style={{
                    color: "var(--text-sec)",
                    fontFamily: "var(--font-noto-sans)",
                  }}
                >
                  {item.desc[lang]}
                </p>
                <div>
                  <p
                    className="text-3xl font-bold"
                    style={{
                      color: "var(--cta)",
                      fontFamily: "var(--font-noto-sans)",
                    }}
                  >
                    {item.price[lang]}
                  </p>
                  {item.subPrice && (
                    <p
                      className="text-xs mt-1"
                      style={{
                        color: "var(--text-muted)",
                        fontFamily: "var(--font-noto-sans)",
                      }}
                    >
                      {item.subPrice[lang]}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div
            className="space-y-1 text-xs"
            style={{
              color: "var(--text-muted)",
              fontFamily: "var(--font-noto-sans)",
            }}
          >
            {t.pricing.notes.map((note, index) => (
              <p key={index}>{note[lang]}</p>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
