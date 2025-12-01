import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TrekkingSection from "@/components/TrekkingSection";
import PasseiosSection from "@/components/PasseiosSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <AboutSection />
      <TrekkingSection />
      <PasseiosSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
