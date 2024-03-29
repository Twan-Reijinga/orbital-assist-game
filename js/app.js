let planets = [];
let satilites = [];
let satilitesCompleted = 0;
let start_status = false;
let goals = [];
let statusBar;
let round = 0;
let countDown = 30;
let activeGame = false;
let hasLost = false;

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
    frameRate(60);
    startRound();
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
    fill(255);
    if (start_status == true) {
        if (hasLost) {
            textAlign(CENTER, CENTER);
            textSize(60);
            text("YOU LOSE", 350, 350);
            return;
        }
        if (satilitesCompleted == satilites.length) {
            win();
        }

        background(backgroundSpace);
        if (!activeGame) {
            if (keyIsPressed) {
                movePlanetByKey();
            } else {
                movePlanetByCursor();
            }
        }

        planets.forEach((planet) => {
            planet.draw();
        });

        satilites.forEach((satilite) => {
            if (activeGame) {
                if (
                    satilite.x < 0 ||
                    satilite.y < 50 ||
                    satilite.x > 700 ||
                    satilite.y > 700
                ) {
                    hasLost = true;
                    setTimeout(() => {
                        lose();
                    }, 1500);
                }
                satilite.update();
            }

            satilite.draw();
        });

        goals.forEach((goal) => {
            goal.draw();
        });

        statusBar.draw();
    } else {
        background(start_screen_background);
        textSize(100);
        text("PRESS TO START", 99, 350);
    }
}

function keyPressed() {
    if (keyCode == 13 || keyCode == 88) {
        countDown = 0;
    }
}

function mouseClicked() {
    start_status = true;
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

function lose() {
    hasLost = false;
    activeGame = false;
    let copyPlanets = planets;
    startRound();
    planets = copyPlanets;
}

function win() {
    round++;
    activeGame = false;
    startRound();
}

function startRound() {
    satilitesCompleted = 0;
    satilites = [];
    goals = [];
    planets = [];
    let direction;
    if (round === 0) {
        // planets.push(new Planet(400, 300, 25, planet_1, "white"));
        // de corecte manier
        planets.push(new Planet(100, 100, 25, planet_1, "white"));
        // tijdelijke planeeten hierboven
        direction = createVector(0, -1);
        satilites.push(
            new Satilite(325, 650, 20, 20, satalite_2, 2, direction)
        );
        goals.push(new Goal(2, width - 27, 180, "y"));
    }
    if (round === 1) {
        // planets.push(new Planet(450, 380, 25, planet_3, "white"));
        // de corecte manier
        planets.push(new Planet(100, 100, 25, planet_1, "white"));
        // tijdelijke planeeten hierboven
        direction = createVector(1, 0);
        satilites.push(new Satilite(50, 300, 20, 20, satalite_2, 2, direction));
        goals.push(new Goal(2, width - 240, 690, "x"));
    }
    if (round === 2) {
        // planets.push(new Planet(300, 420, 25, planet_3, "white"));
        // planets.push(new Planet(450, 280, 25, planet_1, "white"));
        // de corecte manier hierboven
        planets.push(new Planet(100, 100, 25, planet_3, "white"));
        planets.push(new Planet(300, 400, 25, planet_1, "white"));
        // tijdelijke planeeten hierboven
        direction = createVector(1, 0);
        satilites.push(new Satilite(50, 500, 20, 20, satalite_2, 2, direction));
        goals.push(new Goal(2, width - 27, 250, "y"));
    }
    if (round === 3) {
        // planets.push(new Planet(125, 200, 25, planet_3, "white"));
        // planets.push(new Planet(400, 180, 18, planet_2, "white"));
        // de corecte manier hierboven
        planets.push(new Planet(100, 100, 25, planet_3, "white"));
        planets.push(new Planet(300, 400, 18, planet_2, "white"));
        // tijdelijke planeten hierboven
        direction = createVector(0, -1);
        satilites.push(new Satilite(50, 500, 20, 20, satalite_2, 2, direction));
        goals.push(new Goal(2, width - 200, 690, "x"));
    }
    if (round === 4) {
        planets.push(new Planet(100, 100, 25, planet_3, "white"));
        planets.push(new Planet(200, 200, 30, planet_4, "white"));
        planets.push(new Planet(300, 300, 30, planet_5, "white"));
        direction = createVector(1, 0);
        satilites.push(new Satilite(50, 500, 20, 20, satalite_2, 2, direction));
        goals.push(new Goal(2, width - 700, 250, "y"));
    }
}

function movePlanetByCursor() {
    for (let i = 0; i < planets.length; i++) {
        if (
            mouseIsPressed &&
            abs(planets[i].x - pmouseX) <= 25 &&
            abs(planets[i].y - pmouseY) <= 25
        ) {
            dmouseX = mouseX - pmouseX;
            dmouseY = mouseY - pmouseY;
            planets[i].addLoc(dmouseX, dmouseY);
            i = planets.length;
        }
    }
}

function movePlanetByKey() {
    if (start_status && !activeGame) {
        let direction = createVector(0, 0);
        const speed = 2;
        if (key == "ArrowUp") {
            direction.y = -1;
        }
        if (key == "ArrowDown") {
            direction.y = 1;
        }
        if (key == "ArrowLeft") {
            direction.x = -1;
        }
        if (key == "ArrowRight") {
            direction.x = 1;
        }
        planets.forEach((planet) => {
            planet.addLoc(direction.x * speed, direction.y * speed);
        });
    }
}
