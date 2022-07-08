class Goal {
    constructor(x, y, dir) {
        this.dir = dir;

        this.x = x;
        this.y = y;
    }

    draw() {
        fill("#ff00ff");

        if (this.dir == "x") {
            push();
            translate(this.x, this.y);
            rotate(radians(-90));
            image(portal_red, 0, 0);
            pop();
        } else {
            image(portal_red, this.x, this.y);
        }
    }
}
