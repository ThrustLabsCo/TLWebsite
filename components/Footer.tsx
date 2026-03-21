import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

const links = [
  {
    heading: "Company",
    items: [
      { label: "About", href: "#about" },
      { label: "Our Work", href: "#work" },
      { label: "Process", href: "#process" },
    ],
  },
  {
    heading: "Services",
    items: [
      { label: "Mobile App Development", href: "#services" },
      { label: "Web App Development", href: "#services" },
      { label: "Landing Pages", href: "#services" },
      { label: "Technical Advisory", href: "#services" },
    ],
  },
  {
    heading: "Contact",
    items: [
      { label: "Start a project", href: "#contact" },
      { label: "hello@thrustlabs.io", href: "mailto:hello@thrustlabs.io" },
    ],
  },
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

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0B]" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1fr_1fr] gap-10 md:gap-8 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <LogoMark />
              <span className="font-display font-bold text-xs tracking-[0.18em] uppercase text-[#E4E4E4]">
                Thrust Labs
              </span>
            </div>
            <p className="text-[#6B6B7B] text-sm leading-relaxed font-light max-w-[240px] mb-6">
              Custom mobile apps, web applications, and landing pages for business clients.
            </p>
            <a
              href="#contact"
              className="btn-pulse inline-flex items-center gap-1.5 font-bold text-[10px] px-4 py-2.5 rounded-lg tracking-[0.08em] uppercase"
            >
              Start a project
              <ArrowUpRight size={11} weight="bold" />
            </a>
          </div>

          {links.map((col) => (
            <div key={col.heading}>
              <p className="text-[#6B6B7B] text-[10px] font-mono-custom font-bold uppercase tracking-[0.18em] mb-5">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-3">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[#8A8A9A] hover:text-[#00F0FF] text-sm transition-colors duration-200 font-light"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-[#4A4A5A] text-xs font-mono-custom">
            &copy; {new Date().getFullYear()} Thrust Labs. All rights reserved.
          </p>
          <p className="text-[#4A4A5A] text-xs font-mono-custom">
            Milestone-based projects &middot; Hourly advisory
          </p>
        </div>
      </div>
    </footer>
  );
}
