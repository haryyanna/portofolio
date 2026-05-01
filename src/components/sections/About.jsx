import { motion } from "framer-motion";
import { Briefcase, MapPin, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const techStack = [
  "Webflow",
  "Google Site",
  "Framer",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="tentang" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-electric-glow md:text-sm"
        >
          {t.about.overline}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-gradient max-w-3xl font-display text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl"
        >
          {t.about.title}
        </motion.h2>

        <div className="mt-14 grid auto-rows-[minmax(0,1fr)] grid-cols-12 gap-4 md:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="ring-trace glass col-span-12 row-span-2 flex flex-col items-start gap-6 rounded-3xl p-6 md:flex-row md:p-8 lg:col-span-7"
          >
            <div className="glow-blue relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl border border-white/10 md:h-44 md:w-44">
              <img
                src="https://i.postimg.cc/3w8ShfsQ/PP-IG2.jpg"
                alt="Developer portrait"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-electric/30 via-transparent to-violet/30 mix-blend-overlay" />
            </div>

            <div>
              <p className="text-base leading-relaxed text-white/80 md:text-lg">{t.about.bio}</p>
              <div className="mt-5 flex flex-wrap gap-3 text-xs font-mono">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-electric/30 bg-electric/15 px-3 py-1 text-electric-glow">
                  <Briefcase className="h-3 w-3" />
                  {t.about.role}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-violet/40 bg-violet/15 px-3 py-1 text-purple-200">
                  <MapPin className="h-3 w-3" />
                  {t.about.location}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="glass relative col-span-12 overflow-hidden rounded-3xl p-6 md:p-7 lg:col-span-5"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-magenta/30 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-emerald-300">
                  {t.about.available}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold leading-tight md:text-3xl">
                {t.about.availabilityTitle}
              </h3>
              <p className="mt-2 text-sm text-white/60">{t.about.availabilityBody}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass col-span-12 rounded-3xl p-6 md:p-7 lg:col-span-5"
          >
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-electric-glow" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/50">
                {t.about.stack}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {techStack.map((stack, index) => (
                <span
                  key={stack}
                  className={`rounded-lg border px-2.5 py-1 text-xs font-mono ${
                    index % 3 === 0
                      ? "border-electric/40 bg-electric/10 text-electric-glow"
                      : index % 3 === 1
                        ? "border-violet/40 bg-violet/10 text-purple-200"
                        : "border-white/15 bg-white/5 text-white/80"
                  }`}
                >
                  {stack}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
