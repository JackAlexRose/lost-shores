export type TileType = {
  char: string;
  color: string;
  backgroundColor: string;
  isWalkable: boolean;
  isVisible: boolean;
  isItem: boolean;
  isMonster: boolean;
  isPlayerPresent?: boolean;
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
    isPlayerPresent: false,
  },
  grass: {
    char: "\"",
    color: "#1c7333",
    backgroundColor: "#32a852",
    isWalkable: true,
    isVisible: true,
    isItem: false,
    isMonster: false,
    isPlayerPresent: false,
  },
};

export type TypeNames = "water" | "grass";