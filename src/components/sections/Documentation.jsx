import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const personalGalleryImages = [
  // Tambahkan URL foto pribadi di sini. Contoh:
  // "https://i.postimg.cc/nrYH01Qc/photo-6260517873558162551-w.jpg",
  "https://i.postimg.cc/nrYH01Qc/photo-6260517873558162551-w.jpg",
  "https://i.postimg.cc/9Q1Yv5jx/IMG-20240120-193318-(1)-min.jpg",
  "https://i.postimg.cc/hPsmGL3q/EWV000032.jpg",
  "https://i.postimg.cc/FHGwGBCh/image.png",
  "https://i.postimg.cc/5ycr6dy9/image.png",
  "https://i.postimg.cc/qMTYrT9H/image.png",
  "https://i.postimg.cc/PqPVyr8L/image.png",
  "https://i.postimg.cc/qMwmdCsg/image.png",
  "https://i.postimg.cc/gjdKCYrh/image.png",
  "https://i.postimg.cc/L8hVKQ62/image.png",
  "https://i.postimg.cc/D02qCBYt/image.png",
  "https://i.postimg.cc/X71w8KKD/image.png",
  "https://i.postimg.cc/RFmfFg94/image.png",
  "https://i.postimg.cc/3rnp8jqR/image.png",
  "https://i.postimg.cc/Pqsv3SCx/image.png",
  "https://i.postimg.cc/fL53bZBF/image.png",
  "https://i.postimg.cc/9X8R5m4G/image.png",
];

const websiteGalleryImages = [
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

function GalleryGrid({ images, emptyText }) {
  if (images.length === 0) {
    return (
      <div className="ring-trace glass flex min-h-56 items-center justify-center rounded-2xl p-6 text-center text-sm leading-relaxed text-white/60">
        {emptyText}
      </div>
    );
  }

  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {images.map((src, index) => (
        <motion.figure
          key={src}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.04 }}
          className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/5"
        >
          <img
            src={src}
            alt={`Gallery ${index + 1}`}
            loading="lazy"
            decoding="async"
            className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-electric/10 via-transparent to-violet/10 opacity-0 transition-opacity group-hover:opacity-100" />
        </motion.figure>
      ))}
    </div>
  );
}

export default function Documentation() {
  const { t } = useLanguage();

  return (
    <section id="dokumentasi" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-electric-glow md:text-sm"
        >
          {t.docs.overline}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gradient font-display text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl"
        >
          {t.docs.title}
        </motion.h2>

        <div className="mt-12 space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-electric/40 bg-electric/20 text-electric-glow">
                <ImageIcon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold md:text-3xl">
                  {t.docs.personalGallery.title}
                </h3>
                <p className="mt-1 text-sm text-white/60 md:text-base">
                  {t.docs.personalGallery.subtitle}
                </p>
              </div>
            </div>
            <GalleryGrid images={personalGalleryImages} emptyText={t.docs.personalGallery.empty} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet/40 bg-violet/20 text-purple-200">
                <ImageIcon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold md:text-3xl">
                  {t.docs.websiteGallery.title}
                </h3>
                <p className="mt-1 text-sm text-white/60 md:text-base">
                  {t.docs.websiteGallery.subtitle}
                </p>
              </div>
            </div>
            <GalleryGrid images={websiteGalleryImages} emptyText={t.docs.websiteGallery.empty} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
