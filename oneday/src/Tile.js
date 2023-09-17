import { TileAnimation } from "./Animation.js";
import Entity from "./Entity.js";
import { IMPASSABLE_TILES } from "./consts.js";

const TILE_SIZE = 48;

export default class Tile extends Entity {
    /**
     * @param {Game} game 
     * @param {Number} x 
     * @param {Number} y 
     * @param {String} spriteId 
     * @param {Boolean} isimpassable
     */
    constructor(game, x, y, spriteId = 'land') {
        super(game);

        this.worldX = x;
        this.worldY = y;

        this.isimpassable = this.getIsImpassanle(spriteId);

        this.width = TILE_SIZE;
        this.height = TILE_SIZE;

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

    setSprite(spriteId) {
        this.spriteId = spriteId;
        this.image = document.getElementById(spriteId);
    }

    getIsImpassanle(spriteId) {
        if (IMPASSABLE_TILES.includes(spriteId)) {
            return true;
        }

        return false;
    }
}