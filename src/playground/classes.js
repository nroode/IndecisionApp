//this.name = name ||'test'  -> shows name if it exists or else test if not

class Person {
    constructor(name = 'anon', age = 0) {
        this.name = name;
        this.age = age;
    }
    
    getGreeting() {
        // return 'Hi, I am ' + this.name + '!';
        return `Hi, I am ${this.name}.`; //es6 feature to insert directly into strings
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }

}

class Student extends Person {  //Student will work just like person but we can make modifications
    constructor(name, age, major) {  //don't need to set up defaults or define name and age again BUT -
        super(name, age);   //have to call the parent constructor function before we can call this.major below - just need to pass them through
        this.major = major;
    }
    hasMajor() {
        return !!this.major; //will return true if specified, false if undefined - empty string is null but this can change it to a truthy or falsy value
    }
    getDescription() { // we can overrise the parent method, or we can use the parent method
        // console.log('test'); will override the parent method
        let description = super.getDescription(); //calls the parent method
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    // hasLocation() {
    //     return !!this.homeLocation;
    // }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`
        }
        return greeting;
    }

}

const me = new Traveler('Nat', 32, 'LA');
console.log(me.getGreeting());
console.log(me.age);

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGreeting())
console.log(other.age);