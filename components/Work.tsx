"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { DeviceMobile, Globe, Cursor, ArrowUpRight } from "@phosphor-icons/react";

const deliverables = [
  {
    icon: DeviceMobile,
    label: "Mobile Apps",
    examples: ["Customer-facing apps", "Booking & scheduling", "Service marketplaces", "Internal field tools"],
    image: "https://picsum.photos/seed/mobile-app-dark/800/500",
  },
  {
    icon: Globe,
    label: "Web Applications",
    examples: ["Client portals", "Admin dashboards", "Booking systems", "E-commerce platforms"],
    image: "https://picsum.photos/seed/web-app-dark/800/500",
  },
  {
    icon: Cursor,
    label: "Landing Pages",
    examples: ["Product launches", "Service pages", "Campaign pages", "Company websites"],
    image: "https://picsum.photos/seed/landing-page-dark/800/500",
  },
];

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="bg-[#0A0A0B] py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2.5 mb-6">
              <div className="w-4 h-px bg-[#00F0FF]" />
              <span className="text-[#00F0FF] text-xs font-mono-custom font-bold uppercase tracking-[0.15em]">
                What We Deliver
              </span>
            </div>
            <h2
              className="font-display font-black text-[#E4E4E4] leading-[0.95] tracking-[-0.01em]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 56px)" }}
            >
              THREE THINGS.<br />DONE PROPERLY.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#ABABBB] text-base max-w-[340px] leading-relaxed md:text-right"
          >
            We keep our scope tight so we can keep our quality high. Mobile apps, web apps, and landing pages — that is what we do and what we are great at.
          </motion.p>
        </div>

        {/* Deliverable cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {deliverables.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.08 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-2xl bg-[#1A1A1A] cursor-default"
                style={{ border: "1px solid rgba(255,255,255,0.07)" }}
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover opacity-10 group-hover:opacity-18 group-hover:scale-105 transition-all duration-700 ease-out grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/80 to-transparent" />
                </div>

                {/* Cyan rim on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(0,240,255,0.2), inset 0 1px 0 rgba(0,240,255,0.3)" }}
                />

                <div className="relative p-8 flex flex-col min-h-[380px]">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(0,240,255,0.08)] border border-[rgba(0,240,255,0.18)] flex items-center justify-center mb-auto">
                    <Icon size={20} weight="duotone" className="text-[#00F0FF]" />
                  </div>

                  <div className="mt-8">
                    <h3 className="font-display font-black text-[#E4E4E4] text-xl uppercase tracking-[0.04em] mb-5 group-hover:text-[#00F0FF] transition-colors duration-300">
                      {item.label}
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {item.examples.map((ex) => (
                        <li key={ex} className="flex items-center gap-3 text-[#ABABBB] text-sm">
                          <div className="w-3 h-px bg-[rgba(0,240,255,0.5)] flex-shrink-0" />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pricing model callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8"
          style={{
            background: "#1A1A1A",
            border: "1px solid rgba(0,240,255,0.18)",
            boxShadow: "0 0 40px rgba(0,240,255,0.05)",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div>
              <div className="text-[#7A7A8A] text-xs font-mono-custom uppercase tracking-[0.15em] mb-1.5">Pricing model</div>
              <div className="font-display font-black text-[#00F0FF] text-2xl uppercase tracking-[0.04em] text-glow-pulse">
                Milestone-Based
              </div>
            </div>
            <div className="h-px md:h-10 md:w-px bg-[rgba(255,255,255,0.10)]" />
            <div>
              <div className="text-[#7A7A8A] text-xs font-mono-custom uppercase tracking-[0.15em] mb-1.5">Also available</div>
              <div className="font-display font-black text-[#E4E4E4] text-2xl uppercase tracking-[0.04em]">
                Hourly Advisory
              </div>
            </div>
            <div className="h-px md:h-10 md:w-px bg-[rgba(255,255,255,0.10)]" />
            <p className="text-[#ABABBB] text-base leading-relaxed max-w-[340px]">
              Project work is structured in clear payment milestones so you always know what you are paying for and what you receive in return.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-pulse group inline-flex items-center gap-2 text-sm font-bold px-7 py-4 rounded-xl flex-shrink-0"
          >
            Get a quote
            <ArrowUpRight size={15} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
