export type TileType = {
  char: string;
  color: string;
  backgroundColor: string;
  isWalkable: boolean;
  isVisible: boolean;
  isItem: boolean;
  isMonster: boolean;
};

export const TileTypes: { [key: string]: TileType } = {
  water: {
    char: "≈",
    color: "#3235ff",
    backgroundColor: "#a7f1fc",
    isWalkable: true,
    isVisible: true,
    isItem: false,
    isMonster: false,
  },
  grass: {
    char: '"',
    color: "#1c7333",
    backgroundColor: "#32a852",
    isWalkable: true,
    isVisible: true,
    isItem: false,
    isMonster: false,
  },
  stone: {
    char: "*",
    color: "#8c8c8c",
    backgroundColor: "#32a852",
    isWalkable: true,
    isVisible: true,
    isItem: true,
    isMonster: false,
  },
  flower: {
    char: ",",
    color: "red",
    backgroundColor: "#32a852",
    isWalkable: true,
    isVisible: true,
    isItem: false,
    isMonster: false,
  },
  tree: {
    char: "⇑",
    color: "#734927",
    backgroundColor: "#278741",
    isWalkable: false,
    isVisible: true,
    isItem: false,
    isMonster: false,
  },
  sand: {
    char: "~",
    color: "#b5af55",
    backgroundColor: "#f0e984",
    isWalkable: true,
    isVisible: true,
    isItem: false,
    isMonster: false,
  },
  mountain: {
    char: "△",
    color: "#706f6f",
    backgroundColor: "#8c8c8c",
    isWalkable: false,
    isVisible: true,
    isItem: false,
    isMonster: false,
  },
  peak: {
    char: "▲",
    color: "#e6e6e6",
    backgroundColor: "#fcfcfc",
    isWalkable: false,
    isVisible: true,
    isItem: false,
    isMonster: false,
  },
};

export type TypeNames =
  | "water"
  | "grass"
  | "stone"
  | "flower"
  | "tree"
  | "sand"
  | "mountain"
  | "peak";
