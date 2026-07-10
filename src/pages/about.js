import { useEffect } from "react";
import { useRouter } from "next/router";
import Ps5Background from "@/components/Ps5Background";

export default function About() {
  const router = useRouter();

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape" || e.key === "Backspace") {
        router.push("/");
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [router]);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 text-white">
      <Ps5Background />

      <button
        onClick={() => router.push("/")}
        className="absolute left-8 top-6 text-sm tracking-wide text-white/60 hover:text-white"
      >
        &larr; Back
      </button>

      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-light tracking-tight sm:text-5xl">
          About Me
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-white/70">
          Hi, I&apos;m Joel. Bio goes here.
        </p>
      </div>
    </div>
  );
}
