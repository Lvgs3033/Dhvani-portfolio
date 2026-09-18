import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { education, languages } from "../data/portfolioData";
import { useBilingual } from "../hooks/useBilingual";

export default function Education() {
  const { t } = useTranslation();
  const tr = useBilingual();

  return (
    <section id="education" className="py-28 bg-cream-100 dark:bg-ink-950">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-600 dark:text-gold-400 mb-3">{t("education.eyebrow")}</p>
          <h2 className="font-display text-4xl sm:text-5xl text-ink-950 dark:text-cream-100">{t("education.heading")}</h2>
        </div>

        <div className="relative pl-8 sm:pl-10 border-l border-gold-500/25">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution + i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative mb-10 last:mb-0"
            >
              <span className="absolute -left-[calc(2rem+5px)] sm:-left-[calc(2.5rem+5px)] top-1.5 w-2.5 h-2.5 rounded-full bg-gold-500 shadow-gold" />
              <div className="rounded-2xl border border-gold-500/15 bg-white/40 dark:bg-white/[0.03] backdrop-blur-md p-7 shadow-glass hover:shadow-gold transition-shadow">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-display text-xl text-ink-950 dark:text-cream-100">{tr(edu.degree)}</h3>
                  <span className="text-xs font-body text-gold-600 dark:text-gold-400 tracking-wide">
                    {typeof edu.duration === "string" ? edu.duration : tr(edu.duration)}
                  </span>
                </div>
                <p className="text-sm font-body text-ink-700 dark:text-cream-300/80 mb-1">{edu.institution}</p>
                <p className="text-xs font-body text-ink-700/70 dark:text-cream-300/50 mb-3">{tr(edu.location)}</p>

                {edu.status && (
                  <span className="inline-block mb-3 text-[10px] uppercase tracking-wide px-2.5 py-1 rounded-full border border-gold-500/25 text-gold-600 dark:text-gold-400">
                    {tr(edu.status)}
                  </span>
                )}
                {edu.detail && <p className="text-sm font-body text-gold-600 dark:text-gold-400 mb-3">{edu.detail}</p>}

                {edu.focus.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {edu.focus.map((f) => (
                      <span key={f} className="text-xs px-2.5 py-1 rounded-full bg-gold-500/10 text-ink-800 dark:text-cream-200">
                        {f}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-6">
          {languages.map((lang) => (
            <div key={lang.name} className="flex items-center gap-3 rounded-full border border-gold-500/20 px-5 py-3 bg-white/40 dark:bg-white/[0.03]">
              <span className="text-xl">{lang.flag}</span>
              <div>
                <p className="text-sm font-body text-ink-950 dark:text-cream-100">{lang.name}</p>
                <p className="text-xs text-gold-600 dark:text-gold-400">
                  {lang.level}
                  {lang.note ? ` · ${tr(lang.note)}` : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
