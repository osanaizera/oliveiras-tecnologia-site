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

export default function Index() {
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
