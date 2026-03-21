"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
];

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="28" rx="6" fill="#0F0F10" stroke="rgba(0,240,255,0.25)" strokeWidth="1"/>
      <line x1="8" y1="10" x2="20" y2="10" stroke="#00F0FF" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="14" y1="10" x2="14" y2="20" stroke="#00F0FF" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="14" y1="20" x2="18" y2="16" stroke="rgba(0,240,255,0.45)" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0A0A0B]/92 backdrop-blur-2xl border-b border-[rgba(255,255,255,0.07)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <LogoMark />
            <span className="font-display font-bold text-sm tracking-[0.12em] uppercase text-[#E4E4E4] group-hover:text-[#00F0FF] transition-colors duration-300">
              Thrust Labs
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#8A8A9A] hover:text-[#E4E4E4] transition-colors duration-200 font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="btn-pulse inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl"
            >
              Start a project
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[#E4E4E4]"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-16 z-40 bg-[#0F0F10]/98 backdrop-blur-2xl border-b border-[rgba(255,255,255,0.07)] md:hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-[#E4E4E4] tracking-wide hover:text-[#00F0FF] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-pulse mt-2 inline-flex items-center justify-center text-sm font-bold px-5 py-3.5 rounded-xl"
              >
                Start a project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
