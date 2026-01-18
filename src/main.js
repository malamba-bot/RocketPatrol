let config = {
    // Type of graphics renderer used
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    // Add scenes using the names of the class files
    scene: [Menu, Play]
}

let game = new Phaser.Game(config);
