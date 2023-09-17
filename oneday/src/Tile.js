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
        this.image = document.getElementById('land');
    }

    draw(context) {
        this.animation.draw(context);
        context.fillText(`${this.worldX};${this.worldY}`, this.x + 2, this.y + 11);
    }

    getCenterX() {
        return this.x + (this.width / 2);
    }

    getCenterY() {
        return this.y + (this.height / 2);
    }
}