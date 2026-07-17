import React from 'react'
import useIsMobile from '@/lib/useIsMobile'

export const id = "education";

export function Thumbnail() {
  return (
    <div
      className="h-full w-full rounded-md"
      style={{
            backgroundImage: `url("/images/McGill_Logo.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}
    />
  );
}

export function Background() {
  const isMobile = useIsMobile();

  const logo = (
    <div className={isMobile ? "w-32" : "w-[20%] absolute bottom-56 left-240"} style={{ perspective: "800px" }}>
      <img alt="logo" src='/images/Mcgill_athletics_logo2.png' className="opacity-70 animate-slow-spin-y"/>
    </div>
  );

  const text = (
    <div className={isMobile ? "max-w-lg text-center" : "absolute bottom-70 left-40 max-w-lg w-[80%]"}>
      <h2 className={`font-semibold ${isMobile ? "text-3xl" : "text-5xl"}`}>Computer Science Major</h2>
      <p className="mt-2 text-2xl font-extrabold text-red-400 ">
        (AI Concentrated)
      </p>
      <ul className={`mt-4 text-white italic list-disc ${isMobile ? "ml-3 inline-block text-left" : "ml-3"}`}>
       <li>Enrolled Fall of 2024</li>
      </ul>
    </div>
  );

  return (
    <div
      className={`fixed inset-0 -z-10 ${isMobile ? "flex flex-col items-center justify-center gap-8 overflow-y-auto px-6 pb-16 pt-56" : ""}`}
      style={{
        backgroundImage: `linear-gradient(rgba(13,17,23,0.6), rgba(13,17,23,0.6)), url("/images/McGill_University_Background.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        }}
        >
        {logo}
        {text}
    </div>
  );
}