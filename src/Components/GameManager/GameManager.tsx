import React, { useEffect } from "react";
import { GameState } from "../../types/GameState";
import { TypeNames } from "../../types/TileTypes";
import { GameCanvas } from "../GameCanvas";
import Button from "@mui/material/Button";
import perlin from "perlin-noise";
import { ControlSlider } from "../ControlSlider";
import styles from "./GameManager.module.css";

type noiseOptions = {
  octaveCount: number;
  amplitude: number;
  persistence: number;
};

const defaultNoiseOptions: noiseOptions = {
  octaveCount: 4,
  amplitude: 0.1,
  persistence: 0.2,
};

export const GameManager: React.FC = () => {
  const firstRenderRef = React.useRef(true);
  const [gameState, setGameState] = React.useState<GameState>({
    tiles: [[]],
    playerLocation: {
      x: 0,
      y: 0,
    },
  });
  const [noiseOptions, setNoiseOptions] = React.useState<noiseOptions>(defaultNoiseOptions);

  useEffect(() => {
    if (!firstRenderRef.current) {
      return;
    }

    generateWorld();

    firstRenderRef.current = false;
  }, []);

  const generateWorld = () => {
    const noiseMap = perlin.generatePerlinNoise(100, 100, noiseOptions);

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
  };

  const resetToDefault = () => {
    setNoiseOptions({
      octaveCount: 4,
      amplitude: 0.1,
      persistence: 0.2,
    });
    generateWorld();
  }

  const handleAmplitudeChange = (value: number | number[]) => {
    if (typeof value === "number") {
      setNoiseOptions({
        ...noiseOptions,
        amplitude: value / 100,
      });
    }
  };

  const handlePersistanceChange = (value: number | number[]) => {
    if (typeof value === "number") {
      setNoiseOptions({
        ...noiseOptions,
        persistence: value / 100,
      });
    }
  };

  const handleOctavesChange = (value: number | number[]) => {
    if (typeof value === "number") {
      setNoiseOptions({
        ...noiseOptions,
        octaveCount: value,
      });
    }
  };

  return (
    <>
      <GameCanvas gameState={gameState} />
      <div className={styles.controls}>
        <ControlSlider
          label="Amplitude"
          value={0.1}
          scaleFactor={100}
          discrete={false}
          onChange={handleAmplitudeChange}
        />
        <ControlSlider
          label="Persistence"
          value={0.2}
          scaleFactor={100}
          discrete={false}
          onChange={handlePersistanceChange}
        />
        <ControlSlider
          label="Octaves"
          value={4}
          scaleFactor={10}
          discrete={true}
          onChange={handleOctavesChange}
        />
        <Button className={styles.button} variant="contained" color="secondary" onClick={generateWorld}>
          Generate
        </Button>
      </div>
    </>
  );
};
