import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { WorkflowSection } from "@/components/workflow-section"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="relative">
        <div className="sticky top-0 z-10">
          <HeroSection />
        </div>
        <div className="sticky top-0 z-20">
          <WorkflowSection />
        </div>
        <div className="sticky top-0 z-30">
          <ProjectsSection />
        </div>
        <div className="sticky top-0 z-40">
          <AboutSection />
        </div>
      </main>
    </div>
  )
}
