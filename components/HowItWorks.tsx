'use client'

import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'
import { FadeUp } from './FadeUp'

export function HowItWorks() {
  const { lang } = useLang()
  const t = content.howItWorks

  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32"
      style={{ backgroundColor: 'var(--surface)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <p
            className="text-xs tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: 'var(--font-dm-mono)', color: 'var(--cta)' }}
          >
            {t.eyebrow[lang]}
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-16"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            {t.heading[lang]}
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-8 left-[calc(16.67%+16px)] right-[calc(16.67%+16px)] h-px"
            style={{ backgroundColor: 'var(--line)' }}
            aria-hidden="true"
          />

          {t.steps.map((step, i) => (
            <FadeUp key={i} delay={(i + 1) as 1 | 2 | 3}>
              <div className="relative">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6 text-sm font-medium"
                  style={{
                    backgroundColor: 'var(--cta)',
                    color: '#fff',
                    fontFamily: 'var(--font-dm-mono)',
                  }}
                >
                  {step.number}
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ fontFamily: 'var(--font-noto-serif)' }}
                >
                  {step.title[lang]}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    color: 'var(--text-sec)',
                    fontFamily: 'var(--font-noto-sans)',
                  }}
                >
                  {step.desc[lang]}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
