import { Volume2, VolumeX, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useMusic } from "@/context/MusicContext";

export default function MuteButton() {
  const { muted, toggleMute } = useMusic();

  return (
    <div className="relative flex items-center">
      <button
        onClick={toggleMute}
        className="text-white/70 transition-colors hover:text-white"
        aria-label={muted ? "Unmute background music" : "Mute background music"}
      >
        {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {muted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="pointer-events-none absolute left-1/2 top-full mt-1 flex -translate-x-1/2 flex-col items-center text-white/60"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              <ArrowUp className="h-4 w-4" />
              <span className="whitespace-nowrap text-md">Click to unmute</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
