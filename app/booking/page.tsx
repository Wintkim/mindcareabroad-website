import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BookingOptions } from "@/components/BookingOptions";

export const metadata: Metadata = { title: "상담 예약", description: "Mindcare Abroad 상담 상품, 가격, 예약 및 결제 절차 안내" };

export default function BookingPage() {
  return <><Nav /><BookingOptions /><Footer /></>;
}
