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
        fill(this.color);
        noStroke();

        imageMode(CENTER);

        line(0, 0, this.x, this.y);
        image(satalite_blue, this.x, this.y, this.width, this.height);

        imageMode(CORNER);
    }

    addLoc(x, y) {
        this.x = this.x + x;
        this.y = this.y + y;
    }

    addDirection(angle) {
        this.direction.add(cos(angle) * 0.02, sin(angle) * 0.02);
    }
}
