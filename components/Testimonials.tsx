"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ArrowUpRight } from "@phosphor-icons/react";

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#0F0F10] py-28 md:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 mb-16"
        >
          <div className="w-4 h-px bg-[#00F0FF]" />
          <span className="text-[#00F0FF] text-xs font-mono-custom font-bold uppercase tracking-[0.15em]">
            What clients say
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-14 lg:gap-20 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="font-display font-black text-[#E4E4E4] leading-[0.95] tracking-[-0.01em] mb-6"
              style={{ fontSize: "clamp(2rem, 4.5vw, 52px)" }}
            >
              REAL FEEDBACK<br />FROM OUR CLIENT.
            </h2>
            <p className="text-[#ABABBB] text-base leading-relaxed max-w-[320px]">
              We are a new company with one client so far. Here is what they had to say — unedited.
            </p>
          </motion.div>

          {/* Right — single testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                background: "#1A1A1A",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 30px 60px rgba(0,0,0,0.4)",
              }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1.5 mb-7">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    weight="fill"
                    className="text-[#00F0FF]"
                    style={{ filter: "drop-shadow(0 0 4px rgba(0,240,255,0.5))" }}
                  />
                ))}
              </div>

              <blockquote className="text-[#E4E4E4] text-xl md:text-2xl leading-relaxed mb-8">
                &ldquo;Thrust Labs took the time to understand exactly what we needed before writing a single line of code. The final product was clean, well-built, and delivered on time. For a small business like ours, having a technical partner we could actually trust made all the difference.&rdquo;
              </blockquote>

              <div
                className="flex items-center justify-between pt-6"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[rgba(0,240,255,0.1)] border border-[rgba(0,240,255,0.25)] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#00F0FF] text-base font-display font-black">C</span>
                  </div>
                  <div>
                    <div className="text-[#E4E4E4] text-base font-semibold">First Client</div>
                    <div className="text-[#8A8A9A] text-sm mt-0.5 font-mono-custom">Business Owner</div>
                  </div>
                </div>

                <div
                  className="px-3 py-1.5 rounded-full text-xs font-mono-custom font-bold uppercase tracking-[0.12em]"
                  style={{
                    background: "rgba(0,240,255,0.08)",
                    border: "1px solid rgba(0,240,255,0.2)",
                    color: "#00F0FF",
                  }}
                >
                  Verified
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA nudge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-5"
          style={{ paddingTop: "3rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-[#ABABBB] text-base">
            Want to be next? We are actively looking for our next project.
          </p>
          <a
            href="#contact"
            className="btn-ghost group inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-xl"
          >
            Start a conversation
            <ArrowUpRight size={14} weight="bold" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
