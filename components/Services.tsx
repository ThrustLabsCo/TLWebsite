"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  DeviceMobile,
  Globe,
  Cursor,
  ChatCircleText,
} from "@phosphor-icons/react";

const services = [
  {
    icon: DeviceMobile,
    title: "Mobile App Development",
    description:
      "Native-quality iOS and Android applications built with React Native. From concept and wireframes through to App Store submission. We handle the full lifecycle.",
    tags: ["iOS", "Android", "React Native", "App Store"],
    detail: "Most common starting point for business clients who need a product in their customers' pockets.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Full-stack web applications built for real business workflows. Customer portals, internal tools, booking systems, dashboards — whatever your operation needs.",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
    detail: "Scoped to your exact requirements. No off-the-shelf templates dressed up as custom software.",
  },
  {
    icon: Cursor,
    title: "Landing Pages & Marketing Sites",
    description:
      "High-converting, fast-loading websites that make your business look as good as it actually is. Designed with intention and built to perform.",
    tags: ["Design", "Animation", "SEO", "Performance"],
    detail: "Typically delivered in 1–2 weeks. Perfect for product launches, campaigns, or replacing an outdated site.",
  },
  {
    icon: ChatCircleText,
    title: "Technical Advisory",
    description:
      "Not ready to build yet? We offer hourly consulting sessions to help you plan your tech stack, scope your project, evaluate vendors, or review existing work.",
    tags: ["Strategy", "Scoping", "Code Review", "Hourly"],
    detail: "Useful before committing to a build. We help you avoid expensive decisions made without a technical co-pilot.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="bg-[#0F0F10] py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8 md:gap-16 mb-20">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2.5 mb-6">
              <div className="w-4 h-px bg-[#00F0FF]" />
              <span className="text-[#00F0FF] text-xs font-mono-custom font-bold uppercase tracking-[0.15em]">
                Services
              </span>
            </div>
            <h2
              className="font-display font-black text-[#E4E4E4] leading-[0.95] tracking-[-0.01em]"
              style={{ fontSize: "clamp(2.2rem, 5vw, 56px)" }}
            >
              WHAT WE<br />BUILD.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#ABABBB] text-base leading-relaxed self-end max-w-[480px]"
          >
            We focus on three types of deliverables: mobile apps, web apps, and marketing sites. Each is scoped, priced, and delivered as a standalone project with clear milestones.
          </motion.p>
        </div>

        {/* 2x2 services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(255,255,255,0.06)]">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.08 + i * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative bg-[#1A1A1A] p-8 md:p-10 hover:bg-[#1E1E20] transition-colors duration-500 cursor-default overflow-hidden"
              >
                {/* Top hover line */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[rgba(0,240,255,0)] to-transparent group-hover:via-[rgba(0,240,255,0.5)] transition-all duration-700" />

                <div className="mb-7">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(0,240,255,0.08)] border border-[rgba(0,240,255,0.15)] flex items-center justify-center group-hover:bg-[rgba(0,240,255,0.15)] group-hover:border-[rgba(0,240,255,0.35)] transition-all duration-500">
                    <Icon size={20} weight="duotone" className="text-[#00F0FF] opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-[#E4E4E4] text-base tracking-[0.04em] uppercase mb-3 group-hover:text-[#00F0FF] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#ABABBB] text-base leading-relaxed mb-4 group-hover:text-[#C0C0D0] transition-colors duration-300">
                  {service.description}
                </p>
                <p className="text-[#6B6B7B] text-sm leading-relaxed mb-6 italic">
                  {service.detail}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono-custom font-bold px-3 py-1.5 rounded bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-[#ABABBB] group-hover:border-[rgba(0,240,255,0.25)] group-hover:text-[#C0C0D0] tracking-[0.06em] uppercase transition-all duration-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
