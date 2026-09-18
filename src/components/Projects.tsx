import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { projectCategories, projects } from "../data/portfolioData";
import { useBilingual } from "../hooks/useBilingual";

const VISIBLE_LIMIT = 6;

export default function Projects() {
  const { t } = useTranslation();
  const tr = useBilingual();
  const navigate = useNavigate();
  const [filter, setFilter] = useState<string>("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const visible = filtered.slice(0, VISIBLE_LIMIT);
  const hasMore = filtered.length > VISIBLE_LIMIT;

  return (
    <section id="projects" className="py-28 bg-cream-200/60 dark:bg-ink-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-600 dark:text-gold-400 mb-3">{t("projects.eyebrow")}</p>
          <h2 className="font-display text-4xl sm:text-5xl text-ink-950 dark:text-cream-100">{t("projects.heading")}</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {["All", ...projectCategories].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-body border transition-colors ${
                filter === cat
                  ? "bg-gold-500 border-gold-500 text-ink-950"
                  : "border-gold-500/25 text-ink-800 dark:text-cream-200 hover:border-gold-500/60"
              }`}
            >
              {cat === "All" ? t("projects.all") : cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                whileHover={{ y: -8, rotateX: 2 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-gold-500/15 bg-white/50 dark:bg-white/[0.03] backdrop-blur-md p-7 shadow-glass hover:shadow-gold transition-shadow flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-lg text-ink-950 dark:text-cream-100 pr-2">{project.title}</h3>
                  <span className="text-[10px] uppercase tracking-wide px-2 py-1 rounded-full border border-gold-500/25 text-gold-600 dark:text-gold-400 whitespace-nowrap">
                    {project.category}
                  </span>
                </div>

                <p className="text-sm font-body text-ink-700 dark:text-cream-300/80 leading-relaxed mb-5 flex-1">
                  {tr(project.description)}
                </p>

                {project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-gold-500/10 text-gold-600 dark:text-gold-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-4 pt-2 border-t border-gold-500/10">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm text-ink-800 dark:text-cream-200 hover:text-gold-500 transition-colors">
                      <FiGithub /> {t("projects.github")}
                    </a>
                  ) : (
                    <span className="flex items-center gap-1.5 text-sm text-ink-700/40 dark:text-cream-300/30">
                      <FiGithub /> {t("projects.comingSoon")}
                    </span>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm text-ink-800 dark:text-cream-200 hover:text-gold-500 transition-colors">
                      <FiExternalLink /> {t("projects.demo")}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => navigate("/projects")}
              className="flex items-center gap-2 whitespace-nowrap px-6 py-3 rounded-full bg-gold-500 text-ink-950 text-sm font-medium hover:shadow-gold transition-shadow"
            >
              {t("projects.viewAll")} <FiArrowRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
