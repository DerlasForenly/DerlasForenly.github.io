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

        this.x = this.calculateSpawnPointX();
        this.y = this.calculateSpawnPointY();

        this.animation = new MobAnimation(this);
        this.animation.maxFrame = 7;

        this.image = document.getElementById('slime');
    }

    update(deltaTime) {
        this.animation.animate(deltaTime);
    }
}