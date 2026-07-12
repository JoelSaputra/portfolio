import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Ps5Background from "@/components/Ps5Background";
import CircularLink from "@/components/CircularLink";
import MuteButton from "@/components/MuteButton";
import { useMusic } from "@/context/MusicContext";

function useClock() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
      );
    update();
    const id = setInterval(update, 1000 * 30);
    return () => clearInterval(id);
  }, []);

  return time;
}

export default function Home() {
  const time = useClock();
  const router = useRouter();
  const { setTrack } = useMusic();

  useEffect(() => {
    setTrack("/sounds/select-user.mp3");
  }, [setTrack]);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center text-white">
      <Ps5Background />

      <div className="mb-5 flex flex-col items-center text-center">
        <h1 className="text-4xl font-light tracking-tight sm:text-5xl">
          Welcome to Joel's Portfolio
        </h1>
        <p className="mt-4 text-lg text-white/50">
          Please press 'Enter'
        </p>
      </div>

      <div>
          <CircularLink onSelect={(profile) => router.push(`/${profile.id}`)} />
      </div>

      <div className="absolute right-8 top-6 flex items-center gap-5 text-lg tracking-wide text-white/80">
        {time}
        <MuteButton />
      </div>
    </div>
  );
}
