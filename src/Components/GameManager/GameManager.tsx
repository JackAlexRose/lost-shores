import React from "react";
import { GameState } from "../../types/GameState";
import { GameCanvas } from "../GameCanvas";

export const GameManager: React.FC = () => {
  const line1 = Array(100).fill("water");
  const gameGrid = Array(100).fill(line1);
  console.log(gameGrid);

  const gameState: GameState = {
    tiles: gameGrid,
    playerLocation: [0, 0]
  };
  
  return <GameCanvas gameState={gameState}/>;
}