import { SVG3D } from "3dsvg";
import { User } from "lucide-react";
import SkillCube from "./SkillCube";
import useIsMobile from "@/lib/useIsMobile";

export const id = "about-me";

export function Thumbnail() {
  return (
    <div className="matte-metal-card flex h-full w-full items-center justify-center rounded-md">
      <User className="h-8 w-8 text-white" />
    </div>
  );
}

export function Background() {
  const isMobile = useIsMobile();

  const text = (
    <div className={isMobile ? "max-w-xl text-center" : "max-w-xl"}>
      <p className="text-sm font-medium tracking-[0.2em] text-[#22c55e]">
        HEY, I&apos;M
      </p>
      <h1 className={`mt-2 font-bold leading-none text-white ${isMobile ? "text-5xl" : "text-7xl"}`}>
        Joel
      </h1>
      <h1 className={`mt-2 font-bold leading-none text-[#22c55e] ${isMobile ? "text-5xl" : "text-7xl"}`}>
        Clenn Saputra
      </h1>
      <p className="mt-6 text-lg text-white/60">
        CS Student · AI Enthusiast
      </p>
      <p className="mt-4 text-white/70">
        Studying Computer Science at McGill University, hungry to learn something new every day. I build things
        because I like figuring out how they work, then making them work
        better.
      </p>
    </div>
  );

  if (isMobile) {
    return (
      <div className="matte-metal-card fixed inset-0 -z-10 flex flex-col items-center justify-center gap-10 overflow-y-auto px-6 pb-16 pt-56">
        {text}
        <SkillCube />
      </div>
    );
  }

  return (
    <div className="matte-metal-card fixed inset-0 -z-10">
      <div className="absolute left-16 top-1/2 mt-8 max-w-xl -translate-y-1/2">
        {text}
      </div>

      <div className="absolute left-140 mb-5 w-250 h-220 flex items-center justify-center">
        <SkillCube />
      </div>
    </div>
  );
}
