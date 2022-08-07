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
        if (Math.random() > 0.5) {
          line.push("water");
        } else {
          if(Math.random() > 0.2) {
            if(Math.random() > 0.5) {
            line.push("grass");
            }
            else {
              line.push("sand");
            }
          } else {
            if(Math.random() > 0.5) {
            line.push("stone");
            } else {
              if(Math.random() > 0.5) {
                line.push("tree");
              } else {
                if(Math.random() > 0.5) {
                  line.push("mountain");
                } else {
                  if(Math.random() > 0.5) {
                    line.push("peak");
                  } else {
              line.push("flower");
                  }
                }
              }
            }
          }
        }
      }
      console.log(line.length);
      grid.push(line);
    }
    console.log(grid.length);

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
