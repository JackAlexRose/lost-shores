import React, { useEffect } from "react";
import { GameState } from "../../types/GameState";
import { TypeNames } from "../../types/TileTypes";
import { GameCanvas } from "../GameCanvas";

export const GameManager: React.FC = () => {
  const firstRenderRef = React.useRef(true);
  const [gameState, setGameState] = React.useState<GameState>({
    tiles: [[]],
    playerLocation: {
      x: 0,
      y: 0,
    },
  });

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    let grid: TypeNames[][] = [];
    for (let i = 0; i < 100; i++) {
      let line: TypeNames[] = [];
      for (let j = 0; j < 100; j++) {
        if (Math.random() > 0.2) {
          line.push("water");
        } else {
          line.push("grass");
        }
      }
      grid.push(line);
    }

    setGameState({
      tiles: grid,
      playerLocation: {
        x: 0,
        y: 0,
      },
    });
  }, []);

  return <GameCanvas gameState={gameState} />;
};
