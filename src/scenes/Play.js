class Play extends Phaser.Scene {
    constructor() {
        // The string we pass is used to identify this scene in Phaser.Scene
        super("playScene");
    }

    create() {
        this.add.text(20, 20, "Rocket Patrol Play");
    }
}
