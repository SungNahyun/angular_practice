interface Animal{
    name: string;
    age: number;
}


interface AnimalConstructor{
    new (name: string, age: number): Animal;//
}

class Dog implements Animal{
    name: string;
    age: number;
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
}

class Cat implements Animal{
    name: string;
    age: number;
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
}

function createAnimal(cstr: AnimalConstructor, name: string, age: number){
    return new cstr(name,age);//
}

const A = createAnimal(Dog, '초코', 3);
const B = createAnimal(Cat,'찰리',2);
const C = createAnimal(Dog,'merry',4);


console.log('Dog', A);
console.log('Dog', C);

