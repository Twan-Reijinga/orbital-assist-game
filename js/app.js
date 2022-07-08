let planet;
let satilite;

function preload() {}

function setup() {
    const WIDTH = 700;
    const HEIGHT = 700;
    createCanvas(WIDTH, HEIGHT);
    frameRate(144);
    planet = new Planet(WIDTH / 2, HEIGHT / 2, 25, "red");
    const direction = createVector(1, 1);
    satilite = new Satilite(0, 0, 20, 20, "green", direction);
    noStroke();
}

function draw() {
    background(69);
    planet.draw();
    satilite.update();
    satilite.draw();
}
