'use client'

import Image from 'next/image'
import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'
import { FadeUp } from './FadeUp'

export function About() {
  const { lang } = useLang()
  const t = content.about

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <FadeUp className="order-2 md:order-1">
            <p
              className="text-xs tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: 'var(--font-dm-mono)', color: 'var(--cta)' }}
            >
              {t.eyebrow[lang]}
            </p>
            <h2
              className="text-3xl md:text-4xl font-semibold mb-2"
              style={{ fontFamily: 'var(--font-noto-serif)' }}
            >
              {t.name[lang]}
            </h2>
            <p
              className="text-sm mb-8"
              style={{
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-dm-mono)',
              }}
            >
              {t.location}
            </p>
            <p
              className="text-sm font-medium mb-5"
              style={{
                color: 'var(--cta)',
                fontFamily: 'var(--font-noto-sans)',
              }}
            >
              {t.credentials[lang]}
            </p>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{
                color: 'var(--text-sec)',
                fontFamily: 'var(--font-noto-sans)',
              }}
            >
              {t.bio[lang]}
            </p>
          </FadeUp>

          <FadeUp delay={1} className="order-1 md:order-2">
            <div
              className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-sm mx-auto md:mx-0"
              style={{ backgroundColor: 'var(--surface2)' }}
            >
              <Image
                src="/profile.png.png"
                alt={lang === 'ko' ? '김겨울 상담자' : 'Kim Kyeoul, counselor'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 40vw"
                priority
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
