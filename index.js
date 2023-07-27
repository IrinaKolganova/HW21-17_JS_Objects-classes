// function sayHello() {
//     console.log(`Hello, ${this.name}!`);
// }

// let name = "Nina";

// const person1 = {
//     name: "Alice",
//     greet: sayHello
// };

// const person2 = {
//     name: "Bob",
//     greet: sayHello
// };

// sayHello();      //`Hello, underfined!`
// person1.greet(); //sayHello
// person2.greet(); //sayHello


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    study() {
        console.log(`I'm studying ${this.major}.`);
    }
}

const person = new Person("John", 25);
const student = new Student("Alice", 20, "Computer Science");

person.introduce()