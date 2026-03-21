"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "@phosphor-icons/react";

function MagneticBtn({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 22 });
  const sy = useSpring(y, { stiffness: 150, damping: 22 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.22);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.22);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const capabilities = [
  { label: "Mobile Apps", sub: "iOS & Android" },
  { label: "Web Apps", sub: "Full-stack" },
  { label: "Landing Pages", sub: "Conversion-ready" },
  { label: "Advisory", sub: "Hourly consulting" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#0A0A0B] scanline">

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,240,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_40%,#0A0A0B_100%)]" />

      {/* Glow cores */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#00F0FF]/8 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[8%] w-[360px] h-[360px] rounded-full bg-[#7000FF]/10 blur-[110px] pointer-events-none" />
      <div className="absolute top-1/4 left-[5%] w-[250px] h-[250px] rounded-full bg-[#00F0FF]/6 blur-[90px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 pt-36 pb-24">

        {/* Status chip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 mb-10 px-4 py-2 rounded-full border border-[rgba(0,240,255,0.2)] bg-[rgba(0,240,255,0.05)]"
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          />
          <span className="text-[#00F0FF] text-xs font-mono-custom font-bold uppercase tracking-[0.15em]">
            Available for new projects
          </span>
        </motion.div>

        {/* Headline */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-20 items-end mb-14">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              className="font-display font-black text-[#E4E4E4] leading-[0.92] tracking-[-0.01em]"
              style={{ fontSize: "clamp(3rem, 8vw, 90px)" }}
            >
              WE BUILD THE<br />
              <span className="text-[#00F0FF] text-glow-pulse">DIGITAL PRODUCTS</span><br />
              YOUR BUSINESS NEEDS.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:max-w-[260px] self-end pb-2"
          >
            <p className="text-[#ABABBB] text-base leading-relaxed">
              Custom mobile apps, web applications, and landing pages — designed and built for business clients who need it done right.
            </p>
          </motion.div>
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-24"
        >
          <MagneticBtn>
            <a
              href="#contact"
              className="btn-pulse group inline-flex items-center gap-2.5 text-sm font-bold px-7 py-4 rounded-xl"
            >
              Start a project
              <ArrowUpRight size={16} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </MagneticBtn>

          <MagneticBtn>
            <a
              href="#services"
              className="btn-ghost group inline-flex items-center gap-2.5 text-sm font-semibold px-6 py-4 rounded-xl"
            >
              What we build
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </MagneticBtn>
        </motion.div>

        {/* Capabilities row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-3"
          style={{ paddingTop: "2.5rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          {capabilities.map((cap) => (
            <div
              key={cap.label}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
              <span className="text-[#E4E4E4] text-sm font-display font-bold uppercase tracking-[0.06em]">{cap.label}</span>
              <span className="text-[#7A7A8A] text-xs font-mono-custom">{cap.sub}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-transparent via-[rgba(0,240,255,0.4)] to-transparent"
        />
        <span className="text-[#5A5A6A] text-[10px] font-mono-custom uppercase tracking-[0.2em]">scroll</span>
      </motion.div>
    </section>
  );
}
