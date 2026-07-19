import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FreeConsultation } from "@/components/FreeConsultation";

export const metadata: Metadata = { title: "무료 15분 상담", description: "무료 15분 사전 상담 시간 선택 및 안내" };

export default function FreeConsultationPage() {
  return <><Nav /><FreeConsultation /><Footer /></>;
}
