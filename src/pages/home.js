import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TopHeaderBar from "@/components/TopHeaderBar";
import TileRow from "@/components/TileRow";


import * as AboutMe from "@/components/AboutMe"
import * as Education from "@/components/Education"
import createSkillTile from "@/components/createSkillTile"
import createProjectTile from "@/components/createProjectTile"

const projectDefs = [

  {
    name: "Bloomberg-lite",
    description: "A terminal for looking at the market in a better way, with important fundamentals and technical analysis.\n\nA platform for quantitative backtesting",
    techStack: ["ReactJS", "NextJS", "TailwindCSS", "Python", "FastAPI", "yfinance", "Finnhub API", "NumPy", "Pandas"],
    thumbnailColor: "#000000",
    thumbnailColors: ["rgb(7, 173, 46)" ,"#000000", "rgb(255, 32, 32)"],
    backgroundImage: "/images/Bloomberg-lite.png",
    links: {github: "https://github.com/JoelSaputra/bloomberg-lite",
          },
    textPosition: { bottom: 170, right: 40 },
  },

  {
    name: "VoiceCal",
    description: "A speech to text - calendar generator",
    techStack: ["Javascript", "Python", "CSS", "Google API", "SQLAlchemy", "Anthropic SDK"],
    thumbnailColor: "#6b7280",
    thumbnailColors: ["#ffffff", "#ffd700"],
    backgroundImage: "/images/VoiceCal.png",
    links: {github: "https://github.com/JoelSaputra/VoiceCal",
            demo: "https://voicecal.onrender.com/"
          },
    textPosition: { bottom: 260, right: 40 },
  },
  {
    name: "RecapAI",
    description: "A summarizer for daily finance news using python -- This project is imported to the bloomberg-lite project at the News tab ",
    techStack: ["Python", "SQLite", "FastAPI", "APScheduler", "Finnhub API", "Google Gemini API "],
    thumbnailColor: "#374151",
    thumbnailColors: ["#3b82f6", "#000000", "#ffffff"],
    backgroundImage: "/images/RecapAI.png",
    links: {github: "https://github.com/JoelSaputra/RecapAI",
          },
    textPosition: { bottom: 260, right: 40 },
  },

];
const projectTiles = projectDefs.map((project) =>
  createProjectTile(
    project.name,
    project.description,
    project.techStack,
    project.thumbnailColor,
    project.thumbnailImage,
    project.backgroundImage,
    project.links,
    project.textPosition,
    project.thumbnailColors
  )
);

const skillDefs = [
  {
    name: "Python",
    frameworks: [
      { name: "NumPy", image: "/images/NumPY.png" },
      { name: "Pandas", image: "/images/Pandas.png" },
      { name: "FastAPI", image: "/images/FastAPI.png" },
      { name: "SQLite3", image: "/images/SQLite3.png"}
    ],
    thumbnailColor: "#3776AB",
    thumbnailImage: "/images/Python-Thumbnail.png",
    backgroundImage: "/images/Python-Emblem.png",
    logoStyle: { width: 560, height: 320, right: 120, bottom: 160 },
    thumbnailLogoStyle: { width: "140%", height: "160%", top: 0, left: 0 },
    usedInSchoolwork: true,
    usedInProjects: true,
  },

  { name: "Java",
    thumbnailColor: "#e93e3b",
    thumbnailImage: "/images/JavaThumbnailLogo.png",
    backgroundImage:"/images/JavaLogo-Background.png",
    logoStyle: { width: 500, height: 600, right: 200, bottom: 80 },
    thumbnailLogoStyle: { width: "140%", height: "160%", top: 0, left: 0 },
    usedInSchoolwork: true,
   },

  { name: "JavaScript",
    frameworks: [
      { name: "ReactJS", image: "/images/ReactJS.png" },
      { name: "NextJS", image: "/images/Next.js-thumbnail.png" },
      { name: "Framer Motion", image: "/images/FramerMotion.png"}
    ],
    thumbnailColor: "#ffef42",
    thumbnailImage: "/images/JavaScript-Symbol-Thumbnail.png",
    backgroundImage:"/images/JavascriptLogo-Background2.png",
    logoStyle: { width: 500, height: 500, right: 180, bottom: 80 },
    thumbnailLogoStyle: { width: "200%", height: "300%", top: 0, left: 0 },
    usedInProjects: true,
   },

  { name: "HTML5",
    frameworks: [
      { name: "ReactJS", image: "/images/ReactJS.png" },
    ],
    thumbnailColor: "#ff6027",
    thumbnailImage: "/images/HTML5-Thumbnail.png",
    backgroundImage:"/images/HTML5-Background.png",
    logoStyle: { width: 500, height: 400, right: 180, bottom: 120 },
    thumbnailLogoStyle: { width: "80%", height: "80%", top: 0, left: 0 },
    usedInProjects: true,
  },
  { name: "CSS",
    frameworks: [
      { name: "TailwindCSS", image: "/images/tailwind-thumbnail.png"},
    ],
    thumbnailColor: "#348cf1",
    thumbnailImage: "/images/CSS-logo-Thumbnail.png",
    backgroundImage:"/images/CSS-logo-Background.png",
    logoStyle: { width: 500, height: 350, right: 180, bottom: 140 },
    thumbnailLogoStyle: {width: "80%", height: "80%", top: 0, left: 0},
    usedInProjects: true,
   },
  { name: "C",
    thumbnailColor: " #342fbc",
    thumbnailImage: "/images/Cprogramming-Thumbnail.png",
    backgroundImage:"/images/Cprogramming-Thumbnail.png",
    logoStyle: { width: 500, height: 500, right: 180, bottom: 80 },
    thumbnailLogoStyle: { width: "80%", height: "80%", top: 0, left: 0},
    usedInSchoolwork: true,
   },
  { name: "SQL" },
];
const skillTiles = skillDefs.map((skill) =>
  createSkillTile(
    skill.name,
    skill.frameworks,
    skill.thumbnailColor,
    skill.thumbnailImage,
    skill.backgroundImage,
    skill.logoStyle,
    skill.thumbnailLogoStyle,
    skill.usedInSchoolwork,
    skill.usedInProjects
  )
);

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [tileRowHidden, setTileRowHidden] = useState(false);


  const tabsData = {
    about: [ AboutMe, Education],
    projects: projectTiles,
    skills: skillTiles,
  }

  const tiles = tabsData[activeTab];
  const focusedTile = tiles[focusedIndex];


  function handleTabChange(tab) {
    setActiveTab(tab);
    setFocusedIndex(0);
    setTileRowHidden(false);
  }

  function handleFocusChange(index) {
    setFocusedIndex(index);
    setTileRowHidden(false);
  }


  return (
    <div className="relative z-0 min-h-screen w-full text-white">
      <AnimatePresence mode="sync">
        <motion.div
          key={focusedTile.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <focusedTile.Background
            onHideTileRow={() => setTileRowHidden(true)}
            onShowTileRow={() => setTileRowHidden(false)}
          />
        </motion.div>
      </AnimatePresence>

      <TopHeaderBar activeTab={activeTab} onTabChange={handleTabChange} />

      <div
        className={`absolute left-10 top-28 transition-opacity duration-500 ${
          tileRowHidden ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
          <TileRow tiles={tiles} focusedIndex={focusedIndex} setFocusedIndex={handleFocusChange}/>
      </div>
    </div>

  );
}
