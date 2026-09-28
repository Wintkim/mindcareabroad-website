import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BookingOptions } from "@/components/BookingOptions";

const description = "1:1 온라인 상담, 4주 개인·집중 프로그램, 커플 상담과 한 달 커플 패키지를 비교하고 필요한 상담을 선택하세요. 가격, 예약 및 결제 절차를 안내합니다.";

export const metadata: Metadata = {
  title: "상담 선택 및 예약",
  description,
  alternates: { canonical: "/booking", languages: { ko: "/booking", en: "/booking", "x-default": "/booking" } },
  openGraph: {
    title: "상담 선택 및 예약 | Mindcare Abroad",
    description,
    url: "/booking",
    type: "website",
    images: ["/profile.png.png"],
  },
  twitter: {
    card: "summary",
    title: "상담 선택 및 예약 | Mindcare Abroad",
    description,
    images: ["/profile.png.png"],
  },
};

export default function BookingPage() {
  return <><Nav /><BookingOptions /><Footer /></>;
}
