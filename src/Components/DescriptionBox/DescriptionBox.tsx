import React from "react";
import { Typography } from "@mui/material";
import styles from "./DescriptionBox.module.css";

export const DescriptionBox: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.descriptionBox}>
        <Typography variant="body1" align="left">
          This is a 2D world generator inspired by Dwarf Fortress. It uses a{" "}
          <a href="https://en.wikipedia.org/wiki/Perlin_noise">perlin noise</a>{" "}
          algorithm to generate a world. The world is generated in a grid of
          100x100 tiles. <br />
          <br /> The tiles are assigned a type according to the values of the
          heightmap and then these heights are sampled and compared with a
          ruleset that looks like this:
          <ul>
            <li>If the height is less than 0.3, the tile is water.</li>
            <li>If the height is between 0.3 and 0.4, the tile is sand.</li>
            <li>
              If the height is between 0.4 and 0.5, the tile is grass (grass can
              have grass, flowers or rocks as a tile).
            </li>
            <li>
              If the height is between 0.5 and 0.6, the tile is either a tree or
              grass.
            </li>
            <li>
              If the height is between 0.6 and 0.8, the tile is a mountain.
            </li>
            <li>If the height is between 0.8 and 1, the tile is a peak.</li>
          </ul>
          All of the art is using ascii characters, with a monospace font. The
          canvas is created using p5.js and the code is wrtten in TypeScript.
          State management is done through React using the react-p5 library. For
          an explanation of lacunarity and persistence in the Perlin noise
          algorithm used please watch an inspiration of mine{" "}
          <a href="https://youtu.be/wbpMiKiSKm8">Sebastian Lague</a>.
        </Typography>
      </div>
    </div>
  );
};
