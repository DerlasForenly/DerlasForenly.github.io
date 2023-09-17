import Player from "./Player.js";
import InputHandler from "../src/InputHandler.js";
import World from "./World.js";
import Rock from "./Rock.js";
import MapEditor from "./MapEditor.js";
import Slime from "./Slime.js";

export default class Game {
    /**
     * 
     * @param {Number} width 
     * @param {Number} height 
     */
    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.world = new World(this);
        this.player = new Player(this);
        this.inputHandler = new InputHandler(this);
        this.mapEditor = new MapEditor(this.world);

        this.entities = [new Rock(this), new Slime(this)];
    }

    /**
     * Draw all game elements
     * 
     * @param {CanvasRenderingContext2D} context 
     */
    draw(context) {
        this.world.draw(context);
        this.entities.forEach(entity => {
            entity.draw(context);
        });
        this.player.draw(context);
    }

    /**
     * Update game elements before render
     * 
     * @param {Number} deltaTime 
     */
    update(deltaTime) {
        this.player.update(this.inputHandler.keys, deltaTime);
        this.entities.forEach(entity => {
            entity.update(deltaTime);
        });
    }
}