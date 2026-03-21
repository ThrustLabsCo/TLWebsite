"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, EnvelopeSimple, Clock } from "@phosphor-icons/react";

const contactInfo = [
  { icon: EnvelopeSimple, label: "Email", value: "hello@thrustlabs.io" },
  { icon: Clock, label: "Response time", value: "Within 1 business day" },
];

const projectTypes = [
  "Mobile App (iOS & Android)",
  "Web Application",
  "Landing Page / Marketing Site",
  "Technical Advisory (Hourly)",
  "Not sure yet",
];

type FormState = "idle" | "loading" | "success";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", projectType: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setFormState("loading");
    await new Promise((r) => setTimeout(r, 1400));
    setFormState("success");
  };

  const inputClass = "bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.10)] rounded-xl px-4 py-3.5 text-[#E4E4E4] text-base placeholder:text-[#4A4A5A] focus:outline-none focus:border-[rgba(0,240,255,0.5)] transition-colors w-full";
  const labelClass = "text-[#ABABBB] text-sm font-semibold mb-2 block";

  return (
    <section id="contact" className="bg-[#0A0A0B] py-28 md:py-40" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2.5 mb-6">
              <div className="w-4 h-px bg-[#00F0FF]" />
              <span className="text-[#00F0FF] text-xs font-mono-custom font-bold uppercase tracking-[0.15em]">
                Contact
              </span>
            </div>
            <h2
              className="font-display font-black text-[#E4E4E4] leading-[0.95] tracking-[-0.01em] mb-8"
              style={{ fontSize: "clamp(2.2rem, 5vw, 56px)" }}
            >
              LET&apos;S TALK ABOUT<br />YOUR PROJECT.
            </h2>
            <p className="text-[#ABABBB] text-base leading-relaxed mb-6 max-w-[440px]">
              The first conversation is free. Tell us what you want to build and we will give you an honest assessment of what it takes and what it costs.
            </p>
            <p className="text-[#8A8A9A] text-base leading-relaxed mb-14 max-w-[400px]">
              Not ready to commit? We also offer hourly advisory sessions — useful if you just need a second technical opinion before making a decision.
            </p>

            <div className="flex flex-col gap-6">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[rgba(0,240,255,0.07)] border border-[rgba(0,240,255,0.18)] flex items-center justify-center flex-shrink-0">
                    <Icon size={18} weight="duotone" className="text-[#00F0FF]" />
                  </div>
                  <div>
                    <div className="text-[#7A7A8A] text-xs font-mono-custom uppercase tracking-[0.12em] font-bold mb-0.5">
                      {label}
                    </div>
                    <div className="text-[#E4E4E4] text-base font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl p-10 md:p-12 h-full flex flex-col items-center justify-center text-center gap-5"
                style={{
                  background: "#1A1A1A",
                  border: "1px solid rgba(0,240,255,0.2)",
                  boxShadow: "0 0 40px rgba(0,240,255,0.08)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl bg-[rgba(0,240,255,0.1)] border border-[rgba(0,240,255,0.35)] flex items-center justify-center mb-2"
                  style={{ boxShadow: "0 0 24px rgba(0,240,255,0.2)" }}
                >
                  <ArrowUpRight size={26} weight="bold" className="text-[#00F0FF]" />
                </div>
                <h3 className="font-display font-black text-[#E4E4E4] text-2xl tracking-[0.03em] uppercase">
                  Message received
                </h3>
                <p className="text-[#ABABBB] text-base leading-relaxed max-w-[280px]">
                  We will be in touch within one business day. Looking forward to hearing about your project.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl p-8 md:p-10 flex flex-col gap-6"
                style={{
                  background: "#1A1A1A",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Your name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => { setForm(f => ({ ...f, name: e.target.value })); setErrors(er => ({ ...er, name: "" })); }}
                      className={inputClass}
                      placeholder="Alex Johnson"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1.5">{errors.name}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Email address</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => { setForm(f => ({ ...f, email: e.target.value })); setErrors(er => ({ ...er, email: "" })); }}
                      className={inputClass}
                      placeholder="alex@company.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1.5">{errors.email}</p>}
                  </div>
                </div>

                {/* Project type */}
                <div>
                  <label className={labelClass}>What do you need built?</label>
                  <select
                    value={form.projectType}
                    onChange={(e) => setForm(f => ({ ...f, projectType: e.target.value }))}
                    className={inputClass + " cursor-pointer appearance-none"}
                    style={{ color: form.projectType ? "#E4E4E4" : "#4A4A5A" }}
                  >
                    <option value="" disabled style={{ background: "#1A1A1A", color: "#8A8A9A" }}>
                      Select a project type
                    </option>
                    {projectTypes.map((pt) => (
                      <option key={pt} value={pt} style={{ background: "#1A1A1A", color: "#E4E4E4" }}>
                        {pt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className={labelClass}>Tell us about it</label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => { setForm(f => ({ ...f, message: e.target.value })); setErrors(er => ({ ...er, message: "" })); }}
                    className={inputClass + " resize-none"}
                    placeholder="What are you trying to build? Who is it for? Do you have a budget or timeline in mind?"
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1.5">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className="btn-pulse group inline-flex items-center justify-center gap-2.5 text-sm font-bold px-7 py-4 rounded-xl mt-1 disabled:opacity-50"
                >
                  {formState === "loading" ? (
                    <span className="flex items-center gap-2.5">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send message
                      <ArrowUpRight
                        size={16}
                        weight="bold"
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
