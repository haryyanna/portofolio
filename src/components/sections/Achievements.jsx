import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Achievements() {
  const { t } = useLanguage();

  return (
    <section id="prestasi" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-electric-glow md:text-sm"
            >
              {t.achievements.overline}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gradient font-display text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl"
            >
              {t.achievements.title}
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {t.achievements.items.map((item, index) => (
            <motion.article
              key={`${item.title}-${item.year}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="ring-trace glass group relative rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    index % 2 === 0
                      ? "border border-electric/40 bg-electric/20 text-electric-glow"
                      : "border border-violet/40 bg-violet/20 text-purple-200"
                  }`}
                >
                  <Trophy className="h-6 w-6" />
                </div>
                <span className="font-mono text-xs tracking-[0.25em] text-white/40">
                  {item.year}
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl font-bold leading-tight md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-electric-glow/90">{item.place}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
