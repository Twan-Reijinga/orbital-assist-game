class StatusBar {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    draw() {
        fill(0);
        rect(0, 0, this.width, this.height);
        textSize(30);
        textAlign(LEFT, CENTER);
        if (countDown <= 3) {
            fill("red");
        } else {
            fill(255);
        }
        text("Launch in " + countDown + " seconds", 30, this.height / 2);
        fill(255);
        textAlign(RIGHT, CENTER);
        text("Score: " + round, this.width - 30, this.height / 2);
    }
}
