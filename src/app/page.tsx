import AboutSection from "@/components/homepage/AboutSection";
import HeroSection from "@/components/homepage/HeroSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import SkillsSection from "@/components/homepage/SkillsSection";
import WhyMe from "@/components/homepage/WhyMe";

export default function Home() {
  return (
    <main className='min-h-screen w-full'>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <WhyMe />
      {/* <CtaSection /> */}
      {/* <ContactPage /> */}
                                    

      
    </main>
  )
}
