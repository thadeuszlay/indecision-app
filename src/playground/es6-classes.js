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

const me = new Person("My Name", 99);

console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());

console.log(other.getGreeting());