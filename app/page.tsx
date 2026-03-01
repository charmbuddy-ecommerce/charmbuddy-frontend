import CatalogueGrid from "@/components/home/CatalogueGrid";
import EverydayBloomCarousel from "@/components/home/EverydayBloomCarousel";

import FAQAccordion from "@/components/home/FAQAccordion";
import Hero from "@/components/home/Hero";
import HomeBackground from "@/components/home/HomeBackground";
import MatchMosaic from "@/components/home/MatchMosaic";
import Testimonials from "@/components/home/Testimonials";
import AppShell from "@/components/layout/AppShell";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

type RawFaqItem = {
  id: number | string;
  question: string;
  answer: string;
};

async function getFaqsFromAPI(): Promise<FAQItem[]> {
  try {
    console.log("URL:", `${process.env.NEXT_PUBLIC_API_BASE_URL}/faqs`);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/faqs`, {
      cache: "no-store", // Biar selalu update dari database
    });

    if (!response.ok) {
      throw new Error("Gagal mengambil data FAQ dari API");
    }

    const resData = await response.json();

    const faqs = resData.data.map((item: RawFaqItem) => ({
      id: String(item.id),
      question: item.question,
      answer: item.answer,
    }));

    return faqs;
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    return []; 
  }
}

export default async function HomePage() {
  const faqItems = await getFaqsFromAPI();
  const firstFaqId = faqItems.length > 0 ? faqItems[0].id : "";

  return (
    <AppShell>
      <HomeBackground />
      <Hero />
      <EverydayBloomCarousel />
      <CatalogueGrid />
      <MatchMosaic />
      <Testimonials />
      
      {faqItems.length > 0 ? (
        <FAQAccordion defaultOpenId={firstFaqId} items={faqItems} />
      ) : (
        <div className="w-full text-center py-10 text-black">
          FAQ belum tersedia.
        </div>
      )}
    </AppShell>
  );
}