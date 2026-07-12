import React from 'react'
import {useEffect, useState, useRef} from 'react'
import {motion} from 'framer-motion'
import playSound from '@/lib/playSound';


const TILE_WIDTH = 90;
const TILE_HEIGHT = 90;


const TileRow = ({tiles, focusedIndex, setFocusedIndex}) => {
    const focusedIndexRef = useRef()
    focusedIndexRef.current = focusedIndex;

    useEffect(() => {
    function handleKey(e) {
      if (e.key === "ArrowRight") {
        playSound("/sounds/focus-move.mp3")
        setFocusedIndex(Math.min(focusedIndexRef.current + 1, tiles.length - 1));
      } else if (e.key === "ArrowLeft") {
        playSound("/sounds/focus-move.mp3")
        setFocusedIndex(Math.max(focusedIndexRef.current - 1, 0));
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [tiles.length, setFocusedIndex]);



  return (
    <div className="flex gap-2">
      {tiles.map((tile, index) => {
        const isFocused = (index === focusedIndex);
        const size = isFocused ? TILE_WIDTH * 1.4 : TILE_WIDTH;
        return (
          <motion.button
            key={tile.id}
            onFocus={() => setFocusedIndex(index)}
            onClick={() => playSound("/sounds/enter.mp3")}
            initial={{ x: 800, opacity: 0, scale: 0.3, width: TILE_WIDTH, height: TILE_WIDTH }}
            animate={{ x: 0, width: size, height: size, opacity: isFocused ? 1 : 0.7, scale: 1 }}
            transition={{
              x: { type: "spring", stiffness: 60, damping: 20 },
              opacity: { duration: 1 },
              scale: { type: "spring", stiffness: 70, damping: 18 },
              width: { type: "spring", stiffness: 260, damping: 24 },
              height: { type: "spring", stiffness: 260, damping: 24 },
            }}
            className="flex-none overflow-hidden rounded-md focus:outline-none"
            style={{
              border: isFocused ? "2px solid white" : "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <tile.Thumbnail />
          </motion.button>
        );
      })}
    </div>
  )
}

export default TileRow