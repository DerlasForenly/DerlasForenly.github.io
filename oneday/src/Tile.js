import { TileAnimation } from "./Animation.js";
import Entity from "./Entity.js";

export default class Tile extends Entity {
    constructor(game, x, y) {
        super(game);

        this.worldX = x;
        this.worldY = y;

        this.width = 48;
        this.height = 48;

        this.x = x * this.width;
        this.y = y * this.height;
        
        this.animation = new TileAnimation(this);
    }
}