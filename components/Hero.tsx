'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'
import { AuroraBackground } from '@/components/ui/aurora-background'

export function Hero() {
  const { lang } = useLang()
  const t = content.hero

  const headline = t.headline[lang].split('\n')

  return (
    <AuroraBackground
      className="min-h-screen items-start justify-start pt-16 overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {/* Blob background */}
      <svg
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[60vw] max-w-3xl opacity-60 pointer-events-none"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M320,60 C420,40 530,120 540,220 C550,320 480,420 380,460 C280,500 160,470 100,380 C40,290 60,160 140,100 C180,70 220,80 320,60Z"
          fill="#ddc9a8"
        />
      </svg>

      {/* Illustrated room scene */}
      <svg
        className="absolute right-8 bottom-0 w-[340px] md:w-[440px] opacity-80 pointer-events-none"
        viewBox="0 0 440 360"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Floor */}
        <rect x="40" y="300" width="360" height="60" rx="4" fill="#ddc9a8" />
        {/* Wall */}
        <rect x="40" y="60" width="360" height="245" rx="4" fill="#e6d4bc" />

        {/* Armchair body */}
        <rect x="140" y="210" width="160" height="90" rx="20" fill="#2d4a45" />
        {/* Armchair seat cushion */}
        <rect x="155" y="230" width="130" height="55" rx="12" fill="#3d5e59" />
        {/* Armchair backrest */}
        <rect x="140" y="170" width="160" height="55" rx="16" fill="#2d4a45" />
        {/* Armchair left arm */}
        <rect x="130" y="195" width="25" height="55" rx="10" fill="#243d39" />
        {/* Armchair right arm */}
        <rect x="285" y="195" width="25" height="55" rx="10" fill="#243d39" />
        {/* Armchair legs */}
        <rect x="155" y="295" width="14" height="20" rx="4" fill="#243d39" />
        <rect x="271" y="295" width="14" height="20" rx="4" fill="#243d39" />

        {/* Side table */}
        <rect x="305" y="260" width="70" height="8" rx="4" fill="#c4a97d" />
        <rect x="333" y="268" width="14" height="36" rx="3" fill="#c4a97d" />
        <rect x="318" y="300" width="44" height="6" rx="3" fill="#c4a97d" />

        {/* Cup on table */}
        <rect x="328" y="245" width="20" height="16" rx="4" fill="#eee1d0" />
        <path d="M348 250 Q358 253 348 258" stroke="#ddc9a8" strokeWidth="2" fill="none" />

        {/* Floor lamp */}
        <rect x="82" y="130" width="6" height="170" rx="3" fill="#c4a97d" />
        <rect x="76" y="296" width="18" height="8" rx="4" fill="#b89060" />
        <ellipse cx="85" cy="130" rx="28" ry="14" fill="#e6d4bc" stroke="#c4a97d" strokeWidth="2" />
        <ellipse cx="85" cy="130" rx="22" ry="8" fill="#fff8ef" />

        {/* Plant pot */}
        <rect x="360" y="262" width="42" height="38" rx="6" fill="#8c6d3f" />
        <rect x="356" y="258" width="50" height="10" rx="4" fill="#7a5e35" />
        {/* Plant leaves */}
        <ellipse cx="381" cy="200" rx="12" ry="30" fill="#2d4a45" transform="rotate(-20 381 200)" />
        <ellipse cx="381" cy="200" rx="12" ry="30" fill="#3d5e59" transform="rotate(10 381 200)" />
        <ellipse cx="381" cy="200" rx="10" ry="28" fill="#2d4a45" transform="rotate(35 381 200)" />
        <ellipse cx="381" cy="200" rx="9" ry="25" fill="#4a7066" transform="rotate(-40 381 200)" />

        {/* Window */}
        <rect x="170" y="80" width="100" height="80" rx="4" fill="#d4e8e4" stroke="#c4a97d" strokeWidth="2" />
        <line x1="220" y1="80" x2="220" y2="160" stroke="#c4a97d" strokeWidth="1.5" />
        <line x1="170" y1="120" x2="270" y2="120" stroke="#c4a97d" strokeWidth="1.5" />
        {/* Window light */}
        <rect x="172" y="82" width="46" height="36" rx="2" fill="rgba(255,255,240,0.4)" />
      </svg>

      <motion.div
        className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-xl">
          <p
            className="text-xs tracking-[0.2em] uppercase mb-8 opacity-60"
            style={{ fontFamily: 'var(--font-dm-mono)', color: 'var(--cta)' }}
          >
            {lang === 'ko'
              ? '유럽 한인을 위한 온라인 상담'
              : 'Online counseling for Koreans in Europe'}
          </p>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6"
            style={{ fontFamily: 'var(--font-noto-serif)', color: 'var(--text)' }}
          >
            {headline.map((line, i) => (
              <span key={i}>
                {line}
                {i < headline.length - 1 && <br />}
              </span>
            ))}
          </h1>

          <p
            className="text-lg md:text-xl mb-10 leading-relaxed"
            style={{ color: 'var(--text-sec)', fontFamily: 'var(--font-noto-sans)' }}
          >
            {t.sub[lang]}
          </p>

          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-base font-medium transition-opacity hover:opacity-85"
            style={{
              backgroundColor: 'var(--cta)',
              color: '#fff',
              fontFamily: 'var(--font-noto-sans)',
            }}
          >
            {t.cta[lang]}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </motion.div>
    </AuroraBackground>
  )
}
