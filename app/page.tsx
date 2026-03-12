import dynamic from "next/dynamic"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"

const WorkflowSection = dynamic(
  () => import("@/components/workflow-section").then((m) => m.WorkflowSection),
  { ssr: true }
)
const ProjectsSection = dynamic(
  () => import("@/components/projects-section").then((m) => m.ProjectsSection),
  { ssr: true }
)
const AboutSection = dynamic(
  () => import("@/components/about-section").then((m) => m.AboutSection),
  { ssr: true }
)

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
