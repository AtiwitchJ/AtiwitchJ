import ThreeBackground from "@/components/ThreeBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-[#1a1a1a] font-sans relative">
      {/* Three.js Background */}
      <ThreeBackground />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        <main className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section: Hero */}
            <section className="pt-32 pb-16">
              <HeroSection />
            </section>

            {/* Section Divider */}
            <div className="border-t border-[#e5e5e5] my-8" />

            {/* Section: About */}
            <section id="about" className="py-16">
              <AboutSection />
            </section>

            {/* Section Divider */}
            <div className="border-t border-[#e5e5e5] my-8" />

            {/* Section: Skills */}
            <section id="skills" className="py-16">
              <SkillsSection />
            </section>

            {/* Section Divider */}
            <div className="border-t border-[#e5e5e5] my-8" />

            {/* Section: Experience */}
            <section id="experience" className="py-16">
              <ExperienceSection />
            </section>

            {/* Section Divider */}
            <div className="border-t border-[#e5e5e5] my-8" />

            {/* Section: Education */}
            <section id="education" className="py-16">
              <EducationSection />
            </section>

            {/* Section Divider */}
            <div className="border-t border-[#e5e5e5] my-8" />

            {/* Section: Projects */}
            <section id="projects" className="py-16">
              <ProjectsSection />
            </section>
          </div>
        </main>

        {/* Section: Contact / Footer */}
        <Footer />
      </div>
    </div>
  );
}
