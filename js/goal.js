class Goal {
    constructor(x, y, dir) {
        this.x = x;
        this.y = y;
        this.dir = dir;
    }

    draw() {
        fill("#ff00ff");

        if (this.dir == "x") {
            rect(this.x, this.y, 50, 20);
        } else {
            rect(this.x, this.y, 20, 50);
        }
    }
}
