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
      style={{ background: "radial-gradient(circle at 30% 40%, #ffe14f55, #0d1117 70%)" }}
    >
      <div className="absolute bottom-16 left-10 max-w-lg">
        <h2 className="text-3xl font-semibold">Backend</h2>
        <p className="mt-2 text-white/70">
          Node.js, Python, REST APIs.
        </p>
      </div>
    </div>
  );
}