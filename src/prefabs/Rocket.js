// Rocket prefab - building blocks for a rocket object
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        // Add object to an existing scene, and pass its context
        scene.add.existing(this);
    }
}
