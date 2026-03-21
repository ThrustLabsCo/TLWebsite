"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const values = [
  {
    title: "Small by design",
    body: "We are a small team and we intend to stay that way. You work directly with the people building your product — not an account manager who relays messages.",
  },
  {
    title: "Transparent from day one",
    body: "Scope, price, and timeline are agreed upfront. If something changes, you hear about it immediately. No bill shock at the end of a project.",
  },
  {
    title: "We care about the outcome",
    body: "We are invested in whether your product actually works for your users. The goal is a successful launch, not a finished invoice.",
  },
];

const facts = [
  { value: "3", label: "Platforms we build for" },
  { value: "100%", label: "Projects fully delivered" },
  { value: "Fixed", label: "Milestone-based pricing" },
  { value: "Free", label: "Initial scoping call" },
];

export default function About() {
  const ref = useRef(null);
  const factsRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const factsInView = useInView(factsRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="bg-[#0A0A0B] py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* About intro */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-16 mb-24" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2.5 mb-6">
              <div className="w-4 h-px bg-[#00F0FF]" />
              <span className="text-[#00F0FF] text-xs font-mono-custom font-bold uppercase tracking-[0.15em]">
                About
              </span>
            </div>
            <h2
              className="font-display font-black text-[#E4E4E4] leading-[0.95] tracking-[-0.01em] mb-8"
              style={{ fontSize: "clamp(2.2rem, 5vw, 56px)" }}
            >
              A FOCUSED TEAM<br />THAT BUILDS.
            </h2>
            <p className="text-[#ABABBB] text-base leading-relaxed mb-5 max-w-[520px]">
              Thrust Labs is a technology consulting and software development company. We work with businesses who need a reliable technical partner to turn their ideas into real, working products.
            </p>
            <p className="text-[#8A8A9A] text-base leading-relaxed max-w-[520px]">
              We are early-stage and proud of it. Being new means we bring full attention to every client, take nothing for granted, and work harder to earn your trust than an established firm ever would.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4 self-center"
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-xl"
                style={{
                  background: "#1A1A1A",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className="w-1 h-5 bg-[#00F0FF] mt-0.5 flex-shrink-0" />
                  <h4 className="font-display font-bold text-[#E4E4E4] text-sm tracking-[0.06em] uppercase">
                    {v.title}
                  </h4>
                </div>
                <p className="text-[#ABABBB] text-base leading-relaxed pl-4">{v.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Facts row */}
        <div ref={factsRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={factsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-4 h-px bg-[#00F0FF]" />
            <span className="text-[#00F0FF] text-xs font-mono-custom font-bold uppercase tracking-[0.15em]">
              By the numbers
            </span>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[rgba(255,255,255,0.06)]">
            {facts.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                animate={factsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.08 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#1A1A1A] p-8 md:p-10"
              >
                <div
                  className="font-display font-black text-[#00F0FF] text-3xl md:text-4xl tracking-tight mb-3"
                  style={{ textShadow: "0 0 20px rgba(0,240,255,0.4)" }}
                >
                  {fact.value}
                </div>
                <div className="text-[#ABABBB] text-sm font-mono-custom uppercase tracking-[0.1em]">
                  {fact.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
