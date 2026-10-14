"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

/* ─────────────────────────────── motion helpers ─────────────────────────────── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function StaggerGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={stagger}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────── icons (heroicons-style) ─────────────────────────────── */

type IconProps = { className?: string };

const Icon = {
  Document: ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  ),
  Shield: ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
    </svg>
  ),
  Identification: ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
    </svg>
  ),
  Building: ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
    </svg>
  ),
  Heart: ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
  ),
  Megaphone: ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
    </svg>
  ),
  Calendar: ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg>
  ),
  Users: ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  ),
  MapPin: ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  ),
  Phone: ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  ),
  Envelope: ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  ),
  ArrowRight: ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  ),
  Sparkles: ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>
  ),
  Check: ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  ),
  Trophy: ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
    </svg>
  ),
  Book: ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  Bars: ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
    </svg>
  ),
  Close: ({ className }: IconProps) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  ),
};

/* ─────────────────────────────── data ─────────────────────────────── */

const services = [
  { icon: Icon.Document, title: "Barangay Clearance", desc: "Request a clearance for employment, business, or personal use." },
  { icon: Icon.Identification, title: "Certificate of Residency", desc: "Verify your residency for school, work, or government transactions." },
  { icon: Icon.Building, title: "Business Permit Endorsement", desc: "Endorse your local business for municipal permit processing." },
  { icon: Icon.Heart, title: "Certificate of Indigency", desc: "For medical, educational, or financial assistance applications." },
  { icon: Icon.Shield, title: "File a Blotter Report", desc: "Report incidents and concerns to the barangay tanod office." },
  { icon: Icon.Users, title: "Resident Registration", desc: "Register new household members in the barangay records." },
];

const announcements = [
  {
    tag: "Community",
    date: "May 16, 2026",
    image: "/news/community-pantry.jpg",
    title: "Community Pantry para sa mga Tricycle at Jeepney Drivers",
    excerpt:
      "Hatid ng Barangay Cumadcad Council, sa pangunguna ni Acting Punong Barangay OIC Nemia Manzanillo Canon, ang tulong at malasakit para sa mga drayber na apektado ng krisis.",
  },
  {
    tag: "Health",
    date: "May 14, 2026",
    image: "/news/dental-checkup.jpg",
    title: "Dental Fluoride Program para sa mga Bata, 10 Buwan – 5 Taong Gulang",
    excerpt:
      "Sa pangunguna ng Committee on Health ni Hon. Randy Anzano Mimay kasama ng mga dentist mula sa Sorsogon Province, matagumpay na naisagawa ang fluoride application upang maiwasan ang dental caries sa murang edad.",
  },
  {
    tag: "Peace & Order",
    date: "May 12, 2026",
    image: "/news/bpops-monthly-meeting.jpg",
    title: "BPOPS Monthly Meeting: Seguridad at Kaayusan sa Barangay",
    excerpt:
      "Pinangunahan ni OIC Nemia Manzanillo Canon at Committee on Peace and Order Kagawad Albert Asejo ang talakayan ukol sa seguridad, koordinasyon, at disiplina para sa kapakanan ng mamamayan.",
  },
];

const stats = [
  { value: "4,820", label: "Residents Served" },
  { value: "1,150", label: "Households" },
  { value: "7", label: "Sitios / Puroks" },
  { value: "32", label: "Projects in 2025" },
];

const officials = [
  { name: "Nemia Manzanillo Canon", role: "Punong Barangay (OIC)" },
  { name: "Randy Anzano Mimay", role: "Barangay Kagawad" },
  { name: "Saline Morin Arco", role: "Barangay Kagawad" },
];

const skPrograms = [
  { icon: Icon.Book, title: "Iskolar ng Cumadcad", desc: "Educational assistance and mentorship for deserving youth." },
  { icon: Icon.Trophy, title: "Liga ng Kabataan", desc: "Inter-purok sports tournament fostering camaraderie and discipline." },
  { icon: Icon.Sparkles, title: "Skills & Livelihood", desc: "Free workshops in digital skills, crafts, and entrepreneurship." },
  { icon: Icon.Users, title: "Youth Leadership Forum", desc: "Quarterly assemblies for civic engagement and policy input." },
];

/* ─────────────────────────────── components ─────────────────────────────── */

const NAV_LINKS: ReadonlyArray<readonly [string, string]> = [
  ["About", "#about"],
  ["Services", "#services"],
  ["News", "#news"],
  ["Officials", "#officials"],
  ["SK", "#sk"],
  ["Contact", "#contact"],
];

