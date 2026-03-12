"use client"

import dynamic from "next/dynamic"
import { Navbar } from "@/components/navbar"
import Image from "next/image"
import { useRef } from "react"
import { ArrowLeft, ArrowUpRight, Gamepad2, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const MetallicPaint = dynamic(() => import("@/components/MetallicPaint"), { ssr: false })

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
}

const tools = [
  "Unreal Engine 5",
  "Blender",
  "Substance Painter",
  "C++",
  "Blueprint",
  "Maya",
]

interface ProjectSectionProps {
  index: number
  bgColor: string
  textColor: string
  subtitleColor: string
  mutedColor: string
  accentColor: string
  align: "right" | "left"
  title: string
  description: string
  link: string
  posterSrc: string
  clipSrc: string
}

function ProjectSection({
  index,
  bgColor,
  textColor,
  subtitleColor,
  mutedColor,
  accentColor,
  align,
  title,
  description,
  link,
  posterSrc,
  clipSrc,
}: ProjectSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePosterHover = () => {
    if (!videoRef.current) return
    videoRef.current.currentTime = 0
    void videoRef.current.play()
  }

  const handlePosterLeave = () => {
    if (!videoRef.current) return
    videoRef.current.pause()
    videoRef.current.currentTime = 0
  }

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Large background project number */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center overflow-hidden"
        style={{
          justifyContent: align === "right" ? "flex-start" : "flex-end",
        }}
      >
        <span
          className="font-display text-[20rem] font-black leading-none sm:text-[28rem] lg:text-[36rem]"
          style={{ color: "rgba(255,255,255,0.04)" }}
        >
          {`0${index}`}
        </span>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div
          className={`flex flex-col items-center gap-12 lg:items-start lg:gap-16 ${align === "right" ? "lg:flex-row" : "lg:flex-row"}`}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
            className={`w-full max-w-md ${align === "right" ? "lg:order-1" : "lg:order-2"}`}
          >
            <div
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/20 bg-white/5 shadow-2xl"
              onMouseEnter={handlePosterHover}
              onMouseLeave={handlePosterLeave}
            >
              <Image
                src={posterSrc}
                alt={`${title} poster`}
                fill
                className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                sizes="(max-width: 1024px) 80vw, 35vw"
                priority={index === 1}
              />
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={clipSrc} type="video/mp4" />
              </video>
            </div>
          </motion.div>

          <div
            className={`w-full max-w-2xl ${align === "right" ? "lg:order-2 lg:ml-auto text-right" : "lg:order-1 lg:mr-auto text-left"}`}
          >
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={1}
              className="text-sm font-medium tracking-[0.25em] uppercase"
              style={{ color: mutedColor }}
            >
              {`Project 0${index}`}
            </motion.p>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={2}
              className="mt-5 font-display text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
              style={{ color: textColor }}
            >
              {title}
            </motion.h2>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={3}
              className={`mt-3 flex items-center gap-3 ${align === "right" ? "justify-end" : "justify-start"}`}
            >
              <div className="h-px w-10" style={{ backgroundColor: accentColor }} />
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase"
                style={{ color: accentColor }}
              >
                {title}
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={4}
              className="mt-8 text-base leading-relaxed sm:text-lg"
              style={{ color: subtitleColor }}
            >
              {description}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={5}
              className={`mt-10 flex gap-4 ${align === "right" ? "justify-end" : "justify-start"}`}
            >
              <Button
                size="lg"
                className="rounded-full px-8 text-sm font-semibold transition-all hover:scale-105"
                style={{ backgroundColor: accentColor, color: bgColor }}
                asChild
              >
                <a href={link || "#"} target="_blank" rel="noopener noreferrer">
                  View Project
                  <ArrowUpRight className="ml-2 size-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ── Hero Section ── Dark Navy + Gold ── */}
      <section
        className="relative flex min-h-screen items-center overflow-hidden"
        style={{ backgroundColor: "#0A0F1E" }}
      >
        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-32 lg:px-10 lg:py-40">
          <div className="grid items-center gap-14 lg:grid-cols-[1fr_420px]">
            <div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
              >
                <Button
                  variant="ghost"
                  className="mb-10 rounded-full border px-5 text-sm transition-all hover:scale-105"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    borderColor: "rgba(255,255,255,0.1)",
                  }}
                  asChild
                >
                  <a href="/#home">
                    <ArrowLeft className="mr-2 size-4" />
                    Back to Home
                  </a>
                </Button>
              </motion.div>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="text-sm font-medium tracking-[0.25em] uppercase"
                style={{ color: "#C9A84C" }}
              >
                Portfolio
              </motion.p>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="mt-5 font-display text-6xl font-black tracking-tight sm:text-7xl lg:text-8xl xl:text-9xl"
                style={{ color: "#E8C547" }}
              >
                My Projects
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="mt-8 max-w-2xl text-base leading-relaxed sm:text-lg"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                A collection of indie games and interactive experiences I have built
                throughout my journey as an aspiring game developer.
              </motion.p>

              {/* Tools / Tech strip */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={4}
                className="mt-14 flex flex-col gap-5"
              >
                <div className="flex items-center gap-3">
                  <Wrench className="size-4" style={{ color: "#C9A84C" }} />
                  <span
                    className="text-xs font-semibold tracking-[0.2em] uppercase"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    Created With
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border px-4 py-2 text-xs font-medium tracking-wide"
                      style={{
                        borderColor: "rgba(201,168,76,0.25)",
                        color: "#C9A84C",
                        backgroundColor: "rgba(201,168,76,0.06)",
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Scroll indicator */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={5}
                className="mt-20 flex items-center gap-3"
              >
                <Gamepad2 className="size-4" style={{ color: "rgba(255,255,255,0.3)" }} />
                <span
                  className="text-xs font-medium tracking-widest uppercase"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  Scroll to explore
                </span>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={6}
              className="mx-auto h-32 w-full max-w-sm -translate-y-[100px] sm:h-40 md:h-48 lg:h-56"
              aria-hidden="true"
            >
              <MetallicPaint
                imageSrc="/diwision-vector.svg"
                speed={0.35}
                refraction={0.012}
                blur={0.02}
                brightness={1.9}
                contrast={0.55}
                lightColor="#fff6cf"
                darkColor="#6b540d"
                tintColor="#f0c95e"
                patternSharpness={0.85}
                waveAmplitude={0.7}
                chromaticSpread={1.3}
                distortion={0.55}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Project 01 ── Indigo ── Right aligned ── */}
      <ProjectSection
        index={1}
        bgColor="#312E81"
        textColor="#FFFFFF"
        subtitleColor="rgba(255,255,255,0.65)"
        mutedColor="rgba(255,255,255,0.4)"
        accentColor="#A5B4FC"
        align="right"
        title="Kaos Balls"
        description="Pure, frantic arcade fun. Take control of six different paddles in this 3D board-style game, managing chaotic ball drops to rack up massive scores before you get overwhelmed."
        link="https://diwision.itch.io/kaos-balls"
        posterSrc="/posters/KaosBalls.png"
        clipSrc="/game-clips/KaosBalls.mp4"
      />

      {/* ── Project 02 ── Violet-Blue ── Left aligned ── */}
      <ProjectSection
        index={2}
        bgColor="#3B2D8E"
        textColor="#FFFFFF"
        subtitleColor="rgba(255,255,255,0.65)"
        mutedColor="rgba(255,255,255,0.4)"
        accentColor="#C4B5FD"
        align="left"
        title="Knight's Reckoning"
        description="Grab a friend and defend a mystical medieval realm. This action-packed local multiplayer tests your strategic co-op skills against relentless waves of magical alien enemies."
        link="https://diwision.itch.io/knights-reckoning"
        posterSrc="/posters/KnightsReckoning.png"
        clipSrc="/game-clips/KnightsReckoning.mp4"
      />

      {/* ── Project 03 ── Light Blue ── Right aligned ── */}
      <ProjectSection
        index={3}
        bgColor="#1E3A5F"
        textColor="#FFFFFF"
        subtitleColor="rgba(255,255,255,0.65)"
        mutedColor="rgba(255,255,255,0.4)"
        accentColor="#7DD3FC"
        align="right"
        title="Cyber Carnage"
        description="My debut high-intensity action game, originally developed as a collaborative Game Jam project. It challenges players to use swift evasion mechanics and heavy melee action to defeat extra terrestrial enemies."
        link="https://diwision.itch.io/cyber-carnage"
        posterSrc="/posters/CyberCarnage.png"
        clipSrc="/game-clips/CyberCarnage.mp4"
      />
    </div>
  )
}
