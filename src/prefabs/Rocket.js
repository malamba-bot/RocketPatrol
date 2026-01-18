// Rocket prefab - building blocks for a rocket object
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        /*
            *  The constructor takes context from a scene. With this context, we
            *  can access the scenes methods such as scene.add(). The line
            *  below leverages this by adding itself to the scene.
        */
        scene.add.existing(this);
        this.isFiring = false;
        this.moveSpeed = 2;
    }

    update() {
        // Horizontal movement
        if(!this.isFiring) {
            if (keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
            } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed;
            }
        }

        // Fire button
        if (Phaser.Input.Keyboard.JustDown(keyFIRE)) {
            this.isFiring = true;
        }
        // If fired, moved up
        if (this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
        }
        // Reset on miss
        if (this.y <= borderUISize * 3 + borderPadding) {
            this.isFiring = false;
            this.y = game.config.height - borderUISize - borderPadding;
        }
    }

    // Reset the rocket position
    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}
