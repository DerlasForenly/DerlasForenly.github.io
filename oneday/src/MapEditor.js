export default class MapEditor {
    constructor(world) {
        this.world = world;
        this.isActive = true;

        this.activeTile = null;

        document.getElementById('rockButton').onclick = e => {
            console.log('Activated rock tile');
            this.activeTile = document.getElementById('rock');
        }

        document.getElementById('landButton').onclick = e => {
            console.log('Activated land tile');
            this.activeTile = document.getElementById('land');
        }
    }
}