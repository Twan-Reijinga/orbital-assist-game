const planets = [];
let satilites = [];
let goal;
let statusBar;
let round = 0;
let countDown = 30;

function preload() {
    backgroundSpace = loadImage("img/background.png");
    font = loadFont("font/m5x7.ttf");
    planet_1 = loadImage("img/planet_1.png");
    planet_2 = loadImage("img/planet_2.png");
    planet_3 = loadImage("img/planet_3.png");
    planet_4 = loadImage("img/planet_4.png");
    planet_5 = loadImage("img/planet_6.png");
    portal_0 = loadImage("img/portal_0.png");
    portal_1 = loadImage("img/portal_1.png");
    portal_2 = loadImage("img/portal_2.png");
    satalite_0 = loadImage("img/satalite_0.png");
    satalite_1 = loadImage("img/satalite_1.png");
    satalite_2 = loadImage("img/satalite_2.png");
}

function setup() {
    const WIDTH = 700;
    const HEIGHT = 700;
    createCanvas(WIDTH, HEIGHT);
    frameRate(144);
    startgame();
    // planets.push(new Planet(WIDTH / 2, HEIGHT / 2, 25, planet_1, "white"));
    // let direction = createVector(1, 0);
    // satilites.push(new Satilite(200, 420, 20, 20, satalite_2, direction));
    statusBar = new StatusBar(WIDTH, 50);
    // goal = new Goal(0, width - 27, 69, "y");
    noStroke();
    textFont(font);
    setInterval(updateCountDown, 1000);
}

function draw() {
    background(backgroundSpace);

    planets.forEach((planet) => {
        planet.draw();
    });
    satilites.forEach((satilite) => {
        satilite.update();
        satilite.draw();
    });

    goal.draw();
    statusBar.draw();
}

function updateCountDown() {
    if (countDown <= 0) {
        countDown = 30;
    } else {
        countDown--;
    }
}

function startgame(){
    if (round === 0) {
        // planets.push(new Planet(400, 300, 25, planet_1, "white"));
        let direction = createVector(0, -1);
        satilites.push(new Satilite(325, 650, 20, 20, satalite_2, direction));
        goal = new Goal(0, width - 27, 180, "y");
    }
}
