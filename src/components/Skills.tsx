import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { skillCategories } from "../data/portfolioData";
import { useBilingual } from "../hooks/useBilingual";

export default function Skills() {
  const { t } = useTranslation();
  const tr = useBilingual();

  return (
    <section id="skills" className="py-28 bg-cream-200/60 dark:bg-ink-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-600 dark:text-gold-400 mb-3">{t("skills.eyebrow")}</p>
          <h2 className="font-display text-4xl sm:text-5xl text-ink-950 dark:text-cream-100">{t("skills.heading")}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title.en}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-gold-500/15 bg-white/50 dark:bg-white/[0.03] backdrop-blur-md p-7 shadow-glass hover:shadow-gold transition-shadow"
            >
              <h3 className="font-display text-xl text-ink-950 dark:text-cream-100 mb-5">{tr(cat.title)}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm font-body text-ink-800 dark:text-cream-200 border border-gold-500/20 group-hover:border-gold-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
