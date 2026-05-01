import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="pendidikan" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-electric-glow md:text-sm"
        >
          {t.education.overline}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gradient font-display text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl"
        >
          {t.education.title}
        </motion.h2>

        <div className="relative mt-14 pl-6 md:pl-10">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-electric/0 via-electric/60 to-violet/0" />
          <div className="space-y-8">
            {t.education.items.map((item, index) => (
              <motion.div
                key={`${item.school}-${item.period}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.07 }}
                className="relative"
              >
                <div
                  className={`absolute top-3 h-4 w-4 rounded-full md:-left-[2.65rem] -left-[1.65rem] ${
                    index === 0 ? "bg-electric" : index === 1 ? "bg-violet" : "bg-magenta"
                  }`}
                  style={{
                    boxShadow:
                      index === 0
                        ? "0 0 18px rgba(79,124,255,0.7)"
                        : index === 1
                          ? "0 0 18px rgba(124,58,237,0.8)"
                          : "0 0 18px rgba(239,62,147,0.7)",
                  }}
                />

                <div className="ring-trace glass rounded-2xl p-5 md:p-6">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-white/45">
                    <GraduationCap className="h-3.5 w-3.5" />
                    {item.period}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold md:text-2xl">{item.school}</h3>
                  <p className="mt-1 text-sm font-medium text-electric-glow">{item.degree}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
