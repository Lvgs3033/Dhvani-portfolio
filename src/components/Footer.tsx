import { useTranslation } from "react-i18next";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { profile } from "../data/portfolioData";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 border-t border-gold-500/10 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="font-display text-cream-100 text-lg">
          {profile.name.split(" ")[0]}
          <span className="text-gold-500">.</span>
        </p>

        <p className="text-xs font-body text-cream-300/50">
          © {year} {profile.name}. {t("footer.rights")}
        </p>

        <div className="flex items-center gap-5">
          <a href={profile.social.github} target="_blank" rel="noreferrer" className="text-cream-200 hover:text-gold-400 transition-colors"><FiGithub /></a>
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="text-cream-200 hover:text-gold-400 transition-colors"><FiLinkedin /></a>
          <a href={profile.social.email} className="text-cream-200 hover:text-gold-400 transition-colors"><FiMail /></a>
          <a
            href="/#home"
            aria-label={t("footer.backToTop")}
            className="w-9 h-9 rounded-full grid place-items-center border border-gold-500/30 text-gold-400 hover:shadow-gold transition-shadow"
          >
            <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
