class StatusBar {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    draw(color) {
        fill(color);
        console.log(this.width);
        rect(0, 0, this.width, this.height);
    }
}
