const planets = [];
let satilites = [];
let start_status = 0;
let goal;
let statusBar;
let round = 0;
let countDown = 30;

function preload() {
    backgroundSpace = loadImage("img/background.png");
    start_screen_background = loadImage("img/start_screen_background.png");
    font = loadFont("font/m5x7.ttf");
    planet_1 = loadImage("img/planet_1.png");
    planet_2 = loadImage("img/planet_2.png");
    planet_3 = loadImage("img/planet_3.png");
    planet_4 = loadImage("img/planet_4.png");
    planet_5 = loadImage("img/planet_6.png");
    portal_red = loadImage("img/portal_red.png");
    portal_blue = loadImage("img/portal_blue.png");
    satalite_blue = loadImage("img/satalite_blue.png");
    satalite_green = loadImage("img/satalite_green.png");
    satalite_red = loadImage("img/satalite_red.png");
}

function setup() {
    const WIDTH = 700;
    const HEIGHT = 700;
    createCanvas(WIDTH, HEIGHT);
    frameRate(144);
    planets.push(new Planet(WIDTH / 2, HEIGHT / 2, 25, planet_1, "white"));
    let direction = createVector(1, 0);
    satilites.push(new Satilite(200, 420, 20, 20, satalite_green, direction));
    statusBar = new StatusBar(WIDTH, 50);
    goal = new Goal(width - 27, 69, "y");
    noStroke();
    textFont(font);
    setInterval(updateCountDown, 1000);
}

function draw() {
    background(start_screen_background);
    textSize(100);
    text('PRESS TO START', 100, 350);
    fill(255);
    if (start_status == 1){
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
}

function mouseClicked(){
    start_status = 1;
    draw();
}

function updateCountDown() {
    if (countDown <= 0) {
        countDown = 30;
    } else {
        countDown--;
    }
}
