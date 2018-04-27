var Rect = /** @class */ (function () {
    function Rect(width, height) {
        this.width = width;
        this.height = height;
    }
    Rect.prototype.getArea = function () {
        return this.height * this.width;
    };
    return Rect;
}());
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}());
var rect1 = new Rect(10, 20);
var circle1 = new Circle(5);
console.log(rect1.getArea());
console.log(circle1.getArea());
