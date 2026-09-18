import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";
import { profile } from "../data/portfolioData";

const sections = ["home", "about", "skills", "experience", "projects", "education", "certifications", "contact"];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLang = (lng: "en" | "de" | "fr") => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-cream-100/70 dark:bg-ink-950/60 shadow-glass border-b border-gold-500/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-6 lg:px-8 xl:px-10 h-20">
        <a href="/#home" className="shrink-0 whitespace-nowrap font-display text-xl tracking-wide text-ink-950 dark:text-cream-100">
          {profile.name.split(" ")[0]}
          <span className="text-gold-500">.</span>
        </a>

        <ul className="hidden xl:flex items-center gap-5 2xl:gap-7 font-body text-[13px] 2xl:text-sm">
          {sections.map((s) => (
            <li key={s} className="shrink-0">
              <a
                href={`/#${s}`}
                className="relative whitespace-nowrap text-ink-800 dark:text-cream-200 hover:text-gold-500 dark:hover:text-gold-400 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-gold-500 hover:after:w-full after:transition-all"
              >
                {t(`nav.${s}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden xl:flex items-center gap-3 2xl:gap-4 shrink-0">
          <div className="flex items-center rounded-full border border-gold-500/30 overflow-hidden text-xs font-body shrink-0">
            <button
              onClick={() => switchLang("en")}
              className={`px-2.5 2xl:px-3 py-1.5 whitespace-nowrap transition-colors ${i18n.language === "en" ? "bg-gold-500 text-ink-950" : "text-ink-800 dark:text-cream-200"}`}
            >
              EN
            </button>
            <button
              onClick={() => switchLang("de")}
              className={`px-2.5 2xl:px-3 py-1.5 whitespace-nowrap transition-colors ${i18n.language === "de" ? "bg-gold-500 text-ink-950" : "text-ink-800 dark:text-cream-200"}`}
            >
              DE
            </button>
            <button
              onClick={() => switchLang("fr")}
              className={`px-2.5 2xl:px-3 py-1.5 whitespace-nowrap transition-colors ${i18n.language === "fr" ? "bg-gold-500 text-ink-950" : "text-ink-800 dark:text-cream-200"}`}
            >
              FR
            </button>
          </div>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 shrink-0 rounded-full grid place-items-center border border-gold-500/30 text-gold-500 hover:shadow-gold transition-shadow"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>

          <a
            href={profile.resumeUrl}
            download
            className="shrink-0 whitespace-nowrap px-4 2xl:px-5 py-2 rounded-full bg-gold-500 text-ink-950 text-[13px] 2xl:text-sm font-medium hover:shadow-gold transition-shadow"
          >
            {t("nav.downloadCV")}
          </a>
        </div>

        <button className="xl:hidden text-ink-950 dark:text-cream-100 text-2xl" onClick={() => setOpen(true)} aria-label="Open menu">
          <FiMenu />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-ink-950/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setOpen(false)} className="text-cream-100 text-2xl" aria-label="Close menu">
                <FiX />
              </button>
            </div>
            <ul className="flex flex-col items-center justify-center flex-1 gap-6 font-display text-2xl">
              {sections.map((s) => (
                <li key={s}>
                  <a href={`/#${s}`} onClick={() => setOpen(false)} className="text-cream-100 hover:text-gold-400 transition-colors">
                    {t(`nav.${s}`)}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center gap-4 pb-10">
              <button onClick={() => switchLang("en")} className="text-cream-100 text-sm">EN</button>
              <span className="text-gold-500">/</span>
              <button onClick={() => switchLang("de")} className="text-cream-100 text-sm">DE</button>
              <span className="text-gold-500">/</span>
              <button onClick={() => switchLang("fr")} className="text-cream-100 text-sm">FR</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
