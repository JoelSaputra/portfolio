import { useState } from "react";
import { motion } from "framer-motion";

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function createSkillTile(name, frameworks = []) {
  const id = name.toLowerCase().replace(/\s+/g, "-");

  return {
    id,
    Thumbnail() {
      return <div className="h-full w-full rounded-md bg-[#1a1a1a]" />;
    },
    Background({ onHideTileRow } = {}) {
      const [showFrameworks, setShowFrameworks] = useState(false);

      function handleReveal() {
        setShowFrameworks(true);
        onHideTileRow?.();
      }

      return (
        <div className="relative min-h-screen w-full">
          <div className="fixed inset-0 -z-10 bg-[#0a0a0a]" />

          <motion.div
            className="relative pb-20 pl-40 pr-20 max-w-3xl"
            animate={{ paddingTop: showFrameworks ? 120 : 288 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-5xl font-semibold">{name}</h2>
            <p className="mt-2 text-white/70">
              Details about {name} coming soon.
            </p>

            {frameworks.length > 0 && !showFrameworks && (
              <button
                onClick={handleReveal}
                className="mt-8 rounded-full border border-white/30 px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#0a0a0a]"
              >
                Press to see frameworks
              </button>
            )}

            {showFrameworks && (
              <div className="mt-12">
                <p className="text-sm uppercase tracking-wide text-white/50">
                  Frameworks &amp; Libraries
                </p>
                <motion.div
                  className="mt-4 flex flex-wrap gap-4"
                  initial="hidden"
                  animate="show"
                  variants={listVariants}
                >
                  {frameworks.map((fw) => (
                    <motion.div
                      key={fw}
                      variants={cardVariants}
                      className="w-40 overflow-hidden rounded-md border border-white/10"
                    >
                      <div className="h-24 w-full bg-[#1a1a1a]" />
                      <p className="px-3 py-2 text-sm text-white/80">{fw}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      );
    },
  };
}
