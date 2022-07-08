class Satilite {
    constructor(x, y, width, height, img, direction) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = img;
        this.direction = direction;
    }

    update() {
        this.addLoc(this.direction.x, this.direction.y);
        planets.forEach((planet) => {
            let distance = calcDistance(this, planet);
            if (distance <= planet.radius + this.width / 2) {
                console.log("dead");
            } else if (distance <= planet.gravityRadius) {
                let direction = calcDirection(this, planet);
                let angle = atan2(-direction.y, -direction.x);
                this.addDirection(angle);
            }
        });
    }

    draw() {
        noStroke();
        if (!activeGame) {
            this.drawDirection();
        }

        imageMode(CENTER);

        line(0, 0, this.x, this.y);
        image(this.img, this.x, this.y, this.width, this.height);

        imageMode(CORNER);
    }

    drawDirection() {
        stroke("white");
        strokeWeight(5);
        line(
            this.x,
            this.y,
            this.x + this.direction.x * 50,
            this.y + this.direction.y * 50
        );
        noStroke();
    }

    addLoc(x, y) {
        this.x = this.x + x;
        this.y = this.y + y;
    }

    addDirection(angle) {
        this.direction.add(cos(angle) * 0.02, sin(angle) * 0.02);
    }
}
