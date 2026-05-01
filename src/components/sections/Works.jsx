import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const projectImages = [
  "https://i.postimg.cc/RFHsXRXZ/image.png",
  "https://i.postimg.cc/0jCCBHms/image.png",
  "https://i.postimg.cc/qqpsyXFS/image.png",
  "https://i.postimg.cc/P5C7FYf5/image.png",
  "https://i.postimg.cc/0QPcxwv6/image.png",
  "https://i.postimg.cc/PxvZgfpx/image.png",
  "https://i.postimg.cc/65fRJm3g/image.png",
  "https://i.postimg.cc/9fKwY380/image.png",
  "https://i.postimg.cc/yxXJKDV9/image.png",
  "https://i.postimg.cc/htGJF4ND/image.png",
  "https://i.postimg.cc/prxTsPK6/image.png",
];

const projectSpans = [
  "col-span-12 lg:col-span-7",
  "col-span-12 lg:col-span-5",
  "col-span-12 md:col-span-6 lg:col-span-5",
  "col-span-12 md:col-span-6 lg:col-span-7",
];

export default function Works() {
  const { t } = useLanguage();

  return (
    <section id="karya" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-electric-glow md:text-sm"
        >
          {t.works.overline}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gradient max-w-3xl font-display text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl"
        >
          {t.works.title}
        </motion.h2>

        <div className="mt-14 grid grid-cols-12 gap-4 md:gap-5">
          {t.works.items.map((project, index) => {
            const span = projectSpans[index % projectSpans.length];

            return (
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: index * 0.06 }}
                className={`ring-trace group relative overflow-hidden rounded-3xl border border-white/10 ${span}`}
              >
                <div className="relative h-72 w-full md:h-96">
                  <img
                    src={projectImages[index % projectImages.length]}
                    alt={project.name}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 via-55% to-black/20" />
                  <div
                    className={`absolute inset-0 mix-blend-overlay opacity-50 ${
                      index % 2 === 0
                        ? "bg-gradient-to-tr from-electric/40 via-transparent to-violet/30"
                        : "bg-gradient-to-tr from-violet/40 via-transparent to-magenta/30"
                    }`}
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-electric-glow md:text-xs">
                    {project.tag}
                  </span>
                  <h3 className="mt-2 max-w-xl font-display text-2xl font-bold leading-tight text-white md:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/90">{project.desc}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/15 bg-black/35 px-2 py-0.5 text-[10px] font-mono text-white/90 md:text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs font-semibold text-white transition-colors group-hover:border-electric group-hover:bg-electric/90">
                    {t.works.viewProject}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>

                <div className="glass-strong absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full transition-all group-hover:border-electric group-hover:bg-electric">
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
