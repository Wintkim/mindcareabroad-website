import type { Metadata } from "next";
import { Noto_Serif_KR, Noto_Sans_KR, DM_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

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
  title: "Mindcare Abroad | 해외 한국인 마음 상담 · 유럽 온라인",
  description:
    "독일·유럽에 사는 한국인을 위한 한국어 마음 상담. 외로움, 관계 갈등, 정체성 혼란. 화상·전화로 편하게 시작하세요.",
  keywords: [
    "해외 한국인 상담",
    "유럽 한국인 상담",
    "독일 한국인 상담",
    "한국어 상담",
    "해외 마음상담",
    "온라인 상담",
    "함부르크 한국인",
    "베를린 한국인",
    "해외 정서상담",
    "커플 상담",
    "관계 상담",
    "나르시시스트 상담",
    "정체성 상담",
    "이민 상담",
  ],
  openGraph: {
    title: "Mindcare Abroad | 해외 한국인 마음 상담",
    description:
      "독일·유럽에 사는 한국인을 위한 한국어 마음 상담. 혼자 버티지 않아도 됩니다.",
    type: "website",
    url: "https://mindcareabroad-website.vercel.app",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary",
    title: "Mindcare Abroad | 해외 한국인 마음 상담",
    description:
      "독일·유럽에 사는 한국인을 위한 한국어 마음 상담. 혼자 버티지 않아도 됩니다.",
  },
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
