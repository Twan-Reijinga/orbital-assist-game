class Goal {
    constructor(id, x, y, dir) {
        this.id = id;

        this.dir = dir;

        this.x = x;
        this.y = y;

        if (id == 0) {
            this.image = portal_0;
        } else if (id == 1) {
            this.image = portal_1;
        } else {
            this.image = portal_2;
        }

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
            image(this.image, 0, 0);
            pop();
        } else {
            image(this.image, this.x, this.y);
        }
    }
}
