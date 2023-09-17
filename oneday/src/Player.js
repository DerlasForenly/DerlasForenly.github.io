import { DIRECTIONS } from "./consts.js";
import Entity from "./Entity.js";
import { PlayerAnimation } from "./Animation.js";
import Tile from "./Tile.js";

export default class Player extends Entity {
    constructor(game) {
        super(game);

        this.direction = DIRECTIONS.S;

        this.width = 48;
        this.height = 48;

        this.spawnWorldX = 31;
        this.spawnWorldY = 31;

        this.maxXSpeed = 1;
        this.maxYSpeed = 1;

        this.x = 6 * this.width;
        this.y = 6 * this.height;

        this.movePlayerX = false;
        this.movePlayerY = false;

        this.image = document.getElementById('player');
        this.animation = new PlayerAnimation(this);
    }

    update(input, deltaTime) {
        this.handleInput(input);
        this.moveCamera();

        this.currentState.handleInput(input);
        this.animation.animate(deltaTime);
    }

    handleOpositInputs(input) {
        if (input.includes('ArrowRight') && input.includes('ArrowLeft')) {
            this.xSpeed = 0;
        }
        if (input.includes('ArrowDown') && input.includes('ArrowUp')) {
            this.ySpeed = 0;
        }
    }

    handleInputRelease(input) {
        if (!input.includes('ArrowDown') && !input.includes('ArrowUp')) {
            this.ySpeed = 0;
        }
        if (!input.includes('ArrowRight') && !input.includes('ArrowLeft')) {
            this.xSpeed = 0;
        }
    }

    handlePlayScreenBorders() {
        if (this.x < 0) {
            this.x = 0;
        }
        if (this.x > this.game.width - this.width) {
            this.x = this.game.width - this.width;
        }

        if (this.y < 0) {
            this.y = 0;
        }
        if (this.y > this.game.height - this.height) {
            this.y = this.game.height - this.height;
        }
    }

    handleInput(input) {
        if (input.includes('ArrowLeft')) {
            this.xSpeed = this.maxXSpeed;
        }
        if (input.includes('ArrowRight')) {
            this.xSpeed = -this.maxXSpeed;
        }
        if (input.includes('ArrowUp')) {
            this.ySpeed = this.maxYSpeed;
        }
        if (input.includes('ArrowDown')) {
            this.ySpeed = -this.maxYSpeed;
        }
        if (input.includes('Enter')) {
            console.log('Enter has been pressed');
        }

        this.handleInputRelease(input);
        this.handleOpositInputs(input);
    }

    moveCamera() {
        this.handlePlayScreenBorders();

        this.game.world.tiles.forEach(row => {
            row.forEach(tile => {
                if (tile.worldX === this.game.world.minWorldX && tile.x >= 0 && this.xSpeed > 0) {
                    this.movePlayerX = true;
                }
                if (tile.worldX === this.game.world.maxWorldX && tile.x <= this.game.width && this.xSpeed < 0) {
                    this.movePlayerX = true;
                }

                if (tile.worldY === this.game.world.minWorldY && tile.y >= 0 && this.ySpeed > 0) {
                    this.movePlayerY = true;
                }
                if (tile.worldY === this.game.world.maxWorldY && tile.y <= this.game.height && this.ySpeed < 0) {
                    this.movePlayerY = true;
                }
            });
        });

        if (this.movePlayerX) {
            this.x += -this.xSpeed;

            if (this.x === 6 * this.width) {
                this.movePlayerX = false;
            }
        } else {
            this.game.world.tiles.forEach(row => {
                row.forEach(tile => {
                    tile.x += this.xSpeed;
                });
            });
        }

        if (this.movePlayerY) {
            this.y += -this.ySpeed;

            if (this.y === 6 * this.height) {
                this.movePlayerY = false;
            }
        } else {
            this.game.world.tiles.forEach(row => {
                row.forEach(tile => {
                    tile.y += this.ySpeed;
                });
            });
        }
    }
}