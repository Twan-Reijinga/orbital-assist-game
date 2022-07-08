function calcDistance(obj1, obj2) {
    let direction = calcDirection(obj1, obj2);
    return sqrt(direction.x * direction.x + direction.y * direction.y);
}

function calcDirection(obj1, obj2) {
    let dX = obj1.x - obj2.x;
    let dY = obj1.y - obj2.y;
    return createVector(dX, dY);
}
