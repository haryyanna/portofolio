import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Languages, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { lang, toggle, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "tentang", label: t.nav.about },
    { id: "prestasi", label: t.nav.achievements },
    { id: "pendidikan", label: t.nav.education },
    { id: "karya", label: t.nav.works },
    { id: "dokumentasi", label: t.nav.docs },
  ];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 md:px-6 ${
          scrolled ? "glass-strong shadow-2xl" : "glass"
        } transition-all duration-500`}
      >
        <a href="#beranda" className="group flex items-center gap-2">
          <div className="glow-blue flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-electric to-violet">
            <Sparkles className="h-4 w-4 text-white" strokeWidth={2.4} />
          </div>
          <span className="font-display text-base font-bold tracking-tight">
            Portofolio<span className="text-electric-glow">.</span>Ngakan Harya
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="rounded-full px-3.5 py-1.5 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            className="group flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.22em] text-white/80 transition-all hover:border-electric/40 hover:text-white"
            aria-label="Toggle language"
          >
            <Languages className="h-3.5 w-3.5" />
            <span>{lang.toUpperCase()}</span>
          </button>

          <a
            href="#kontak"
            className="hidden rounded-full bg-gradient-to-r from-electric to-violet px-4 py-1.5 text-sm font-semibold text-white shadow-lg shadow-electric/20 transition-all hover:scale-[1.03] hover:shadow-violet/40 md:inline-flex"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </motion.header>
  );
}
