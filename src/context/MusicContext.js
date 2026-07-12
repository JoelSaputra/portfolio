import { createContext, useContext, useRef, useState, useCallback } from "react";

const MusicContext = createContext(null);

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

  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    if (!audio.muted) {
      audio.play().catch(() => {});
    }
    setMuted(audio.muted);
  }, []);

  const setTrack = useCallback((path) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = path;
    audio.muted = true;
    setMuted(true);
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
