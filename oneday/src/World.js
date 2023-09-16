import Tile from "./Tile.js";

export default class World {
    constructor(game) {
        this.game = game;

        this.tiles = [];

        this.worldXSize = 60;
        this.worldYSize = 60;

        this.minWorldX = this.worldXSize / -2;
        this.minWorldY = this.worldYSize / -2;
        this.maxWorldX = this.worldXSize / 2;
        this.maxWorldY = this.worldYSize / 2;

        for (let i = 0; i <= this.worldXSize; i++) {
            this.tiles.push([]);

            for (let j = 0; j <= this.worldYSize; j++) {
                this.tiles[i].push(new Tile(this.game, i - this.worldXSize / 2, j - this.worldYSize / 2));
            }
        }
    }

    draw(context) {
        for (let i = 0; i < this.worldXSize; i++) {
            for (let j = 0; j < this.worldXSize; j++) {
                this.tiles[i][j].draw(context);
            }
        }
    }
}