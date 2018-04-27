interface Shape{
    width?: number;
    height?: number;
    radius?: number;
    getArea(): number;
}

class Rect implements Shape{
    width: number;
    height: number;

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea():number {
        return this.height * this.width;
    }
}

class Circle implements Shape{
    radius: number;

    constructor(radius) {
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

let rect1 = new Rect(10,20);
let circle1 = new Circle(5);

console.log(rect1.getArea());
console.log(circle1.getArea());
