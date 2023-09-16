import { DIRECTIONS } from "./consts.js";
import { Standing } from "./playerStates.js";

export class Animation {
    constructor(entity) {
        this.entity = entity;

        this.fps = 9;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;

        this.maxFrame = 3;
        this.reverceFrame = false;
        this.reverceAnimation = true;

        this.frameX = 0;
        this.frameY = 0;
    }

    animate(deltaTime) {
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;

            if (this.reverceAnimation) {
                if (this.reverceFrame) {
                    this.frameX--;
        
                    if (this.frameX < 0) {
                        this.frameX = 0;
                        this.reverceFrame = false;
                    }
                } else {
                    this.frameX++;
                    if (this.frameX === this.maxFrame) {
                        this.frameX = this.maxFrame - 1;
                        this.reverceFrame = true;
                    }
                }
            } else {
                this.frameX++;

                if (this.frameX === this.maxFrame) {
                    this.frameX = 0;
                }
            }

        } else {
            this.frameTimer += deltaTime;
        }
    }

    draw(context) {
        this.entity.updateDirection();

        switch (this.entity.direction) {
            case DIRECTIONS.W:
                this.frameY = 2;
                break;
            case DIRECTIONS.E:
                this.frameY = 1;
                break;
            case DIRECTIONS.S:
                this.frameY = 3;
                break;
            case DIRECTIONS.N:
                this.frameY = 0;
                break;
        }

        if (this.entity.currentState instanceof Standing) {
            this.frameY = 5;
        }

        context.drawImage(
            this.entity.image,
            this.frameX * this.entity.width, 
            this.frameY * this.entity.height, 
            this.entity.width, 
            this.entity.height, 
            this.entity.x, 
            this.entity.y, 
            this.entity.width, 
            this.entity.height
        );
    }
}

export class TileAnimation extends Animation {
    constructor(entity) {
        super(entity);
    }

    draw(context) {
        context.drawImage(
            this.entity.image,
            this.frameX * this.entity.width, 
            this.frameY * this.entity.height, 
            this.entity.width, 
            this.entity.height, 
            this.entity.x, 
            this.entity.y, 
            this.entity.width, 
            this.entity.height
        );
    }
}

export class MobAnimation extends Animation {
    constructor(entity) {
        super(entity);
    }

    draw(context) {
        const referenceTile = this.entity.game.world.tiles[0][0];

        context.drawImage(
            this.entity.image,
            this.frameX * this.entity.width, 
            this.frameY * this.entity.height, 
            this.entity.width, 
            this.entity.height, 
            this.entity.x + referenceTile.x, 
            this.entity.y + referenceTile.y, 
            this.entity.width, 
            this.entity.height
        );
    }
}

export class PlayerAnimation extends Animation {

}