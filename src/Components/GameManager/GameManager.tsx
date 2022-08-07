import React, { useEffect } from "react";
import { GameState } from "../../types/GameState";
import { TypeNames } from "../../types/TileTypes";
import { GameCanvas } from "../GameCanvas";
import perlin from "perlin-noise";

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

    const noiseMap = perlin.generatePerlinNoise(100, 100);

    let grid: TypeNames[][] = [];
    for (let y = 0; y < 100; y++) {
      let line: TypeNames[] = [];
      for (let x = 0; x < 100; x++) {
        const height = noiseMap[x + y * 100];
        if (height > 0.3) {
          if (height > 0.6) {
            if (height > 0.8) {
              line.push("peak");
            } else {
              line.push("mountain");
            }
          } else {
            if (height > 0.5) {
              if (Math.random() > 0.9) {
                line.push("tree");
              } else {
                line.push("grass");
              }
            } else {
              if (height < 0.4) {
                line.push("sand");
              } else {
                const grassOptions: TypeNames[] = ["grass", "stone", "flower"];
                line.push(
                  grassOptions[Math.floor(Math.random() * grassOptions.length)]
                );
              }
            }
          }
        } else {
          line.push("water");
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
    console.log("Generated new map");
  }, []);

  return <GameCanvas gameState={gameState} />;
};
