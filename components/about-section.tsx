"use client"

import { Button } from "@/components/ui/button"
import { ContactModal } from "@/components/contact-modal"
import { Download } from "lucide-react"
import { motion } from "framer-motion"
import Magnet from "@/components/Magnet"
import Image from "next/image"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
}

export function AboutSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#c4ced3" }}
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

      {/* Photo — anchored to the bottom-left, bleeds off the bottom edge */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={0}
        className="pointer-events-none absolute bottom-0 left-17 select-none"
        style={{ width: "clamp(300px, 40vw, 550px)" }}
      >
        <Image
          src="/my-image.png"
          alt="Divyansh Porwal"
          width={520}
          height={780}
          className="w-full object-cover object-top"
          style={{ display: "block" }}
          priority
        />
      </motion.div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex justify-end">
          {/* Text — right side, pushed away from the standing figure */}
          <div className="w-full max-w-xl md:text-right">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={1}
              className="text-sm font-medium tracking-[0.2em] uppercase"
              style={{ color: "rgba(12,35,64,0.65)" }}
            >
              About Me
            </motion.p>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={2}
              className="mt-4 font-display text-4xl font-black tracking-tight text-balance sm:text-5xl lg:text-6xl"
              style={{ color: "#0c2340" }}
            >
              Crafting Worlds, One Game at a Time
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={3}
              className="mt-6 text-base leading-relaxed sm:text-lg"
              style={{ color: "rgba(12,35,64,0.85)" }}
            >
              I am an aspiring AAA game developer with a deep passion for crafting immersive
              worlds and compelling interactive experiences. From concept art to code,
              I pour everything into each project. My goal is to build games that leave a
              lasting impression -- blending strong narrative design with polished
              gameplay mechanics. Currently honing my craft as an indie developer,
              one project at a time.
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={4}
              className="mt-10 flex flex-wrap items-center gap-4 md:justify-end"
            >
              <ContactModal variant="dark" />
              <Magnet padding={80} magnetStrength={3}>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full border px-8 transition-all hover:scale-105"
                  style={{
                    borderColor: "rgba(12,35,64,0.35)",
                    color: "#0c2340",
                    backgroundColor: "transparent",
                  }}
                  asChild
                >
                  <a href="/ResumeV1.pdf" download="Divyansh_Porwal_Resume.pdf">
                    <Download className="size-4" />
                    Download Resume
                  </a>
                </Button>
              </Magnet>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
