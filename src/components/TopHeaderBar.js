import { useEffect, useState } from "react";
import playSound from "@/lib/playSound";

const tabs = [
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

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

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" width={30} height={30} fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.79-.25.79-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.9-.38 2.88-.39.98.01 1.96.13 2.88.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.26 5.7.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.21.66.79.55C20.71 21.39 24 17.09 24 12c0-6.27-5.23-11.5-12-11.5Z" />
    </svg>
  );
}

function InstragramIcon() {
  return (
    <img alt="instagram-logo" src="/images/instagram-logo.png" className="h-[30px] w-[30px] rounded-full object-cover"/>
  );
}

function LinkedInIcon() {
  return (
    <img alt="linkedin-logo" src="/images/linkedin-logo.png" className="h-[30px] w-[30px] rounded-full object-cover"/>
  );
}


function PlaceholderIcon({ label }) {
  return (
    <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-white/60 text-xs font-semibold text-white">
      {label}
    </span>
  );
}

const socialLinks = [
  { id: "github", href: "https://github.com/JoelSaputra", icon: <GithubIcon /> },
  { id: "instagram", href: "https://www.instagram.com/joel_clenn/", icon: <InstragramIcon/> },
  { id: "linkedin", href: "https://www.linkedin.com/in/joel-saputra/", icon: <LinkedInIcon/> },
];

export default function TopHeaderBar({ activeTab, onTabChange }) {
  const time = useClock();

  return (
    <div className="absolute left-0 top-0 flex w-full items-center justify-between bg-transparent px-10 py-6">
      <div className="absolute right-8 top-6 text-xl tracking-wide text-white/80">
        {time}
      </div>

      <div className="flex items-center gap-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => { playSound("/sounds/enter.mp3"); onTabChange(tab.id); }}
            className={
              tab.id === activeTab
                ? "text-lg font-semibold text-white"
                : "text-lg font-normal text-white/40 transition-colors hover:text-white/70"
            }
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mr-28 flex items-center gap-6">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-transform hover:scale-110"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
