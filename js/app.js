const planets = [];
let satilites = [];
let start_status = 0;
const goals = [];
let statusBar;
let round = 0;
let countDown = 4;
let activeGame = false;

function preload() {
    backgroundSpace = loadImage("img/background.png");
    start_screen_background = loadImage("img/start_screen_background.png");
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
    background(start_screen_background);
    textSize(100);
    text("PRESS TO START", 100, 350);
    fill(255);
    if (start_status == 1) {
        background(backgroundSpace);
        if (!activeGame) {
            movePlanet();
        }

        planets.forEach((planet) => {
            planet.draw();
        });

        satilites.forEach((satilite) => {
            if (activeGame) {
                satilite.update();
            }

            satilite.draw();
        });

        goals.forEach((goal) => {
            goal.draw();
        });

        statusBar.draw();
    }
}

function mouseClicked() {
    start_status = 1;
    draw();
}

function updateCountDown() {
    if (activeGame) {
        return;
    }
    if (countDown <= 0) {
        activeGame = true;
        countDown = 30;
    } else {
        countDown--;
    }
}

function death() {
    console.log(death);
}

function win() {
    console.log(win);
}

function startgame() {
    if (round === 0) {
        planets.push(new Planet(400, 300, 25, planet_1, "white"));
        let direction = createVector(0, -1);
        satilites.push(
            new Satilite(325, 650, 20, 20, satalite_2, 2, direction)
        );
        goals.push(new Goal(0, width - 27, 180, "y"));
    }
}

function movePlanet() {
    for (let i = 0; i < planets.length; i++) {
        if (
            mouseIsPressed &&
            abs(planets[i].x - pmouseX) <= 25 &&
            abs(planets[i].y - pmouseY) <= 25
        ) {
            dmouseX = mouseX - pmouseX;
            dmouseY = mouseY - pmouseY;
            planets[i].addLoc(dmouseX, dmouseY);
        }
    }
    // planets.forEach((planet) => {
    //     if (planet.selected) {
    //         planet.x = mouseX;
    //         planet.y = mouseY;
    //     }
    // });
}
