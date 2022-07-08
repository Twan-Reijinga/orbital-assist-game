class Goal {
    constructor(id, x, y, dir) {
        this.dir = dir;

        this.x = x;
        this.y = y;

        if (this.dir == "x") {
            this.width = 69;
            this.height = 27;
        } else {
            this.width = 27;
            this.height = 69;
        }
    }

    draw() {
        fill("#ff00ff");

        if (this.dir == "x") {
            push();
            translate(this.x, this.y);
            rotate(radians(-90));
            image(portal_0, 0, 0);
            pop();
        } else {
            image(portal_0, this.x, this.y);
        }
    }
}
