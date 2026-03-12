"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Magnet from "@/components/Magnet"
import CardSwap, { Card } from "@/components/CardSwap"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#0c2340" }}
    >
      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-8">
          {/* Left-aligned content */}
          <div className="max-w-xl">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            className="text-sm font-medium tracking-[0.2em] uppercase"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            My Work
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            className="mt-4 font-display text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl"
            style={{ color: "#FFFFFF" }}
          >
            Projects
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
            className="mt-6 text-base leading-relaxed sm:text-lg"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Here are my indie projects that I have made throughout my years as an
            aspiring game developer.
          </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={3}
              className="mt-10 flex"
            >
              <Magnet padding={80} magnetStrength={3}>
                <Button
                  size="lg"
                  className="rounded-full border px-8 text-base font-semibold transition-all hover:scale-105"
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: "#0c2340",
                    borderColor: "rgba(255,255,255,0.2)",
                  }}
                  asChild
                >
                  <Link href="/projects">
                    Show Projects
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              </Magnet>
            </motion.div>
          </div>

          {/* Right-side animated project posters */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={4}
            className="relative mx-auto h-[380px] w-full max-w-[340px] lg:mx-0 lg:ml-auto lg:h-[460px] lg:max-w-[420px]"
          >
            <CardSwap
              width={730}
              height={955}
              cardDistance={50}
              verticalDistance={58}
              delay={3200}
              pauseOnHover={true}
              easing="elastic"
            >
              <Card
                customClass="overflow-hidden border-white/20"
                style={{
                  backgroundImage: 'url("/posters/the chaos awaits you.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                aria-label="Kaos Balls poster"
              />
              <Card
                customClass="overflow-hidden border-white/20"
                style={{
                  backgroundImage: 'url("/posters/your sword calls for destruction.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                aria-label="Knight's Reckoning poster"
              />
              <Card
                customClass="overflow-hidden border-white/20"
                style={{
                  backgroundImage: 'url("/posters/fight the plight (2).png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                aria-label="Cyber Carnage poster"
              />
            </CardSwap>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
