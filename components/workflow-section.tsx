"use client"

import { motion } from "framer-motion"
import { Code2, Gamepad2, Rocket, SearchCheck } from "lucide-react"
import LogoLoop from "@/components/LogoLoop"
import SpotlightCard from "@/components/SpotlightCard"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
}

const workflowSteps = [
  {
    title: "Research & Planning",
    description:
      "I define the core game loop, identify player goals, and plan technical scope before production starts.",
    icon: SearchCheck,
  },
  {
    title: "Prototype & Build",
    description:
      "I quickly prototype mechanics and iterate in code to test ideas early and reduce production risk.",
    icon: Code2,
  },
  {
    title: "Polish & Gameplay",
    description:
      "I tune visuals, controls, and feedback to make each interaction feel smooth, responsive, and fun.",
    icon: Gamepad2,
  },
  {
    title: "Launch & Improve",
    description:
      "I ship, gather feedback, and continuously improve balance, performance, and player experience.",
    icon: Rocket,
  },
]

const platformLogos = [
  {
    title: "Unreal Engine",
    src: "/logos/343-3436652_ue-logo-unreal-engine-icon.png",
    alt: "Unreal Engine logo",
  },
  {
    title: "Blender",
    src: "/logos/Blender_logo_no_text.svg.png",
    alt: "Blender logo",
  },
  {
    title: "Perforce",
    src: "/logos/Logo-perforce-icon-reg.svg.png",
    alt: "Perforce logo",
  },
  {
    title: "GitHub",
    src: "/logos/github-white-icon.png",
    alt: "GitHub logo",
  },
  {
    title: "Visual Studio",
    src: "/logos/Visual-Studio-logo.png",
    alt: "Visual Studio logo",
  },
  {
    title: "Photoshop",
    src: "/logos/pngimg.com - photoshop_PNG2.png",
    alt: "Adobe Photoshop logo",
  },
  {
    title: "DaVinci Resolve",
    src: "/logos/DaVinci_Resolve_Studio.png",
    alt: "DaVinci Resolve logo",
  },
  {
    title: "Obsidian",
    src: "/logos/2023_Obsidian_logo.svg.png",
    alt: "Obsidian logo",
  },
]

export function WorkflowSection() {
  return (
    <section
      id="workflow"
      className="relative flex min-h-screen items-center overflow-hidden pb-36 pt-24 lg:pb-40 lg:pt-32"
      style={{ backgroundColor: "#a21414" }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="md:ml-auto md:max-w-5xl md:text-right">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            className="text-sm font-medium tracking-[0.2em] uppercase text-white/70"
          >
            My Workflow
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            className="mt-4 font-display text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            How I Build Games
          </motion.h2>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon

            return (
              <motion.div
                key={step.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index + 4}
                className="h-full"
              >
                <SpotlightCard
                  className="h-full rounded-xl border border-white/65 bg-white/10 p-8 backdrop-blur-lg"
                  spotlightColor="rgb(255, 93, 198)"
                >
                  <div className="flex items-center gap-3 md:justify-end">
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    <div className="flex size-10 items-center justify-center rounded-lg border border-white/45 bg-white/10">
                      <Icon className="size-5 text-white/90" />
                    </div>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-white/85 sm:text-base md:text-right">
                    {step.description}
                  </p>
                </SpotlightCard>
              </motion.div>
            )
          })}
        </div>

      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={8}
        className="absolute inset-x-0 bottom-0 w-full overflow-hidden border-y border-white/20 bg-white/5"
      >
        <LogoLoop
          logos={platformLogos}
          speed={80}
          gap={38}
          fadeOut
          fadeOutColor="#5b0a0a"
          logoHeight={40}
          ariaLabel="Platforms and tools I use"
          className="w-full py-4"
        />
      </motion.div>
    </section>
  )
}