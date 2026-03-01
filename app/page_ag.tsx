import CatalogueGrid from "@/components/home/CatalogueGrid";
import EverydayBloomCarousel from "@/components/home/EverydayBloomCarousel";
import type { FAQItem } from "@/components/home/FAQAccordion";
import FAQAccordion from "@/components/home/FAQAccordion";
import Hero from "@/components/home/Hero";
import HomeBackground from "@/components/home/HomeBackground";
import MatchMosaic from "@/components/home/MatchMosaic";
import Testimonials from "@/components/home/Testimonials";
import AppShell from "@/components/layout/AppShell";

const faqItems: FAQItem[] = [
  {
    id: "q1",
    question: "Pertanyaan 1",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  { id: "q2", question: "Pertanyaan 2", answer: "" },
  { id: "q3", question: "Pertanyaan 3", answer: "" },
  { id: "q4", question: "Pertanyaan 4", answer: "" },
];

export default function HomePage() {
  return (
    <AppShell>
      <HomeBackground />
      <Hero />
      <EverydayBloomCarousel />
      <CatalogueGrid />
      <MatchMosaic />
      <Testimonials />
      <FAQAccordion defaultOpenId="q1" items={faqItems} />
    </AppShell>
  );
}
