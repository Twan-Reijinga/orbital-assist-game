const planets = [];
let goal;
let satilite;
let statusBar;
let round = 0;
let countDown = 30;
let font;

function preload() {
    font = loadFont("font/m5x7.ttf");
    backgroundSpace = loadImage("img/background.png");
    planet_1 = loadImage("img/planet_1.png");
    planet_2 = loadImage("img/planet_2.png");
    planet_3 = loadImage("img/planet_3.png");
    planet_4 = loadImage("img/planet_4.png");
    planet_5 = loadImage("img/planet_6.png");
    portal_blue = loadImage('img/portal_blue.png')
    satalite_blue = loadImage("img/satalite_blue.png");
    satalite_green = loadImage("img/satalite_green.png");
    satalite_red = loadImage("img/satalite_red.png");
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
    goal = new Goal(69, 69, "y");
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
