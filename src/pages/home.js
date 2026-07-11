import { useState } from "react";
import TopHeaderBar from "@/components/TopHeaderBar";
import TileRow from "@/components/TileRow";


import * as AboutMe from "@/components/AboutMe"
import * as Education from "@/components/Education"
import * as DummyProject from "@/components/DummyProject"
import createSkillTile from "@/components/createSkillTile"

const skillDefs = [
  { name: "Java" },
  {
    name: "Python",
    frameworks: ["NumPy", "Pandas", "FastAPI"],
    thumbnailColor: "#3776AB",
    thumbnailImage: "/images/Python-Thumbnail.png",
    backgroundImage: "/images/Python-Emblem.png"
  },
  { name: "JavaScript" },
  { name: "HTML5" },
  { name: "CSS" },
  { name: "C" },
  { name: "SQL" },
];
const skillTiles = skillDefs.map((skill) =>
  createSkillTile(
    skill.name,
    skill.frameworks,
    skill.thumbnailColor,
    skill.thumbnailImage,
    skill.backgroundImage
  )
);

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [tileRowHidden, setTileRowHidden] = useState(false);


  const tabsData = {
    about: [ AboutMe, Education],
    projects: [DummyProject],
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
      <focusedTile.Background
        onHideTileRow={() => setTileRowHidden(true)}
        onShowTileRow={() => setTileRowHidden(false)}
      />

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
