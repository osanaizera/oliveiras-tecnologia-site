import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { MissionVision } from "@/components/site/MissionVision";
import { Services } from "@/components/site/Services";
import { Clients } from "@/components/site/Clients";
import { WhyUs } from "@/components/site/WhyUs";
import { Blog } from "@/components/site/Blog";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oliveiras Tecnologia — Engenharia e Transformação Industrial" },
      {
        name: "description",
        content:
          "Parceiros estratégicos em engenharia industrial: automação, manutenção inteligente e software para a Indústria 4.0 e 5.0.",
      },
      { property: "og:title", content: "Oliveiras Tecnologia — Transformação Industrial" },
      {
        property: "og:description",
        content: "Soluções de engenharia, automação e software industrial sob medida.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <MissionVision />
        <Services />
        <Clients />
        <WhyUs />
        <Blog />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
