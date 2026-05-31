'use client'

import { useState } from 'react'
import { useLang } from '@/lib/LanguageContext'
import { content } from '@/lib/content'
import { FadeUp } from './FadeUp'

export function Booking() {
  const { lang } = useLang()
  const t = content.booking
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="booking" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <p
            className="text-xs tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: 'var(--font-dm-mono)', color: 'var(--cta)' }}
          >
            {t.eyebrow[lang]}
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ fontFamily: 'var(--font-noto-serif)' }}
          >
            {t.heading[lang]}
          </h2>
          <p
            className="text-sm mb-12 inline-flex items-center gap-2"
            style={{ color: 'var(--text-sec)', fontFamily: 'var(--font-noto-sans)' }}
          >
            <span>🌍</span>
            {t.note[lang]}
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-12">
          {/* CTA buttons */}
          <FadeUp>
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl text-base font-medium transition-opacity hover:opacity-85"
                style={{
                  backgroundColor: 'var(--cta)',
                  color: '#fff',
                  fontFamily: 'var(--font-noto-sans)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <rect x="2" y="3" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M2 7h14" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M6 1v4M12 1v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                {t.bookBtn[lang]}
              </a>

              <a
                href="#"
                className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl text-base font-medium border transition-opacity hover:opacity-75"
                style={{
                  backgroundColor: 'transparent',
                  color: 'var(--cta)',
                  borderColor: 'var(--cta)',
                  fontFamily: 'var(--font-noto-sans)',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M10 2C5.58 2 2 5.36 2 9.5c0 2.28 1.02 4.32 2.64 5.72L4 17l2.28-.76C7.34 16.7 8.64 17 10 17c4.42 0 8-3.36 8-7.5S14.42 2 10 2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
                {t.kakaoBtn[lang]}
              </a>

              <div
                className="p-5 rounded-2xl border mt-6"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--line)',
                }}
              >
                <p
                  className="text-xs tracking-[0.15em] uppercase mb-2"
                  style={{
                    fontFamily: 'var(--font-dm-mono)',
                    color: 'var(--text-muted)',
                  }}
                >
                  {lang === 'ko' ? '응답 시간' : 'Response time'}
                </p>
                <p
                  className="text-sm"
                  style={{ color: 'var(--text-sec)', fontFamily: 'var(--font-noto-sans)' }}
                >
                  {lang === 'ko'
                    ? '보통 1-2 영업일 이내에 답장드립니다.'
                    : 'Usually responds within 1-2 business days.'}
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Contact form */}
          <FadeUp delay={1}>
            {submitted ? (
              <div
                className="p-8 rounded-2xl border flex flex-col items-center justify-center text-center h-full"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--line)',
                }}
              >
                <p className="text-2xl mb-3">🤍</p>
                <p
                  className="text-base font-medium"
                  style={{ fontFamily: 'var(--font-noto-sans)' }}
                >
                  {lang === 'ko'
                    ? '메시지가 전달되었습니다. 곧 연락드리겠습니다.'
                    : "Message received. I'll be in touch soon."}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl border space-y-5"
                style={{
                  backgroundColor: 'var(--surface)',
                  borderColor: 'var(--line)',
                }}
              >
                {[
                  { id: 'name', label: t.form.name[lang], type: 'text' },
                  { id: 'email', label: t.form.email[lang], type: 'email' },
                ].map(({ id, label, type }) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      className="block text-xs tracking-[0.12em] uppercase mb-2"
                      style={{
                        fontFamily: 'var(--font-dm-mono)',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {label}
                    </label>
                    <input
                      id={id}
                      name={id}
                      type={type}
                      required
                      className="w-full px-4 py-3 rounded-xl border bg-transparent outline-none transition-colors focus:border-current text-sm"
                      style={{
                        borderColor: 'var(--line)',
                        fontFamily: 'var(--font-noto-sans)',
                        color: 'var(--text)',
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="prefLang"
                    className="block text-xs tracking-[0.12em] uppercase mb-2"
                    style={{
                      fontFamily: 'var(--font-dm-mono)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {t.form.lang[lang]}
                  </label>
                  <select
                    id="prefLang"
                    name="prefLang"
                    className="w-full px-4 py-3 rounded-xl border bg-transparent outline-none text-sm"
                    style={{
                      borderColor: 'var(--line)',
                      fontFamily: 'var(--font-noto-sans)',
                      color: 'var(--text)',
                      backgroundColor: 'var(--surface)',
                    }}
                  >
                    {t.form.langOpts.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label[lang]}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs tracking-[0.12em] uppercase mb-2"
                    style={{
                      fontFamily: 'var(--font-dm-mono)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {t.form.message[lang]}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl border bg-transparent outline-none text-sm resize-none"
                    style={{
                      borderColor: 'var(--line)',
                      fontFamily: 'var(--font-noto-sans)',
                      color: 'var(--text)',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-sm font-medium transition-opacity hover:opacity-85"
                  style={{
                    backgroundColor: 'var(--cta)',
                    color: '#fff',
                    fontFamily: 'var(--font-noto-sans)',
                  }}
                >
                  {t.form.submit[lang]}
                </button>
              </form>
            )}
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
