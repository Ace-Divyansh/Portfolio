"use client"

import type { MouseEvent } from "react"
import GlassSurface from "@/components/GlassSurface"

export function Navbar() {
  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, label: string) => {
    if (typeof window === "undefined") return
    event.preventDefault()
    const sectionId = label === "Home" ? "home" : label === "Projects" ? "projects" : "contact"
    const target = `/#${sectionId}`
    const onHomePage = window.location.pathname === "/"

    if (!onHomePage) {
      window.location.assign(target)
      return
    }

    // Home is always at scroll position 0
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      window.history.replaceState(null, "", target)
      return
    }

    // For other sections: find the target section element, walk up to its
    // sticky wrapper parent, then sum the scrollHeight of every preceding
    // sibling wrapper inside <main>. This avoids all position/offset APIs
    // that break under sticky positioning.
    const section = document.getElementById(sectionId)
    if (!section) {
      window.location.assign(target)
      return
    }

    const wrapper = section.parentElement
    const main = document.querySelector("main")
    if (!wrapper || !main) {
      window.location.assign(target)
      return
    }

    let scrollTarget = 0
    for (const child of Array.from(main.children)) {
      if (child === wrapper) break
      scrollTarget += (child as HTMLElement).scrollHeight
    }

    window.scrollTo({ top: scrollTarget, behavior: "smooth" })
    window.history.replaceState(null, "", target)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <GlassSurface
          width="100%"
          height={54}
          borderRadius={999}
          borderWidth={0.06}
          brightness={62}
          opacity={0.66}
          blur={5}
          displace={0.22}
          saturation={1.08}
          distortionScale={-72}
          redOffset={0}
          greenOffset={3}
          blueOffset={5}
          backgroundOpacity={0.1}
          className="border border-white/20 bg-white/12 px-4 shadow-[0_10px_30px_rgba(6,8,24,0.22)] sm:px-6"
        >
          <nav className="flex w-full items-center justify-between gap-4">
            <span className="text-sm font-bold tracking-widest uppercase text-white/90">
              Diwision
            </span>

            <div className="flex items-center gap-5 sm:gap-8">
              {["Home", "Projects", "Contact"].map((label) => (
                <a
                  key={label}
                  href={label === "Home" ? "/#home" : label === "Projects" ? "/#projects" : "/#contact"}
                  onClick={(event) => handleNavClick(event, label)}
                  className="text-sm text-white/70 transition-colors duration-300 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>

            <span className="hidden text-sm tracking-wide text-white/65 sm:block">
              Based in India
            </span>
          </nav>
        </GlassSurface>
      </div>
    </header>
  )
}
