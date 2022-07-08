class Planet {
    constructor(x, y, radius, color) {
        this.radius = radius;
        this.color = color;
        this.changeLoc(x, y);
    }

    draw() {
        fill(this.color);
        circle(this.x, this.y, this.radius);
    }

    changeLoc(x, y) {
        this.x = x;
        this.y = y;
    }
}
