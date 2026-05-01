import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Award,
  Briefcase,
  FileText,
  GraduationCap,
  Home,
  User,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

function DockItem({ mouseX, icon: Icon, label, href }) {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (value) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return value - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-140, 0, 140], [44, 72, 44]);
  const width = useSpring(widthSync, { stiffness: 220, damping: 18, mass: 0.1 });

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ width }}
      className="group relative flex aspect-square items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-colors hover:border-electric/50 hover:bg-white/10"
      aria-label={label}
    >
      <Icon className="h-5 w-5 text-white/85 transition-colors group-hover:text-white" />
      <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-black/85 px-2 py-1 text-[11px] font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
        {label}
      </span>
    </motion.a>
  );
}

export default function BottomDock() {
  const { t } = useLanguage();
  const mouseX = useMotionValue(Infinity);

  const items = [
    { icon: Home, label: t.dock.home, href: "#beranda" },
    { icon: User, label: t.dock.about, href: "#tentang" },
    { icon: Award, label: t.dock.achievements, href: "#prestasi" },
    { icon: GraduationCap, label: t.dock.education, href: "#pendidikan" },
    { icon: Briefcase, label: t.dock.works, href: "#karya" },
    { icon: FileText, label: t.dock.docs, href: "#dokumentasi" },
  ];

  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center px-4"
    >
      <motion.div
        onMouseMove={(event) => mouseX.set(event.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="glass-strong pointer-events-auto flex items-end gap-2 rounded-3xl px-3 py-2 shadow-2xl shadow-black/60"
      >
        {items.map((item) => (
          <DockItem key={item.label} mouseX={mouseX} {...item} />
        ))}
      </motion.div>
    </motion.div>
  );
}
