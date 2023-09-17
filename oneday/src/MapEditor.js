export default class MapEditor {
    constructor(world) {
        this.world = world;
        this.isActive = true;

        this.activeTile = document.getElementById('rock');
        const exportButton = document.getElementById('exportMap');

        exportButton.onclick = e => {
            this.exportMap();
        }

        document.getElementById('rockButton').onclick = e => {
            console.log('Activated rock tile');
            this.activeTile = document.getElementById('rock');
        }

        document.getElementById('landButton').onclick = e => {
            console.log('Activated land tile');
            this.activeTile = document.getElementById('land');
        }
    }

    exportMap() {
        let data = [];

        this.world.tiles.forEach(row => {
            row.forEach(tile => {
                data.push({
                    worldX: tile.worldX,
                    worldY: tile.worldY,
                    image: 'land',
                })
            });
        });

        var jsonString = JSON.stringify(data);
        var blob = new Blob([jsonString], { type: 'application/json' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'map.json'; // Specify the file name
        a.textContent = 'Download JSON';

        document.body.appendChild(a);
    }
}