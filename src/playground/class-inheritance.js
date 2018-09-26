// car class
// make
// model
// vin
// getDescription
class Person {

    constructor(name = 'Anon', age = 0) {
        this.name = name;
        this.age = age;
        console.log(this, " created");
    }
    getGreeting() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}


class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` thier major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, home) {
        super(name, age);
        this.home = home;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.home) {
            greeting += ` I'm from ${this.home}.`;
        }
        return greeting;
    }
}
const mini = new Person("My Name", 99);

const studi = new Student("My Name", 99, "Computer Science");

const me = new Traveler("My Name", 99, "New York");

console.log(me.getDescription());
console.log(me.getGreeting());

const other = new Student();
console.log(other.getDescription());

console.log(other.getGreeting());