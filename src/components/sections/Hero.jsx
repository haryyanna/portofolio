import { motion } from "framer-motion";
import { ArrowDownRight, CodeXml, Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const fade = {
    hidden: { opacity: 0, y: 24 },
    show: (index = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.1 * index, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section id="beranda" className="relative flex min-h-[100svh] items-center pt-32 pb-24">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        <motion.p
          variants={fade}
          initial="hidden"
          animate="show"
          custom={0}
          className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-electric-glow md:text-sm"
        >
          <span className="h-px w-10 bg-electric-glow/60" />
          {t.hero.overline}
        </motion.p>

        <motion.h1
          variants={fade}
          initial="hidden"
          animate="show"
          custom={1}
          className="max-w-5xl font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-[5.5rem]"
        >
          <span className="block text-white">{t.hero.titleLine1}</span>
          <span className="block text-white">{t.hero.titleLine2}</span>
          <span className="text-gradient-accent block">{t.hero.titleAccent}</span>
        </motion.h1>

        <motion.p
          variants={fade}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#karya"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric to-violet px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-electric/30 transition-all hover:scale-[1.03] hover:shadow-violet/50"
          >
            {t.hero.ctaPrimary}
            <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>

          <a
            href="#dokumentasi"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition-colors hover:border-electric/40 hover:text-white"
          >
            <Download className="h-4 w-4" />
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-4 md:gap-8"
        >
          {t.hero.stats.map((item) => (
            <div key={item.label} className="glass rounded-2xl p-4 md:p-6">
              <div className="text-gradient font-display text-3xl font-black md:text-5xl">
                {item.value}
              </div>
              <div className="mt-1 font-mono text-xs uppercase tracking-wider text-white/50 md:text-sm">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={5}
          className="glass mt-12 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-mono"
        >
          <CodeXml className="h-3.5 w-3.5 text-electric-glow" />
          <span className="text-white/70">
            {t.hero.hint} <span className="text-electric-glow">{"->"}</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
