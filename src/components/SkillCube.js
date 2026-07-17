import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import useIsMobile from "@/lib/useIsMobile";

const SIZE = 300;
const SIZE_MOBILE = 220;

function CopyText({ value }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button
      onClick={handleCopy}
      className="text-lg font-semibold text-white underline decoration-white/50 underline-offset-4 transition-colors hover:text-white/80 hover:cursor-pointer"
    >
      {copied ? "Copied!" : value}
    </button>
  );
}

function getFaces(half) {
  return [
    {
      transform: `rotateY(0deg) translateZ(${half}px)`,
      content: (
        <div className="flex flex-col items-center gap-3 text-green-400">
          <Phone className="h-10 w-10" />
          <CopyText value="+1 (514) 295-4976" />
        </div>
      ),
    },
    {
      transform: `rotateY(180deg) translateZ(${half}px)`,
      content: (
        <div className="flex flex-col items-center gap-3 text-indigo-500">
          <Mail className="h-10 w-10" />
          <CopyText value="joel.clenn03@gmail.com" />
        </div>
      ),
    },
    {
      transform: `rotateY(90deg) translateZ(${half}px)`,
      content: (
        <div className="flex flex-col items-center gap-1 px-6 text-center text-white">
          <p className="text-lg font-bold">Joel Clenn Saputra</p>
          <p className="text-white/70">Born February 6, 2006</p>
          <p className="text-white/70">Born in Jakarta, Indonesia</p>
          <p className="text-white/70">Currently residing in Montreal, QC</p>
        </div>
      ),
    },
    {
      transform: `rotateY(-90deg) translateZ(${half}px)`,
      content: (
        <p className="px-6 text-center text-lg font-semibold text-white">
          Please contact me for my resume
        </p>
      ),
    },
  ];
}

export default function SkillCube() {
  const isMobile = useIsMobile();
  const size = isMobile ? SIZE_MOBILE : SIZE;
  const faces = getFaces(size / 2);

  return (
    <div
      className="flex items-center justify-center"
      style={{ width: size, height: size, perspective: 1000 }}
    >
      <div
        className="animate-slow-spin-y relative"
        style={{
          width: size,
          height: size,
          transformStyle: "preserve-3d",
        }}
      >
        {faces.map((face, index) => (
          <div
            key={index}
            className="absolute flex items-center justify-center rounded-md border-4 border-white/20 bg-black/10 backdrop-blur-[1px]"
            style={{
              width: size,
              height: size,
              transform: face.transform,
            }}
          >
            {face.content}
          </div>
        ))}
      </div>
    </div>
  );
}
