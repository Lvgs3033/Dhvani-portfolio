import { useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { certifications } from "../data/portfolioData";
import { useBilingual } from "../hooks/useBilingual";

export default function AllCertifications() {
  const { t } = useTranslation();
  const tr = useBilingual();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-40 pb-28 bg-cream-200/60 dark:bg-ink-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-ink-800 dark:text-cream-200 hover:text-gold-500 dark:hover:text-gold-400 transition-colors mb-10"
        >
          <FiArrowLeft /> {t("common.backHome")}
        </Link>

        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-600 dark:text-gold-400 mb-3">{t("certifications.eyebrow")}</p>
          <h2 className="font-display text-4xl sm:text-5xl text-ink-950 dark:text-cream-100">{t("certifications.heading")}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.issuer + i}
              href={cert.image}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -8 }}
              className="group block rounded-2xl border border-gold-500/15 bg-white/50 dark:bg-white/[0.03] backdrop-blur-md overflow-hidden shadow-glass hover:shadow-gold transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden bg-ink-950/5">
                <img
                  src={cert.image}
                  alt={tr(cert.name)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-wide text-gold-600 dark:text-gold-400 mb-1">{cert.issuer}</p>
                <p className="font-display text-base text-ink-950 dark:text-cream-100 leading-snug">{tr(cert.name)}</p>
                {cert.year && <p className="text-xs text-ink-700/60 dark:text-cream-300/50 mt-2">{cert.year}</p>}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
