import { TileAnimation } from "./Animation.js";
import Entity from "./Entity.js";

export default class Tile extends Entity {
    /**
     * @param {Game} game 
     * @param {Number} x 
     * @param {Number} y 
     * @param {String} spriteId 
     * @param {Boolean} isimpassable
     */
    constructor(game, x, y, spriteId = 'land', isimpassable = false) {
        super(game);

        this.worldX = x;
        this.worldY = y;

        this.isimpassable = isimpassable;

        this.width = 48;
        this.height = 48;

        this.x = x * this.width;
        this.y = y * this.height;

        this.spriteId = spriteId;
        
        this.animation = new TileAnimation(this);
        this.image = document.getElementById(spriteId);
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

    setSprite(spriteId) {
        this.spriteId = spriteId;
        this.image = document.getElementById(spriteId);
    }
}