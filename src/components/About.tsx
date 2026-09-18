import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import { profile } from "../data/portfolioData";
import { useBilingual } from "../hooks/useBilingual";

export default function About() {
  const { t } = useTranslation();
  const tr = useBilingual();

  return (
    <section id="about" className="py-28 bg-cream-100 dark:bg-ink-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[0.8fr,1.2fr] gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-3 rounded-3xl border border-gold-500/20" />
          <div className="w-64 h-72 sm:w-72 sm:h-80 rounded-3xl overflow-hidden bg-ink-900/5 border border-gold-500/10 shadow-glass">
            <img
              src={profile.photo}
              alt={profile.name}
              onError={(e) => ((e.target as HTMLImageElement).style.display = "none")}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] uppercase text-gold-600 dark:text-gold-400 mb-3"
          >
            {t("about.eyebrow")}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl text-ink-950 dark:text-cream-100 mb-6"
          >
            {t("about.heading")}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-gold-500/15 bg-white/40 dark:bg-white/[0.03] backdrop-blur-md p-8 shadow-glass"
          >
            <p className="font-body leading-relaxed text-ink-700 dark:text-cream-300/85">{tr(profile.bio)}</p>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {profile.stats.map((stat, i) => (
              <motion.div
                key={stat.label.en}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="text-center"
              >
                <div className="font-display text-3xl text-gold-500">
                  <CountUp end={stat.value} decimals={stat.value % 1 !== 0 ? 2 : 0} duration={2} enableScrollSpy scrollSpyOnce />
                  {stat.suffix}
                </div>
                <div className="text-xs uppercase tracking-wide text-ink-700 dark:text-cream-300/70 mt-1">{tr(stat.label)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
