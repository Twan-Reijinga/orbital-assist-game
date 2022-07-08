class Planet {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        fill(this.color);
        circle(this.x, this.y, this.radius);
    }
}
