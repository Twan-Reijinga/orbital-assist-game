class Planet {
    constructor(x, y, radius, color) {
        this.radius = radius;
        this.grafityRadius = radius * 4;
        this.color = color;
        this.changeLoc(x, y);
    }

    draw() {
        noFill();
        stroke(this.color);
        circle(this.x, this.y, this.grafityRadius * 2);
        fill(this.color);
        noStroke();
        circle(this.x, this.y, this.radius * 2);
    }

    changeLoc(x, y) {
        this.x = x;
        this.y = y;
    }
}
