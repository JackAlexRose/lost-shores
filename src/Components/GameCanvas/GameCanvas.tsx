import React, { useCallback, useEffect } from "react";
import Sketch from "react-p5";
import p5Types from "p5";
import { GameState } from "../../types/GameState";
import { TileTypes } from "../../types/TileTypes";
import styles from "./GameCanvas.module.css";

export type GameCanvasProps = {
  gameState: GameState;
};

export const GameCanvas: React.FC<GameCanvasProps> = (props) => {
  const { gameState } = props;
  const p5Ref = React.useRef<p5Types>();

  useEffect(() => {
    if (p5Ref.current) {
      p5Ref.current.redraw();
    }
  }, [gameState]);

  const setup = useCallback((p5: p5Types, canvasParentRef: Element) => {
    p5.noLoop();
    if (!canvasParentRef) {
      return;
    }

    p5Ref.current = p5;

    p5.createCanvas(1000, 1000).parent(canvasParentRef);
  }, []);

  const draw = useCallback(
    (p5: p5Types) => {
      p5.background(255);
      p5.fill(0);
      p5.noStroke();
      p5.textSize(20);
      p5.textAlign(p5.CENTER, p5.CENTER);
      gameState.tiles?.forEach((line: string[], i: number) => {
        line.forEach((tile: string, j: number) => {
          p5.fill(p5.color(TileTypes[tile].backgroundColor));
          p5.rect(j * 10, i * 10, 10, 10);
          p5.fill(p5.color(TileTypes[tile].color));

          let offsetX = 5;
          let offsetY = 5;

          if (tile === "grass") {
            offsetY += Math.random() * 5;
            offsetX += Math.random() * 5 - 2.5;
          }

          if (tile === "stone") {
            offsetY += Math.random() * 5;
            offsetX += Math.random() * 5 - 2.5;
          }

          if (tile === "flower") {
            offsetY -= Math.random() * 5;
            offsetX -= Math.random() * 5 - 2.5;
          }

          if (tile === "tree") {
            offsetY -= Math.random() * 7 + 3;
            offsetX += Math.random() * 7 - 3.5;
            p5.strokeWeight(3);
            p5.stroke(p5.color(TileTypes[tile].color));
          }

          if (tile === "mountain") {
            offsetX += Math.random() * 7 - 3.5;
            p5.textSize(10);
          }

          if (tile === "peak") {
            p5.textSize(10);
          }

          p5.text(
            TileTypes[tile].char,
            (j * p5.width) / 100 + offsetX,
            (i * p5.height) / 100 + offsetY
          );

          p5.strokeWeight(1);
          p5.noStroke();
          p5.textSize(20);
        });
      });
    },
    [gameState]
  );

  return (
    <div className={styles.canvasWrapper}>
      <Sketch
        key={gameState.tiles?.length}
        className={styles.gameCanvas}
        setup={setup}
        draw={draw}
      />
    </div>
  );
};
