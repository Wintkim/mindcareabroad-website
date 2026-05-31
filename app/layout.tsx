import type { Metadata } from 'next'
import { Noto_Serif_KR, Noto_Sans_KR, DM_Mono } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/LanguageContext'

const notoSerif = Noto_Serif_KR({
  variable: '--font-noto-serif',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
})

const notoSans = Noto_Sans_KR({
  variable: '--font-noto-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
})

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mindcare Abroad — 유럽 한인을 위한 1:1 온라인 상담',
  description:
    '독일, 유럽에 사는 한국인을 위한 한국어 온라인 상담. 혼자 버티지 않아도 됩니다.',
  keywords: [
    '한국인 상담',
    '유럽 한국인',
    '온라인 상담',
    '해외 한국인',
    'koreanische Beratung',
    'Koreaner in Deutschland',
    'psychologische Beratung auf Koreanisch',
  ],
  other: {
    'description:de':
      'Koreanische Beratung für Koreaner in Europa. Online und in Hamburg verfügbar.',
    'keywords:de':
      'koreanische Beratung, Koreaner in Deutschland, psychologische Beratung auf Koreanisch',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ko"
      className={`${notoSerif.variable} ${notoSans.variable} ${dmMono.variable} antialiased`}
    >
      <body
        className="min-h-full"
        style={{ fontFamily: 'var(--font-noto-sans)', backgroundColor: 'var(--bg)' }}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
