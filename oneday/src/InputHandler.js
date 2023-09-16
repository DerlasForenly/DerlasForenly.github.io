import { KEYS } from "./consts.js";

export default class InputHandler {
    constructor() {
        this.keys = [];

        window.addEventListener('keydown', e => {
            if (KEYS.includes(e.key) && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key);
            }
        });

        window.addEventListener('keyup', e => {
            if (KEYS.includes(e.key)) {
                this.keys.splice(this.keys.indexOf(e.key), 1);
            }
        });
    }
}