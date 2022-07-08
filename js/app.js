const planets = [];
let satilite;

function preload() {}

function setup() {
    const WIDTH = 700;
    const HEIGHT = 700;
    createCanvas(WIDTH, HEIGHT);
    frameRate(60);
    planets.push(new Planet(WIDTH / 2, HEIGHT / 2, 25, "red"));
    let direction = createVector(1, 0);
    satilite = new Satilite(200, 410, 20, 20, "green", direction);
    noStroke();
}

function draw() {
    planet.x = mouseX;
    planet.y = mouseY;
    background(69);
    console.log(planets);
    planets.forEach((planet) => {
        console.log(planet);
        planet.draw();
    });
    satilite.update();
    satilite.draw();
}