function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
      <nav
        aria-label="Primary"
        className="mx-auto max-w-7xl flex items-center justify-between px-4 md:px-8 h-16"
      >
        <a href="#top" className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer min-w-0">
          <Image
            src="/Cumadcad-logo.png"
            alt="Barangay Cumadcad official seal"
            width={40}
            height={40}
            priority
            className="h-9 w-9 sm:h-10 sm:w-10 object-contain flex-shrink-0"
          />
          <div className="leading-tight min-w-0">
            <div className="font-display text-base sm:text-lg font-semibold text-primary truncate">
              Barangay Cumadcad
            </div>
            <div className="text-[11px] sm:text-xs text-muted-foreground truncate">
              Castilla, Sorsogon
            </div>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-secondary">
          {NAV_LINKS.map(([label, href]) => (
            <li key={label}>
              <a
                href={href}
                className="hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#services"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-accent transition-colors duration-200 cursor-pointer"
          >
            Request a Service
            <Icon.ArrowRight className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-primary hover:bg-muted transition-colors duration-200 cursor-pointer"
          >
            {open ? <Icon.Close className="w-6 h-6" /> : <Icon.Bars className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-4 py-4 flex flex-col gap-1 text-base font-medium text-secondary">
          {NAV_LINKS.map(([label, href]) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="block px-3 py-3 rounded-lg hover:bg-muted hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#services"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg text-sm font-semibold hover:bg-accent transition-colors duration-200 cursor-pointer"
            >
              Request a Service
              <Icon.ArrowRight className="w-4 h-4" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <Image
        src="/brgy-picture.png"
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/90 via-[#1e293b]/85 to-accent/80"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 sm:py-16 sm:py-20 md:py-28 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 text-primary-foreground">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-gold" />
              Official Government Website
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-[2.25rem] leading-[1.1] sm:text-5xl sm:leading-[1.05] md:text-6xl font-semibold mb-6">
              Serving Cumadcad with{" "}
              <span className="text-gold">transparency</span>,{" "}
              <span className="text-gold">integrity</span>, and dedication.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed mb-8">
              The official portal of Barangay Cumadcad and Sangguniang Kabataan
              Cumadcad. Access services, stay informed, and connect with your
              local government — anytime, anywhere.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-gold text-primary px-6 py-3.5 rounded-lg font-semibold hover:bg-gold/90 transition-colors duration-200 cursor-pointer"
              >
                Browse Services
                <Icon.ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#news"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-200 cursor-pointer"
              >
                Latest Announcements
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal className="md:col-span-5" delay={0.2}>
          <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7 text-white">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-lg bg-gold/20 border border-gold/40 flex items-center justify-center">
                <Icon.Calendar className="w-5 h-5 text-gold" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-white/70">
                  Office Hours
                </div>
                <div className="font-semibold text-lg">Mon–Fri, 8:00 AM – 5:00 PM</div>
              </div>
            </div>
            <div className="h-px bg-white/20 my-4" />
            <ul className="space-y-3 text-sm">
              {[
                "Saturday triage clinic: 8:00 AM – 12:00 PM",
                "After-hours: Tanod patrol on standby",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2.5">
                  <Icon.Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-5 border-t border-white/20 flex items-center gap-2 text-xs text-white/70">
              <Icon.MapPin className="w-4 h-4 text-gold" />
              Barangay Hall, Cumadcad, Castilla, Sorsogon
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section aria-label="Barangay statistics" className="bg-card border-b border-border">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-12">
        <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="text-center md:text-left">
              <div className="font-display text-4xl md:text-5xl font-semibold text-primary">
                {s.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1.5 uppercase tracking-wide">
                {s.label}
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="max-w-2xl mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Barangay Services
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-primary mt-2 mb-4">
            What can we help you with today?
          </h2>
          <p className="text-secondary text-lg">
            Most documents can be requested at the Barangay Hall in person, or
            initiated online through this portal. Click a service to learn more
            about requirements and processing time.
          </p>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <a
                href="#contact"
                className="group block bg-card border border-border rounded-xl p-6 h-full hover:border-accent hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-colors duration-200">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary mb-2">
                  {s.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-4">
                  {s.desc}
                </p>
                <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  Request now
                  <Icon.ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function News() {
  return (
    <section id="news" className="bg-card border-y border-border py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <Reveal className="max-w-2xl">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Announcements
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-primary mt-2">
              The latest from the Barangay Hall
            </h2>
          </Reveal>
          <Reveal>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold cursor-pointer transition-colors duration-200"
            >
              View all news
              <Icon.ArrowRight className="w-4 h-4" />
            </a>
          </Reveal>
        </div>

        <StaggerGroup className="grid md:grid-cols-3 gap-6">
          {announcements.map((a) => (
            <StaggerItem key={a.title}>
              <article className="group bg-background border border-border rounded-xl overflow-hidden h-full hover:shadow-lg hover:border-accent transition-all duration-200 cursor-pointer">
                <div className="aspect-[16/9] relative overflow-hidden bg-primary">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-gold text-primary text-xs font-semibold px-3 py-1 rounded-full">
                    <Icon.Megaphone className="w-3.5 h-3.5" />
                    {a.tag}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <Icon.Calendar className="w-4 h-4" />
                    {a.date}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-primary mb-3 leading-snug group-hover:text-accent transition-colors duration-200">
                    {a.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    {a.excerpt}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-5">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            About Us
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-primary mt-2 mb-6">
            A barangay rooted in service.
          </h2>
          <p className="text-secondary text-lg leading-relaxed mb-5">
            Barangay Cumadcad is a vibrant community in the Municipality of
            Castilla, Province of Sorsogon. For generations, our barangay has
            been shaped by the hard work of farmers, fisherfolk, educators, and
            the youth — all working together to build a better future.
          </p>
          <p className="text-secondary text-lg leading-relaxed">
            This site is our commitment to making barangay services more
            accessible, transparent, and accountable to every resident we
            serve.
          </p>
        </Reveal>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
          <Reveal>
            <div className="bg-card border border-border rounded-xl p-7 h-full">
              <div className="w-11 h-11 rounded-lg bg-accent text-white flex items-center justify-center mb-4">
                <Icon.Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-primary mb-3">
                Our Vision
              </h3>
              <p className="text-secondary leading-relaxed">
                A progressive, peaceful, and self-reliant Cumadcad where every
                family has access to opportunity and every voice is heard.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="bg-primary text-white rounded-xl p-7 h-full">
              <div className="w-11 h-11 rounded-lg bg-gold text-primary flex items-center justify-center mb-4">
                <Icon.Heart className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">
                Our Mission
              </h3>
              <p className="text-white/85 leading-relaxed">
                To deliver responsive public service, promote inclusive
                development, and empower the youth and families of Cumadcad
                through honest leadership.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="sm:col-span-2">
            <div className="bg-card border border-border rounded-xl p-7">
              <h3 className="font-display text-xl font-semibold text-primary mb-4">
                Core Values
              </h3>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-secondary">
                {[
                  "Transparency in every transaction",
                  "Respect for every resident",
                  "Accountability of leaders",
                  "Inclusion of women and youth",
                  "Care for our environment",
                  "Service before self",
                ].map((v) => (
                  <li key={v} className="flex items-start gap-2.5">
                    <Icon.Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Officials() {
  return (
    <section id="officials" className="bg-card border-y border-border py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal className="max-w-2xl mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Your Officials
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-primary mt-2 mb-4">
            Elected to serve you.
          </h2>
          <p className="text-secondary text-lg">
            Meet the Officer-in-Charge of the Punong Barangay and the
            Sangguniang Barangay currently serving Cumadcad.
          </p>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {officials.map((o) => (
            <StaggerItem key={o.name}>
              <div className="bg-background border border-border rounded-xl overflow-hidden h-full hover:shadow-lg hover:border-accent transition-all duration-200 cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/15 border-2 border-white/30 flex items-center justify-center font-display text-3xl text-white font-semibold">
                    {o.name
                      .replace("Hon. ", "")
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                </div>
                <div className="p-5">
                  <div className="font-display text-lg font-semibold text-primary">
                    {o.name}
                  </div>
                  <div className="text-sm text-accent font-medium mt-1">
                    {o.role}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold cursor-pointer transition-colors duration-200"
          >
            View full Sangguniang Barangay roster
            <Icon.ArrowRight className="w-4 h-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function SKSection() {
  return (
    <section id="sk" className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-primary to-[#1e293b]"
      />
      <div className="mx-auto max-w-7xl px-4 md:px-8 text-white">
        <Reveal className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/40 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-gold mb-6">
            <Icon.Sparkles className="w-3.5 h-3.5" />
            Sangguniang Kabataan
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-5 leading-tight">
            The future of Cumadcad{" "}
            <span className="text-gold">starts with our youth.</span>
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            SK Cumadcad represents and empowers the Katipunan ng Kabataan — all
            residents aged 15 to 30. Through programs in education, sports,
            livelihood, and leadership, we invest in the people who will lead
            the barangay tomorrow.
          </p>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skPrograms.map((p) => (
            <StaggerItem key={p.title}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-xl p-6 h-full hover:bg-white/10 hover:border-gold/40 transition-all duration-200 cursor-pointer">
                <div className="w-11 h-11 rounded-lg bg-gold text-primary flex items-center justify-center mb-4">
                  <p.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {p.title}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gold text-primary px-6 py-3.5 rounded-lg font-semibold hover:bg-gold/90 transition-colors duration-200 cursor-pointer"
          >
            Join the Katipunan ng Kabataan
            <Icon.ArrowRight className="w-5 h-5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8 grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-5">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-primary mt-2 mb-6">
            We&apos;re here to help.
          </h2>
          <p className="text-secondary text-lg leading-relaxed mb-8">
            Visit us at the Barangay Hall during office hours, or send a
            message and our staff will get back to you within one business day.
          </p>

          <ul className="space-y-5">
            {[
              {
                icon: Icon.MapPin,
                label: "Barangay Hall",
                value: "Cumadcad, Castilla, Sorsogon, 4719, Philippines",
              },
              {
                icon: Icon.Envelope,
                label: "Email",
                value: "info@barangaycumadcad.gov.ph",
              },
              {
                icon: Icon.Calendar,
                label: "Office Hours",
                value: "Monday – Friday, 8:00 AM – 5:00 PM",
              },
            ].map((c) => (
              <li key={c.label} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    {c.label}
                  </div>
                  <div className="text-primary font-medium mt-0.5">
                    {c.value}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.1}>
          <form
            className="bg-card border border-border rounded-2xl p-7 md:p-9 shadow-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="font-display text-2xl font-semibold text-primary mb-6">
              Send us a message
            </h3>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="sm:col-span-1">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold text-primary mb-2"
                >
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors duration-200"
                  placeholder="Juan"
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold text-primary mb-2"
                >
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors duration-200"
                  placeholder="Dela Cruz"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-primary mb-2"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors duration-200"
                  placeholder="you@example.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="topic"
                  className="block text-sm font-semibold text-primary mb-2"
                >
                  How can we help?
                </label>
                <select
                  id="topic"
                  name="topic"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:border-accent focus:outline-none transition-colors duration-200 cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a topic
                  </option>
                  <option>Request a certificate</option>
                  <option>Report a concern</option>
                  <option>SK youth programs</option>
                  <option>General inquiry</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-primary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors duration-200 resize-y"
                  placeholder="Tell us a bit about what you need…"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-7 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-lg font-semibold hover:bg-accent transition-colors duration-200 cursor-pointer"
            >
              Send message
              <Icon.ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs text-muted-foreground mt-4">
              By submitting, you agree that your information will be used solely
              to respond to your inquiry, in accordance with the Data Privacy
              Act of 2012.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-white/85 mt-auto">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-14 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/Cumadcad-logo.png"
              alt=""
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
            />
            <div>
              <div className="font-display text-lg font-semibold text-white">
                Barangay Cumadcad
              </div>
              <div className="text-xs text-white/65">
                Municipality of Castilla, Sorsogon
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/70 max-w-sm">
            The official online portal of the Local Government Unit of Barangay
            Cumadcad and Sangguniang Kabataan Cumadcad.
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
            Navigate
          </h4>
          <ul className="space-y-2.5 text-sm">
            {[
              ["About", "#about"],
              ["Services", "#services"],
              ["News", "#news"],
              ["Officials", "#officials"],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
            For Youth
          </h4>
          <ul className="space-y-2.5 text-sm">
            {[
              ["SK Programs", "#sk"],
              ["Scholarships", "#sk"],
              ["Sports League", "#sk"],
              ["Volunteer", "#contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
            Reach Us
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Icon.MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <span>Cumadcad, Castilla, Sorsogon</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Icon.Envelope className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <span>info@barangaycumadcad.gov.ph</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} Barangay Cumadcad. All rights
            reserved.
          </div>
          <div className="flex gap-5">
            <a
              href="#"
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Transparency Seal
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────── page ─────────────────────────────── */

export default function Home() {
  return (
    <>
      <NavBar />
      <main id="main" className="flex-1">
        <Hero />
        <Stats />
        <Services />
        <News />
        <About />
        <Officials />
        <SKSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
