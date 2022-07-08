class Planet {
    constructor(x, y, radius, img, color) {
        this.radius = radius;
        this.gravityRadius = radius * 4;
        this.gravity = radius;
        this.img = img;
        this.color = color;
        this.changeLoc(x, y);
    }

    draw() {
        noFill();
        stroke(this.color);
        circle(this.x, this.y, this.gravityRadius * 2);
        noStroke();
        image(this.img, this.x - this.radius, this.y - this.radius);
    }

    changeLoc(x, y) {
        this.x = x;
        this.y = y;
    }
}
