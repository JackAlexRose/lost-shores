import React, { useEffect } from "react";
import Sketch from "react-p5";
import p5Types from "p5";
import styles from "./GameCanvas.module.css";
import { GameState } from "../../types/GameState";
import { TileTypes } from "../../types/TileTypes";

export type GameCanvasProps = {
  gameState: GameState;
};

export const GameCanvas: React.FC<GameCanvasProps> = (props) => {
  const { gameState } = props;
  const [drawThrottle, setDrawThrottle] = React.useState(false);

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(
      canvasParentRef.clientWidth,
      canvasParentRef.clientHeight
    ).parent(canvasParentRef);
    p5.noLoop();
  };

  const draw = (p5: p5Types) => {
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

        p5.text(
          TileTypes[tile].char,
          (j * p5.width) / 100 + 5,
          (i * p5.height) / 100 + 5
        );
      });
    });
  };

  const mousePressed = (p5: p5Types) => {
    if(drawThrottle){
      return;
    }
    p5.redraw();
    setDrawThrottle(true);
    setTimeout(() => {
      setDrawThrottle(false);
    }, 100);
  };

  return (
    <div className={styles.canvasWrapper}>
      <Sketch
        className={styles.gameCanvas}
        setup={setup}
        draw={draw}
        mouseClicked={mousePressed}
      />
    </div>
  );
};
