var Dog = /** @class */ (function () {
    function Dog(name, age) {
        this.name = name;
        this.age = age;
    }
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat(name, age) {
        this.name = name;
        this.age = age;
    }
    return Cat;
}());
function createAnimal(cstr, name, age) {
    return new cstr(name, age);
}
var A = createAnimal(Dog, '초코', 3);
var B = createAnimal(Cat, '찰리', 2);
var C = createAnimal(Dog, 'merry', 4);
console.log('Dog', A);
console.log('Dog', C);
