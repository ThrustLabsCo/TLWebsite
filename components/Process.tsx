"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MagnifyingGlass, Pencil, RocketLaunch, CheckCircle } from "@phosphor-icons/react";

const steps = [
  {
    num: "01",
    icon: MagnifyingGlass,
    title: "Discovery Call",
    description:
      "We start with a free scoping call to understand your idea, your users, and your goals. We ask the questions that prevent expensive mistakes later. You leave with clarity on what to build.",
  },
  {
    num: "02",
    icon: Pencil,
    title: "Scope & Proposal",
    description:
      "We produce a detailed project scope, technology recommendation, timeline, and milestone-based pricing. No vague estimates. You know exactly what you are getting before anything is agreed.",
  },
  {
    num: "03",
    icon: RocketLaunch,
    title: "Design & Build",
    description:
      "We design and build in stages, sharing progress at every milestone. You review and approve before we move forward. Feedback is built into the process, not bolted on at the end.",
  },
  {
    num: "04",
    icon: CheckCircle,
    title: "Launch & Handoff",
    description:
      "We handle deployment, testing, and app store submission where applicable. Everything is handed over with documentation so you are never dependent on us to keep the lights on.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="bg-[#0F0F10] py-28 md:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        <div className="mb-20" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2.5 mb-6">
              <div className="w-4 h-px bg-[#00F0FF]" />
              <span className="text-[#00F0FF] text-xs font-mono-custom font-bold uppercase tracking-[0.15em]">
                How we work
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <h2
                className="font-display font-black text-[#E4E4E4] leading-[0.95] tracking-[-0.01em]"
                style={{ fontSize: "clamp(2.2rem, 5vw, 56px)" }}
              >
                FROM IDEA TO<br />LIVE PRODUCT.
              </h2>
              <p className="text-[#ABABBB] text-base leading-relaxed self-end">
                A straightforward four-step process. No jargon, no hidden phases, no surprises. You always know where things stand and what comes next.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(255,255,255,0.05)]">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.65,
                  delay: 0.15 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative bg-[#1A1A1A] p-8 md:p-10 overflow-hidden"
              >
                {/* Large number background */}
                <div className="absolute top-4 right-4 font-display font-black text-[80px] leading-none text-[rgba(255,255,255,0.03)] select-none">
                  {step.num}
                </div>

                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(0,240,255,0.08)] border border-[rgba(0,240,255,0.18)] flex items-center justify-center">
                    <Icon size={18} weight="duotone" className="text-[#00F0FF]" />
                  </div>
                  <div className="h-px flex-1 bg-[rgba(0,240,255,0.15)]" />
                </div>

                <h3 className="font-display font-bold text-[#E4E4E4] text-base tracking-[0.04em] uppercase mb-5">
                  {step.title}
                </h3>
                <p className="text-[#ABABBB] text-base leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
