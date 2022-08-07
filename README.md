# Lost Shores

This is a 2D world generator inspired by Dwarf Fortress. It uses a [perlin noise](https://en.wikipedia.org/wiki/Perlin_noise) algorithm to generate a world. The world is generated in a grid of 100x100 tiles.

The tiles are assigned a type according to the values of the heightmap and then these heights are sampled and compared with a ruleset that looks like this:

* If the height is less than 0.3, the tile is water.
* If the height is between 0.3 and 0.4, the tile is sand.
* If the height is between 0.4 and 0.5, the tile is grass (grass can have grass, flowers or rocks as a tile).
* If the height is between 0.5 and 0.6, the tile is either a tree or grass.
* If the height is between 0.6 and 0.8, the tile is a mountain.
* If the height is between 0.8 and 1, the tile is a peak.

<mark>Try increasing the number of octaves and amplitude to get a more interesting, larger world.</mark> Increasing the persistence leads to more fine grained noise, which means more small details.

All of the art is using ascii characters, with a monospace font. The canvas is created using p5.js and the code is wrtten in TypeScript. State management is done through React using the react-p5 library. For an explanation of lacunarity and persistence in the Perlin noise algorithm used please watch an inspiration of mine [Sebastian Lague](https://youtu.be/wbpMiKiSKm8).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode. I have not written tests yet for this project.\

### `npm run build`

Builds the app for production to the `build` folder.\
