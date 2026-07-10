import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SLOT_WIDTH = 180;

const defaultProfiles = [
  { id: "home", label: "Home", color: "#4f9dff" },
  { id: "contact", label: "Contact Me", color: "#c94fff" },
];

export default function CircularLink({ profiles = defaultProfiles, onSelect }) {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const focusedIndexRef = useRef(focusedIndex);
  focusedIndexRef.current = focusedIndex;

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "ArrowRight") {
        setFocusedIndex((i) => Math.min(i + 1, profiles.length - 1));
      } else if (e.key === "ArrowLeft") {
        setFocusedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter") {
        onSelect?.(profiles[focusedIndexRef.current]);
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [profiles, onSelect]);

  const mid = (profiles.length - 1) / 2;
  const offset = -(focusedIndex - mid) * SLOT_WIDTH;

  return (
    <div className="flex w-screen justify-center mb-20 overflow-hidden py-8">
      <motion.div
        className="flex items-end"
        animate={{ x: offset }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
      >
        {profiles.map((profile, index) => {
          const distance = Math.abs(index - focusedIndex);
          const isFocused = distance === 0;
          const size = isFocused ? 176 : distance === 1 ? 108 : 80;
          const opacity = isFocused ? 1 : distance === 1 ? 0.55 : 0.3;

          return (
            <button
              key={profile.id}
              onClick={() => {
                if (isFocused) {
                  onSelect?.(profile);
                } else {
                  setFocusedIndex(index);
                }
              }}
              className="flex flex-none flex-col items-center gap-3 focus:outline-none"
              style={{ width: SLOT_WIDTH }}
            >
              <motion.div
                animate={{ width: size, height: size, opacity }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className="flex items-center justify-center rounded-full"
                style={{
                  background: "#8c8c8c",
                  border: isFocused
                    ? `2px solid ${profile.color}`
                    : "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <svg viewBox="0 0 100 100" className="h-[55%] w-[55%]">
                  <rect x="14" y="14" width="72" height="72" rx="16" fill="#ffffff" />
                  <circle cx="38" cy="42" r="6" fill="#8c8c8c" />
                  <circle cx="62" cy="42" r="6" fill="#8c8c8c" />
                  <path
                    d="M36 58 Q50 70 64 58"
                    stroke="#8c8c8c"
                    strokeWidth="8"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </motion.div>
              <AnimatePresence>
                {(
                  <motion.span
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="text-base font-extrabold text-white "
                  >
                    {profile.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </motion.div>
    </div>
  );
}
