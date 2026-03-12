"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import LogoLoop from "@/components/LogoLoop"
import ShinyText from "@/components/ShinyText"

const ModelViewer = dynamic(() => import("@/components/ModelViewer"), { ssr: false })

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  }),
}

const heroTextLoopItems = [
  { node: <span className="text-lg font-semibold tracking-[0.1em] uppercase text-white/90 sm:text-xl">Game Developer</span>, ariaLabel: "Game Developer" },
  { node: <span className="text-lg font-semibold tracking-[0.1em] uppercase text-primary/90 sm:text-xl">//</span>, ariaLabel: "separator" },
  { node: <span className="text-lg font-semibold tracking-[0.1em] uppercase text-white/90 sm:text-xl">Web Developer</span>, ariaLabel: "Web Developer" },
  { node: <span className="text-lg font-semibold tracking-[0.1em] uppercase text-primary/90 sm:text-xl">//</span>, ariaLabel: "separator" },
  { node: <span className="text-lg font-semibold tracking-[0.1em] uppercase text-white/90 sm:text-xl">Art Lover</span>, ariaLabel: "Art Lover" },
  { node: <span className="text-lg font-semibold tracking-[0.1em] uppercase text-primary/90 sm:text-xl">//</span>, ariaLabel: "separator" },
  { node: <span className="text-lg font-semibold tracking-[0.1em] uppercase text-white/90 sm:text-xl">AI Enthusiast</span>, ariaLabel: "AI Enthusiast" },
  { node: <span className="text-lg font-semibold tracking-[0.1em] uppercase text-primary/90 sm:text-xl">//</span>, ariaLabel: "separator" },
]

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pb-20 pt-16"
      style={{ backgroundColor: "#003087" }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16 lg:px-10">
        {/* Left side - Name & Title */}
        <div className="flex flex-1 flex-col justify-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-sm font-medium tracking-[0.2em] uppercase text-white/70"
          >
            {"Hi, I'm"}
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mt-5 font-display text-6xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl xl:text-[9rem]"
          >
            <ShinyText text="DIVYANSH" shineColor="#f9de58" textColor="#ff7700" speed={8} />
            <br />
            <ShinyText text="PORWAL" shineColor="#f9de58" textColor="#ff7700" speed={8} />
          </motion.h1>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-8 flex items-center gap-4"
          >
            <div className="h-px w-10 bg-primary/50" />
            <p className="text-lg font-medium tracking-wide text-white/90 sm:text-xl">
              Indie Game Developer
            </p>
          </motion.div>
        </div>

        {/* Right side - 3D model floating freely */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="flex flex-1 items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-lg"
          >
            <ModelViewer
              url="/models/gameBoy12.glb"
              width={1040}
              height={1100}
              defaultRotationX={-120}
              defaultRotationY={-15}
              defaultZoom={1.3}
              minZoomDistance={2.4}
              maxZoomDistance={2.6}
              enableMouseParallax={true}
              enableManualRotation={true}
              enableHoverRotation={true}
              enableManualZoom={false}
              autoFrame={false}
              autoRotate={false}
              environmentPreset="city"
              showScreenshotButton={false}
              placeholderSrc=""
              onModelLoaded={() => {}}
              fadeIn={true}
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={3}
        className="absolute inset-x-0 bottom-0 w-full overflow-hidden border-y border-white/20 bg-white/5 py-3"
      >
        <LogoLoop
          logos={heroTextLoopItems}
          speed={82}
          gap={26}
          fadeOut
          fadeOutColor="#003087"
          logoHeight={20}
          ariaLabel="Game Developer, Web developer, Art Lover, AI Enthusiast"
          className="w-full"
        />
      </motion.div>
    </section>
  )
}
