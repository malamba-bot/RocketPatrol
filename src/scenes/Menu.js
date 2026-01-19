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
        // Load spritesheet
        this.load.spritesheet("explosion", "./assets/explosion.png", {
            frameWidth: 64,
            frameHeight: 32,
            startFrame: 0,
            endFrame: 9
        })
        // Load audio
        this.load.audio('sfx-select', './assets/sfx-select.wav')
        this.load.audio('sfx-explosion', './assets/sfx-explosion.wav')
        this.load.audio('sfx-shot', './assets/sfx-shot.wav')
    }

    create() {
        // Animation config
        // Animations configured in any scene are available to ALL scenes and
        // spites
        this.anims.create({
            key: "explode",
            frames: this.anims.generateFrameNumbers("explosion", { start: 0, end: 9, first: 0 }),
            frameRate: 30
        })
        this.add.text(20, 20, "Rocket Patrol Menu");
        this.scene.start("playScene");
    }
}
