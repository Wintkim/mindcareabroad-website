'use client'

import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'

export function Footer() {
  const { lang, toggle } = useLang()
  const t = content.footer
  const nav = content.nav

  return (
    <footer
      className="py-12 border-t"
      style={{
        backgroundColor: 'var(--surface)',
        borderColor: 'var(--line)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
          <div>
            <p
              className="text-base tracking-widest font-medium mb-1"
              style={{ color: 'var(--cta)', fontFamily: 'var(--font-dm-mono)' }}
            >
              Mindcare Abroad
            </p>
            <p
              className="text-sm"
              style={{ color: 'var(--text-sec)', fontFamily: 'var(--font-noto-sans)' }}
            >
              {t.tagline[lang]}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm transition-opacity hover:opacity-70"
              style={{ color: 'var(--text-sec)', fontFamily: 'var(--font-dm-mono)' }}
            >
              {t.instagram}
            </a>
            <span style={{ color: 'var(--line)' }}>|</span>
            <p
              className="text-sm"
              style={{ color: 'var(--text-sec)', fontFamily: 'var(--font-dm-mono)' }}
            >
              {t.location}
            </p>
            <span style={{ color: 'var(--line)' }}>|</span>
            <button
              onClick={toggle}
              className="text-sm tracking-widest transition-opacity hover:opacity-70"
              style={{ color: 'var(--text-sec)', fontFamily: 'var(--font-dm-mono)' }}
            >
              {nav.lang[lang]}
            </button>
          </div>
        </div>

        <div
          className="pt-6 border-t"
          style={{ borderColor: 'var(--line)' }}
        >
          <p
            className="text-xs leading-relaxed max-w-2xl"
            style={{
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-noto-sans)',
            }}
          >
            {t.legal[lang]}
          </p>
        </div>

        {/* German SEO hidden text */}
        <p className="sr-only">
          Koreanische psychologische Beratung für Koreaner in Deutschland und ganz Europa.
          Online-Sitzungen auf Koreanisch, auch in Hamburg persönlich verfügbar.
        </p>
      </div>
    </footer>
  )
}
