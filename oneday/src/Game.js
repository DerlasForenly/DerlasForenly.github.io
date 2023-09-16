import Player from "./Player.js";
import InputHandler from "../src/InputHandler.js";
import World from "./World.js";
import Rock from "./Rock.js";

export default class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.world = new World(this);
        this.player = new Player(this);
        this.inputHandler = new InputHandler();

        this.entities = [new Rock(this)];
    }

    draw(context) {
        this.world.draw(context);
        this.entities.forEach(entity => {
            entity.draw(context);
        });
        this.player.draw(context);
    }

    update(deltaTime) {
        this.player.update(this.inputHandler.keys, deltaTime);
    }
}