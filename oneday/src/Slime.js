import { MobAnimation } from "./Animation.js";
import Entity from "./Entity.js";
import Tile from "./Tile.js";

export default class Slime extends Entity {
    constructor(game) {
        super(game);

        this.width = 36;
        this.height = 22;

        this.spawnWorldX = 2;
        this.spawnWorldY = 2;

        this.x = this.spawnWorldX * this.calculateSpawnPointX();
        this.y = this.spawnWorldY * this.calculateSpawnPointY();

        this.animation = new MobAnimation(this);
        this.animation.maxFrame = 7;

        this.image = document.getElementById('slime');
    }

    update(deltaTime) {
        this.animation.animate(deltaTime);
    }

    idleMoving() {

    }

    calculateSpawnPointX() {
        const tile = this.game.world.tiles[this.spawnWorldX][this.spawnWorldY];

        const centerX = tile.getCenterX();

        const spawnX = centerX - (this.width / 2);

        return spawnX;
    }

    calculateSpawnPointY() {
        const tile = this.game.world.tiles[this.spawnWorldX][this.spawnWorldY];

        const centerY = tile.getCenterY();

        const spawnY = centerY - (this.height / 2);

        return spawnY;
    }
}