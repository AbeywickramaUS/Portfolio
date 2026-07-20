import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsGrid from "@/components/SkillsGrid";
import ProjectBento from "@/components/ProjectBento";
import ExperienceSection from "@/components/ExperienceSection";
import GlassGallery from "@/components/GlassGallery";
import ContactPanel from "@/components/ContactPanel";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10 flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsGrid />
        <ProjectBento />
        <GlassGallery />
        <ExperienceSection />
        <ContactPanel />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
