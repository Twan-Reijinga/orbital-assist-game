class Satilite {
    constructor(x, y, width, height, color, direction) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.changeLoc(x, y);
        this.changeDirection(direction);
    }

    update() {
        this.changeLoc(this.x + this.direction.x, this.y + this.direction.y);
        let distance = calcDistance(this, planet);
        if (distance <= planet.radius) {
            console.log("dead");
        } else if (distance <= planet.grafityRadius) {
            console.log("grafity");
        }
    }

    draw() {
        fill(this.color);
        noStroke();
        rect(this.x, this.y, this.width, this.height);
    }

    changeLoc(x, y) {
        this.x = x;
        this.y = y;
    }

    changeDirection(direction) {
        this.direction = direction;
    }
}
