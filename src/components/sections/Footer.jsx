import { useLanguage } from "@/context/LanguageContext";

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect width="16" height="16" x="4" y="4" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M5.3 18.7 6.4 15A7.6 7.6 0 1 1 9 17.6Z" />
      <path d="M9.4 8.6c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.4.5c.7 1.2 1.7 2.1 3 2.7l.5-.6c.2-.2.4-.3.7-.2l1.6.7c.3.1.4.3.4.6v.5c0 .3 0 .6-.4.8-.5.3-1.4.5-2.3.2-2.9-.8-5.4-3.2-6.3-6.1-.3-.8-.1-1.7.2-2.2Z" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();
  const socialLinks = [
    { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/haryy_anna?igsh=MXAwNGQycTE0c2FlMQ==" },
    { icon: WhatsAppIcon, label: "WhatsApp", href: "https://wa.me/6281311334892" },
  ];

  return (
    <footer id="kontak" className="relative pt-24 pb-32 md:pb-36">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-8 md:p-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-electric/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-violet/30 blur-3xl" />

          <div className="relative">
            <h2 className="text-gradient max-w-3xl font-display text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {t.footer.tagline}
            </h2>

            <a
              href="#beranda"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric to-violet px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-electric/30 transition-all hover:scale-[1.03] hover:shadow-violet/50"
            >
              Portofolio.Ngakan Harya
            </a>

            <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/45">
                © 2026 - {t.footer.copyright}
              </p>

              <div className="flex items-center gap-2">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="glass flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all hover:border-electric/40 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
