class Person {
    constructor(fName, lName, age){
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
    }
    personDetails(){
        return this.firstName + " " + this.lastName + " is " + this.age + " years old. " + this.occupation;

    }
    setOccupation(occupation){
        this.occupation = occupation;
    }

    static myMethod(){
        return "this is a static method";
    }
}

let a = new Person("Jim", "Cooper", 29);
a.setOccupation("carpenter");
console.log("a.personDetails " + a.personDetails());

let b = new Person("Aaron", "Nassiry", 30);
Object.assign(a, b); //assign b to a
console.log("a.personDetails " + a.personDetails());
console.log("b.personDetails " + b.personDetails());

Object.defineProperty(Person.prototype, 'occupation', {enumerable: true});
let c = new Person("Jesse", "James", 30);
console.log(c.personDetails());

console.log(Person.myMethod());
