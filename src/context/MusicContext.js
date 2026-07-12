import { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";

const MusicContext = createContext(null);
const STORAGE_KEY = "musicMuted";

export function MusicProvider({ children }) {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(true);

  if (typeof window !== "undefined" && audioRef.current === null) {
    const audio = new Audio();
    audio.loop = true;
    audio.muted = true;
    audio.volume = 0.05;
    audioRef.current = audio;
  }

  useEffect(() => {
    const audio = audioRef.current;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "false") {
      audio.muted = false;
      setMuted(false);
    }

    return () => {
      audio.pause();
    };
  }, []);

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    if (!audio.muted) {
      audio.play().catch(() => {});
    }
    setMuted(audio.muted);
    localStorage.setItem(STORAGE_KEY, String(audio.muted));
  }, []);

  const setTrack = useCallback((path) => {
    const audio = audioRef.current;
    if (!audio || audio.src.endsWith(path)) return;
    const wasMuted = audio.muted;
    audio.src = path;
    audio.muted = wasMuted;
    audio.play().catch(() => {});
  }, []);

  return (
    <MusicContext.Provider value={{ muted, toggleMute, setTrack }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  return useContext(MusicContext);
}
