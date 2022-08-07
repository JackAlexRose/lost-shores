import { TypeNames } from "./TileTypes";

export type GameState = {
  tiles: TypeNames[][] | [];
  playerLocation: {
    x: number;
    y: number;
  };
};