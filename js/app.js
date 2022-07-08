let planet;
let satilite;

function preload() {}

function setup() {
    const WIDTH = 700;
    const HEIGHT = 700;
    createCanvas(WIDTH, HEIGHT);
    frameRate(144);
    planet = new Planet(WIDTH / 2, HEIGHT / 2, 50, "red");
    satilite = new Satilite();
    noStroke();
}

function draw() {
    background(69);
    planet.draw();
}
