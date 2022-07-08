const planets = [];
let goal;
let satilite;
let statusBar;
let round = 0;
let countDown = 30;
let font;

function preload() {
    backgroundSpace = loadImage("img/background.png");
    planet_1 = loadImage("img/planet_1.png");
    portal_red = loadImage("img/portal_red.png");
    font = loadFont("font/m5x7.ttf");
    satalite_blue = loadImage("img/satalite_blue.png");
}

function setup() {
    const WIDTH = 700;
    const HEIGHT = 700;
    createCanvas(WIDTH, HEIGHT);
    frameRate(144);
    planets.push(new Planet(WIDTH / 2, HEIGHT / 2, 25, "white"));
    let direction = createVector(1, 0);
    satilite = new Satilite(200, 420, 20, 20, "green", direction);
    statusBar = new StatusBar(WIDTH, 50);
    goal = new Goal(width - 27, 69, "y");
    noStroke();
    textFont(font);
    setInterval(updateCountDown, 1000);
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
    statusBar.draw();
}

function updateCountDown() {
    if (countDown <= 0) {
        countDown = 30;
    } else {
        countDown--;
    }
}
