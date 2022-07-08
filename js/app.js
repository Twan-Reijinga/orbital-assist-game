function setup() {
    const WIDTH = 700;
    const HEIGHT = 700;
    createCanvas(WIDTH, HEIGHT);
    frameRate(144);
    new Planet();
    new Satilite();
}

function draw() {
    background(69);
}
