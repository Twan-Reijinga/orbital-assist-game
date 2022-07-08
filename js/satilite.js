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
