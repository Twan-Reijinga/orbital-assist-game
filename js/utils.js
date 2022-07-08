function calcDistance(obj1, obj2) {
    let dX = obj1.x - obj2.x;
    let dY = obj1.y - obj2.y;
    return sqrt(dX * dX + dY * dY);
}
