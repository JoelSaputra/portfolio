import React from 'react'

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
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        backgroundImage: `linear-gradient(rgba(13,17,23,0.6), rgba(13,17,23,0.6)), url("/images/McGill_University_Background.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        }}
        >

        <div className="w-[20%] absolute bottom-56 left-240" style={{ perspective: "800px" }}>
            <img alt="logo" src='/images/Mcgill_athletics_logo2.png' className="opacity-70 animate-slow-spin-y"/>
        </div>
      <div className="absolute bottom-70 left-40 max-w-lg w-[80%]">
        <h2 className="text-5xl font-semibold">Computer Science Major</h2>
        <p className="mt-2 text-2xl font-extrabold text-red-400 ">
          (AI Concentrated)
        </p>
        <ul className="mt-4 ml-3 text-white italic list-disc">
         <li>Enrolled Fall of 2024</li> 
        </ul>
      </div>
    </div>
  );
}