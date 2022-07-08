class Planet {
    constructor(x, y, radius, img, color) {
        this.radius = radius;
        this.gravityRadius = radius * 4;
        this.gravity = radius;
        this.img = img;
        this.color = color;
        this.x = x;
        this.y = y;
    }

    draw() {
        noFill();
        stroke(this.color);
        strokeWeight(1);
        circle(this.x, this.y, this.gravityRadius * 2);
        noStroke();
        image(this.img, this.x - this.radius, this.y - this.radius);
    }

    addLoc(x, y) {
        this.x += x;
        this.y += y;
    }
}
