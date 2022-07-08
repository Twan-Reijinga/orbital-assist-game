class Satilite {
    constructor(x, y, width, height, color, direction) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.direction = direction;
    }

    update() {
        this.addLoc(this.direction.x, this.direction.y);
        planets.forEach((planet) => {
            let distance = calcDistance(this, planet);
            if (distance <= planet.radius) {
                console.log("dead");
            } else if (distance <= planet.gravityRadius) {
                let direction = calcDirection(this, planet);
                let angle = atan2(-direction.y, -direction.x);
                this.addDirection(angle);
            }
        });
    }

    draw() {
        fill(this.color);
        noStroke();
        image(
            satalite_blue,
            this.x - this.width / 2,
            this.y - this.height / 2,
            this.width,
            this.height
        );
    }

    addLoc(x, y) {
        this.x = this.x + x;
        this.y = this.y + y;
    }

    addDirection(angle) {
        this.direction.add(cos(angle) * 0.02, sin(angle) * 0.02);
    }

    // getDirection() {
    //     let x = cos(this.angle);
    //     let y = sin(this.angle);
    //     return createVector(x, y);
    // }
}
