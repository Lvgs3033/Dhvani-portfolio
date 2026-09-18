import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950"
        >
          <motion.span
            initial={{ letterSpacing: "0.1em", opacity: 0 }}
            animate={{ letterSpacing: "0.35em", opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-display text-3xl text-cream-100"
          >
            DK
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease: "easeInOut", delay: 0.2 }}
            className="mt-4 h-[2px] w-24 origin-left bg-gradient-to-r from-transparent via-gold-400 to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
