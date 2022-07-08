const planets = [];
let goal;
let satilite;

function preload() {
    backgroundSpace = loadImage('img/background.png');
    planet_1 = loadImage('img/planet_1.png');
    satalite_blue = loadImage('img/satalite_blue.png');
}

function setup() {
    const WIDTH = 700;
    const HEIGHT = 700;
    createCanvas(WIDTH, HEIGHT);
    frameRate(60);
    planets.push(new Planet(WIDTH / 2, HEIGHT / 2, 25, "white"));
    let direction = createVector(1, 0);
    satilite = new Satilite(200, 410, 20, 20, "green", direction);
    goal = new Goal(69, 69, "y");
    noStroke();
}

function draw() {
    background(backgroundSpace);

    planets.forEach((planet) => {
        planets.forEach((planet) => {
            planet.draw();
        });
    });

    goal.draw();

    satilite.update();
    satilite.draw();
}
