import { useState } from "react";
import TopHeaderBar from "@/components/TopHeaderBar";
import TileRow from "@/components/TileRow";

import * as Education from "@/components/Education"
import * as DummyProject from "@/components/DummyProject"
import * as DummySkill from "@/components/DummySkill"

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");
  const [focusedIndex, setFocusedIndex] = useState(0);

  
  const tabsData = {
    about: [ Education],
    projects: [DummyProject],
    skills: [DummySkill],
  }

  const tiles = tabsData[activeTab];
  const focusedTile = tiles[focusedIndex];
    

  function handleTabChange(tab) {
    setActiveTab(tab);
    setFocusedIndex(0);
  }
  

  return (
    <div className="relative min-h-screen w-full  text-white">
      <focusedTile.Background />

      <TopHeaderBar activeTab={activeTab} onTabChange={handleTabChange} />

      <div className="absolute left-10 top-28">
          <TileRow tiles={tiles} focusedIndex={focusedIndex} setFocusedIndex={setFocusedIndex}/>
      </div>
    </div>
    
  );
}
