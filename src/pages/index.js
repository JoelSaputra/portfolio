import { useEffect, useState } from "react";
import Ps5Background from "@/components/Ps5Background";

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

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#050608] text-white">
      <Ps5Background />

      <div className="absolute right-8 top-6 text-lg tracking-wide text-white/80">
        {time}
      </div>
    </div>
  );
}
