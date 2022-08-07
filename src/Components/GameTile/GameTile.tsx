import React from "react";
import styles from "./GameTile.module.css";

export type GameTileProps = {
  char: string;
}

export const GameTile: React.FC<GameTileProps> = ({char}) => {
  return (
    <div className={styles.gameTile}>{char}</div>
  );
}