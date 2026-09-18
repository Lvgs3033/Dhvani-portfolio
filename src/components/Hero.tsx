import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { profile } from "../data/portfolioData";
import { useBilingual } from "../hooks/useBilingual";

function useTypewriter(words: string[], speed = 55, pause = 1400) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6);
    } else {
      setDeleting(false);
      setIndex((i) => i + 1);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

export default function Hero() {
  const { t } = useTranslation();
  const tr = useBilingual();
  const roles = profile.roles.map((r) => tr(r));
  const typed = useTypewriter(roles);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-cream-100 dark:bg-ink-950 bg-data-grid bg-grid">
      {/* ambient floating shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold-400/10 blur-3xl animate-float" />
        <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-gold-500/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-10 grid lg:grid-cols-[1.2fr,0.8fr] gap-16 items-center pt-28 pb-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body tracking-[0.3em] text-xs uppercase text-gold-600 dark:text-gold-400 mb-5"
          >
            {t("hero.greeting")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-ink-950 dark:text-cream-100"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 h-8 font-body text-xl sm:text-2xl text-gold-600 dark:text-gold-400"
          >
            {typed}
            <span className="inline-block w-[2px] h-6 bg-gold-500 ml-1 align-middle animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl font-body text-ink-700 dark:text-cream-300/80 leading-relaxed"
          >
            {tr(profile.intro)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="whitespace-nowrap px-7 py-3 rounded-full bg-gold-500 text-ink-950 font-medium hover:shadow-gold transition-shadow"
            >
              {t("hero.cta_hire")}
            </a>
            <a
              href="#projects"
              className="whitespace-nowrap px-7 py-3 rounded-full border border-gold-500/40 text-ink-950 dark:text-cream-100 font-medium hover:border-gold-500 transition-colors"
            >
              {t("hero.cta_projects")}
            </a>

            <div className="flex items-center gap-4 ml-2">
              <a href={profile.social.github} target="_blank" rel="noreferrer" className="text-xl text-ink-700 dark:text-cream-200 hover:text-gold-500 transition-colors"><FiGithub /></a>
              <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="text-xl text-ink-700 dark:text-cream-200 hover:text-gold-500 transition-colors"><FiLinkedin /></a>
              <a href={profile.social.email} className="text-xl text-ink-700 dark:text-cream-200 hover:text-gold-500 transition-colors"><FiMail /></a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold-400/30 to-transparent blur-2xl" />
          <div className="relative w-64 h-80 sm:w-80 sm:h-96 rounded-[2rem] overflow-hidden border border-gold-500/20 shadow-glass backdrop-blur-sm bg-ink-900/5">
            <img
              src={profile.photo}
              alt={profile.name}
              onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-700 dark:text-cream-300 text-xs tracking-widest uppercase"
      >
        {t("hero.scroll")}
        <FiArrowDown />
      </motion.a>
    </section>
  );
}
