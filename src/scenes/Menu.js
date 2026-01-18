class Menu extends Phaser.Scene {
    constructor() {
        // The string we pass is used to identify this scene in Phaser.Scene
        super("menuScene");
    }

    preload() {
        // Load images and tile sprites
        // We can load assets that we plan on using in future scenes
        // because Phaser provides a persistent cache, which holds all loaded
        // assets
        this.load.image("rocket", "../../assets/rocket.png");
        this.load.image("spaceship", "../../assets/spaceship.png");
        this.load.image("starfield", "../../assets/starfield.png");
    }

    create() {
        this.add.text(20, 20, "Rocket Patrol Menu");
        this.scene.start("playScene");
    }
}
