import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FiSend, FiMapPin, FiMail } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { profile } from "../data/portfolioData";
import { useBilingual } from "../hooks/useBilingual";

// ----------------------------------------------------------------------
// Fill these in from your EmailJS dashboard (emailjs.com) to enable sending.
// Until then, the form validates but shows an error toast on submit.
// ----------------------------------------------------------------------
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const { t } = useTranslation();
  const tr = useBilingual();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.name = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Invalid email";
    if (!message) nextErrors.message = "Required";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    try {
      if (EMAILJS_SERVICE_ID.startsWith("YOUR_")) throw new Error("EmailJS not configured");
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, EMAILJS_PUBLIC_KEY);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 bg-cream-200/60 dark:bg-ink-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-gold-600 dark:text-gold-400 mb-3">{t("contact.eyebrow")}</p>
          <h2 className="font-display text-4xl sm:text-5xl text-ink-950 dark:text-cream-100">{t("contact.heading")}</h2>
        </div>

        <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full grid place-items-center bg-gold-500/10 text-gold-500"><FiMail /></span>
              <a href={profile.social.email} className="font-body text-ink-800 dark:text-cream-200 hover:text-gold-500 transition-colors">
                {profile.social.email.replace("mailto:", "")}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full grid place-items-center bg-gold-500/10 text-gold-500"><FiMapPin /></span>
              <span className="font-body text-ink-800 dark:text-cream-200">{tr(profile.location)}</span>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gold-500/15 bg-white/50 dark:bg-white/[0.03] backdrop-blur-md p-8 shadow-glass space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <input
                  name="name"
                  placeholder={t("contact.name")}
                  className="w-full bg-transparent border-b border-gold-500/25 focus:border-gold-500 outline-none py-2 font-body text-ink-950 dark:text-cream-100 placeholder:text-ink-700/40 dark:placeholder:text-cream-300/40"
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>
              <div>
                <input
                  name="email"
                  placeholder={t("contact.email")}
                  className="w-full bg-transparent border-b border-gold-500/25 focus:border-gold-500 outline-none py-2 font-body text-ink-950 dark:text-cream-100 placeholder:text-ink-700/40 dark:placeholder:text-cream-300/40"
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <input
                name="subject"
                placeholder={t("contact.subject")}
                className="w-full bg-transparent border-b border-gold-500/25 focus:border-gold-500 outline-none py-2 font-body text-ink-950 dark:text-cream-100 placeholder:text-ink-700/40 dark:placeholder:text-cream-300/40"
              />
            </div>
            <div>
              <textarea
                name="message"
                rows={4}
                placeholder={t("contact.message")}
                className="w-full bg-transparent border-b border-gold-500/25 focus:border-gold-500 outline-none py-2 font-body text-ink-950 dark:text-cream-100 placeholder:text-ink-700/40 dark:placeholder:text-cream-300/40 resize-none"
              />
              {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === "sending"}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gold-500 text-ink-950 font-medium hover:shadow-gold transition-shadow disabled:opacity-60"
            >
              <FiSend />
              {status === "sending" ? t("contact.sending") : t("contact.send")}
            </motion.button>

            {status === "success" && <p className="text-sm text-green-600 dark:text-green-400">{t("contact.success")}</p>}
            {status === "error" && <p className="text-sm text-red-500">{t("contact.error")}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
