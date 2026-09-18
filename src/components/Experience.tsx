import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { experience } from "../data/portfolioData";
import { useBilingual } from "../hooks/useBilingual";

export default function Experience() {
  const { t } = useTranslation();
  const tr = useBilingual();

  return (
    <section id="experience" className="py-28 bg-cream-100 dark:bg-ink-950">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-600 dark:text-gold-400 mb-3">{t("experience.eyebrow")}</p>
          <h2 className="font-display text-4xl sm:text-5xl text-ink-950 dark:text-cream-100">{t("experience.heading")}</h2>
        </div>

        <div className="relative pl-8 sm:pl-10 border-l border-gold-500/25">
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              <span className="absolute -left-[calc(2rem+5px)] sm:-left-[calc(2.5rem+5px)] top-1.5 w-2.5 h-2.5 rounded-full bg-gold-500 shadow-gold" />
              <div className="rounded-2xl border border-gold-500/15 bg-white/40 dark:bg-white/[0.03] backdrop-blur-md p-7 shadow-glass hover:shadow-gold transition-shadow">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-display text-xl text-ink-950 dark:text-cream-100">{job.company}</h3>
                  <span className="text-xs font-body text-gold-600 dark:text-gold-400 tracking-wide">{job.duration}</span>
                </div>
                <p className="font-body text-sm text-gold-600 dark:text-gold-400 mb-4">{tr(job.role)}</p>
                <ul className="space-y-2">
                  {job.points.map((point, idx) => (
                    <li key={idx} className="text-sm font-body text-ink-700 dark:text-cream-300/80 leading-relaxed flex gap-2">
                      <span className="text-gold-500 mt-1.5">—</span>
                      <span>{tr(point)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
