'use client'

import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'
import { FadeUp } from './FadeUp'

export function Services() {
  const { lang } = useLang()
  const t = content.services

  return (
    <section
      id="services"
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

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {t.items.map((item, i) => (
            <FadeUp key={i} delay={(i + 1) as 1 | 2}>
              <div
                className="p-8 rounded-2xl border h-full"
                style={{
                  backgroundColor: 'var(--bg)',
                  borderColor: 'var(--line)',
                }}
              >
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ fontFamily: 'var(--font-noto-serif)' }}
                >
                  {item.title[lang]}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{
                    color: 'var(--text-sec)',
                    fontFamily: 'var(--font-noto-sans)',
                  }}
                >
                  {item.desc[lang]}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <div
            className="rounded-2xl border p-8 grid sm:grid-cols-2 gap-8"
            style={{
              backgroundColor: 'var(--bg)',
              borderColor: 'var(--line)',
            }}
          >
            <div>
              <p
                className="text-xs tracking-[0.15em] uppercase mb-4"
                style={{
                  fontFamily: 'var(--font-dm-mono)',
                  color: 'var(--text-muted)',
                }}
              >
                {t.formats.label[lang]}
              </p>
              <ul className="space-y-2">
                {t.formats.list.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm"
                    style={{ fontFamily: 'var(--font-noto-sans)', color: 'var(--text-sec)' }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: 'var(--cta)' }}
                    />
                    {item[lang]}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p
                className="text-xs tracking-[0.15em] uppercase mb-4"
                style={{
                  fontFamily: 'var(--font-dm-mono)',
                  color: 'var(--text-muted)',
                }}
              >
                {t.pricing.label[lang]}
              </p>
              <p
                className="text-base"
                style={{
                  fontFamily: 'var(--font-noto-sans)',
                  color: 'var(--cta)',
                }}
              >
                {t.pricing.value[lang]}
              </p>
            </div>
          </div>

          <p
            className="text-xs mt-6"
            style={{
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-noto-sans)',
            }}
          >
            {t.note[lang]}
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
