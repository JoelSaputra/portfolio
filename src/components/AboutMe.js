import { SVG3D } from "3dsvg";

export const id = "about-me";

export function Thumbnail() {
  return (
    <div
      className="h-full w-full rounded-md"
      style={{ background: "linear-gradient(135deg, #22c55eaa, #0a0a0a 85%)" }}
    />
  );
}

export function Background() {
  return (
    <div className="matte-metal-card fixed inset-0 -z-10">
      <div className="absolute left-16 top-1/2 mt-8 max-w-xl -translate-y-1/2">
        <p className="text-sm font-medium tracking-[0.2em] text-[#22c55e]">
          HEY, I&apos;M
        </p>
        <h1 className="mt-2 text-7xl font-bold leading-none text-white">
          Joel
        </h1>
        <h1 className="mt-2 text-7xl font-bold leading-none text-[#22c55e]">
          Clenn Saputra
        </h1>
        <p className="mt-6 text-lg text-white/60">
          CS Student · AI Enthusiast
        </p>
        <p className="mt-4 text-white/70">
          Studying Computer Science at McGill University, deep into AI and
          still hungry to learn something new every day. I build things
          because I like figuring out how they work, then making them work
          better — and right now, I&apos;m on the hunt for my first real shot
          in tech.
        </p>
      </div>


      <div className="absolute left-140 mb-5 w-250 h-220">
        
      </div>
    </div>
  );
}
