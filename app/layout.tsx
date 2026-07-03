import type { Metadata } from "next";
import { Noto_Serif_KR, Noto_Sans_KR, DM_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const siteUrl = "https://www.mindcareabroad.com";
const siteName = "Mindcare Abroad";
const description =
  "독일·유럽·해외에 사는 한국인을 위한 한국어 온라인 마음상담. 외로움, 관계 갈등, 이민 스트레스, 정체성 혼란, 국제커플 소통을 다룹니다. 무료 15분 첫 상담 가능.";

const notoSerif = Noto_Serif_KR({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const notoSans = Noto_Sans_KR({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "독일·유럽 한국인 상담 | Mindcare Abroad",
    template: "%s | Mindcare Abroad",
  },
  description,
  applicationName: siteName,
  keywords: [
    "해외 한국인 상담",
    "독일 한국인 상담",
    "유럽 한국인 상담",
    "함부르크 한국인 상담",
    "베를린 한국인 상담",
    "한국어 상담",
    "온라인 마음상담",
    "해외 마음상담",
    "독일 한국어 상담",
    "유럽 한국어 상담",
    "이민 스트레스 상담",
    "해외 외로움 상담",
    "관계 상담",
    "연애 상담",
    "커플 상담",
    "국제커플 상담",
    "나르시시스트 관계 상담",
    "정체성 혼란 상담",
    "무료 15분 상담",
    "Korean counseling Germany",
    "Korean counseling Europe",
    "Korean therapist Germany",
    "Korean emotional support abroad",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: siteUrl,
    languages: {
      ko: siteUrl,
      en: siteUrl,
      "x-default": siteUrl,
    },
  },
  openGraph: {
    title: "독일·유럽 한국인 상담 | Mindcare Abroad",
    description,
    type: "website",
    url: siteUrl,
    siteName,
    locale: "ko_KR",
    alternateLocale: ["en_US", "de_DE"],
    images: [
      {
        url: `${siteUrl}/profile.png.png`,
        width: 1200,
        height: 1200,
        alt: "Mindcare Abroad 상담자 김겨울",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "독일·유럽 한국인 상담 | Mindcare Abroad",
    description,
    images: [`${siteUrl}/profile.png.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "GNYVQ8qjK7MM1FtNk6SDdhRSYbqNMYD9_UnJZhsPx0c",
  },
  category: "mental health support",
  other: {
    "naver-site-verification": "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${notoSerif.variable} ${notoSans.variable} ${dmMono.variable} antialiased`}
    >
      <body
        className="min-h-full"
        style={{
          fontFamily: "var(--font-noto-sans)",
          backgroundColor: "var(--bg)",
        }}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
