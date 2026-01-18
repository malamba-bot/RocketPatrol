class Menu extends Phaser.Scene {
    constructor() {
        // The string we pass is used to identify this scene in Phaser.Scene
        super("menuScene");
    }

    create() {
        this.add.text(20, 20, "Rocket Patrol Menu");
        this.scene.start("playScene");
    }
}
