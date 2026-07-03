import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ForYou } from "@/components/ForYou";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";

const siteUrl = "https://www.mindcareabroad.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}#business`,
      name: "Mindcare Abroad",
      url: siteUrl,
      image: `${siteUrl}/profile.png.png`,
      description:
        "독일·유럽·해외에 사는 한국인을 위한 한국어 온라인 마음상담. 외로움, 관계 갈등, 이민 스트레스, 정체성 혼란, 국제커플 소통을 지원합니다.",
      areaServed: ["Germany", "Europe", "Worldwide online"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hamburg",
        addressCountry: "DE",
      },
      email: "mindcare.abroad@gmail.com",
      sameAs: ["https://instagram.com/mindcare.abroad"],
      knowsLanguage: ["ko", "en", "de"],
      priceRange: "0€-280€",
      offers: [
        {
          "@type": "Offer",
          name: "무료 15분 첫 상담",
          price: "0",
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
          url: "https://forms.gle/9bVLEtrsjJjk52U36",
        },
        {
          "@type": "Offer",
          name: "개인 온라인 상담 50분",
          price: "50",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          name: "커플 상담 50분",
          price: "80",
          priceCurrency: "EUR",
        },
      ],
      serviceType: [
        "해외 한국인 상담",
        "독일 한국어 상담",
        "유럽 한국인 온라인 상담",
        "이민 스트레스 상담",
        "관계 및 연애 상담",
        "국제커플 소통 상담",
        "Korean counseling for Koreans abroad",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: "Mindcare Abroad",
      url: siteUrl,
      inLanguage: ["ko-KR", "en"],
      publisher: {
        "@id": `${siteUrl}#business`,
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Nav />
      <main>
        <Hero />
        <ForYou />
        <Services />
        <About />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
