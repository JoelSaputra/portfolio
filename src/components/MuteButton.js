import { Volume2, VolumeX } from "lucide-react";
import { useMusic } from "@/context/MusicContext";

export default function MuteButton() {
  const { muted, toggleMute } = useMusic();

  return (
    <button
      onClick={toggleMute}
      className="text-white/70 transition-colors hover:text-white"
      aria-label={muted ? "Unmute background music" : "Mute background music"}
    >
      {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
    </button>
  );
}
