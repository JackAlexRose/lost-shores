import { TypeNames } from "./TileTypes";

export type GameState = {
  tiles: TypeNames[][];
  playerLocation: [number, number];
};