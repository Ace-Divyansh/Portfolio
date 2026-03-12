"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Instagram } from "lucide-react"

export function ContactModal({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {variant === "dark" ? (
          <Button
            size="lg"
            className="rounded-full border px-8 text-base font-semibold transition-all hover:scale-105"
            style={{
              backgroundColor: "#FFFFFF",
              color: "#0F172A",
              borderColor: "rgba(255,255,255,0.2)",
            }}
          >
            Contact Me
          </Button>
        ) : (
          <Button
            size="lg"
            className="rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
          >
            Contact Me
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="border-border sm:max-w-md" style={{ backgroundColor: "#FAF7F2" }}>
        <DialogHeader>
          <DialogTitle className="font-display text-2xl" style={{ color: "#1A1A1A" }}>
            {"Let's Connect"}
          </DialogTitle>
          <p className="text-sm" style={{ color: "#6B6560" }}>
            Reach out through any of these platforms.
          </p>
        </DialogHeader>
        <div className="flex flex-col gap-3 pt-2">
          <a
            href="https://www.linkedin.com/in/divyansh-porwal/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border p-4 transition-all"
            style={{
              borderColor: "#D6CFC3",
              backgroundColor: "#F5F0E8",
              color: "#1A1A1A",
            }}
          >
            <div
              className="flex size-10 items-center justify-center rounded-lg transition-colors"
              style={{ backgroundColor: "#E8E2D6" }}
            >
              <Linkedin className="size-5" style={{ color: "#D4570A" }} />
            </div>
            <div>
              <p className="text-sm font-medium" style={{ color: "#1A1A1A" }}>LinkedIn</p>
              <p className="text-xs" style={{ color: "#6B6560" }}>Professional network</p>
            </div>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=contactdivyansh007@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border p-4 transition-all"
            style={{
              borderColor: "#D6CFC3",
              backgroundColor: "#F5F0E8",
              color: "#1A1A1A",
            }}
          >
            <div
              className="flex size-10 items-center justify-center rounded-lg transition-colors"
              style={{ backgroundColor: "#E8E2D6" }}
            >
              <Mail className="size-5" style={{ color: "#D4570A" }} />
            </div>
            <div>
              <p className="text-sm font-medium" style={{ color: "#1A1A1A" }}>Gmail</p>
              <p className="text-xs" style={{ color: "#6B6560" }}>Send me an email</p>
            </div>
          </a>
          <a
            href="https://www.instagram.com/ace_divyansh/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border p-4 transition-all"
            style={{
              borderColor: "#D6CFC3",
              backgroundColor: "#F5F0E8",
              color: "#1A1A1A",
            }}
          >
            <div
              className="flex size-10 items-center justify-center rounded-lg transition-colors"
              style={{ backgroundColor: "#E8E2D6" }}
            >
              <Instagram className="size-5" style={{ color: "#D4570A" }} />
            </div>
            <div>
              <p className="text-sm font-medium" style={{ color: "#1A1A1A" }}>Instagram</p>
              <p className="text-xs" style={{ color: "#6B6560" }}>Follow my journey</p>
            </div>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
