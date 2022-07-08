class StatusBar {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    draw() {
        fill(0);
        rect(0, 0, this.width, this.height);
        fill(255);
        textSize(30);
        textAlign(LEFT, CENTER);
        text("Launch in " + countDown + " seconds", 32, this.height / 2);
        textAlign(RIGHT, CENTER);
        text("Score: " + round, this.width - 32, this.height / 2);
    }
}
