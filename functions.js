//With strict mode, you can not, for example, use undeclared variables.
x = 3.14;       // This will cause an error because x is not declared


//call() is used for method borrowing
//https://github.com/aaronnassiry/complete-javascript-course/blob/master/5-advanced-JS/final/script.js#L265

//apply is the same as call() but accepts arguments
//https://github.com/aaronnassiry/complete-javascript-course/blob/master/5-advanced-JS/final/script.js#L267

//Promise
//objects that keeps track about whether certain event has happened already or not.
//Determines what happens after the event has happened

const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
   resolve([523, 883, 432, 974]);
   reject(new Error("…"));
  
    }, 1500);
   });
  
   getIDs
   .then(anything => {
      console.log(anything);
        })
  
   getIDs
   .catch(error => {
      console.log('Error');
   })

// Lecture: Rest parameters
//https://github.com/aaronnassiry/complete-javascript-course/blob/master/7-ES6/final/script.js#L370
function isFullAge5() {
  //console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments);
  
  //argsArr.forEach(function(cur) {
    //  console.log((2016 - cur) >= 18);
  //})

  argsArr.forEach(cur => {
    console.log((2016 - cur) >= 18);
})
}

isFullAge5(1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);

// Lecture: Spread operator
//https://github.com/aaronnassiry/complete-javascript-course/blob/master/7-ES6/final/script.js#L370

function addFourAges (a, b, c, d) {
  return a + b + c + d;
}
var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);
//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);
//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);



//destructuring
// ES6
//https://github.com/aaronnassiry/complete-javascript-course/blob/master/7-ES6/final/script.js#L238
const [name, age] = ['John', 26];
console.log(name);
console.log(age);


//strings
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
//https://github.com/aaronnassiry/complete-javascript-course/blob/master/7-ES6/final/script.js#L109


//arrow functions
https://github.com/aaronnassiry/complete-javascript-course/blob/master/7-ES6/final/script.js#L133
// ES5
var ages5 = years.map(function(el) {
  return 2016 - el;
});
console.log(ages5);
// ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);


// not necessary to declare variables
y = 5;
console.log(y);

// bind call and apply
https://github.com/aaronnassiry/complete-javascript-course/blob/master/5-advanced-JS/final/script.js#L269

// closures
//https://github.com/aaronnassiry/complete-javascript-course/blob/master/5-advanced-JS/final/script.js#L236
function interviewQuestion(job) {
  return function(name) {
      if (job === 'designer') {
          console.log(name + ', can you please explain what UX design is?');
      } else if (job === 'teacher') {
          console.log('What subject do you teach, ' + name + '?');
      } else {
          console.log('Hello ' + name + ', what do you do?');
      }
  }
}
interviewQuestion('teacher')('John');

//functions that returm functions can have the return value stored in a variable.
// the variable can then be called as a function.

//Data privacy with IIFE
//https://github.com/aaronnassiry/complete-javascript-course/blob/master/5-advanced-JS/final/script.js#L194

(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);

let x = (function(){
	//private variable
	let message = 'this is an immediately invoked function expression';
	return { 
		// public method
		greetings: function(firstName){
			// using closure
			return (message + ' ' + firstName + '!');;
		} 
	}
})();

console.log(x.greetings('Aaron'));

// primitives are passed by value, objects are passed by ref

//let is blocked scoped

//var is function scoped

// method borrowing 
// https://github.com/aaronnassiry/complete-javascript-course/blob/master/3-how-JS-works/final/script.js
// mike.calculateAge = john.calculateAge;
//inheritence
// https://github.com/aaronnassiry/complete-javascript-course/blob/master/5-advanced-JS/final/script.js
//Person.prototype.lastName = 'Smith';

// same as java

     let a = 23;
     let b = a;
     a = 46;

     console.log(a); //46
     console.log(b);  // 23



var msg = function () {
    let message = 'Hello';
    return typeof(message);
}
console.log(msg());

const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
      console.log(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
      console.log('Hi! I\'m ' + this.name[0] + '.');
    }
  };

console.log(person.name);
console.log(person.name[0]);
console.log(person.age);
console.log(person.interests[1]);
person.bio();
person.greeting();
console.log(person.name.length);

function createNewPerson(name) {
    const obj = {};
    obj.name = name;
    obj.greeting = function() {
      console.log('Hi! I\'m ' + obj.name + '.');
    };
    return obj;
  }

const salva = createNewPerson('Salva');
console.log(salva.name);
salva.greeting();

//constructor functions 
//The constructor function is JavaScript's version of a class
function Person(first, last, age, gender, interests) {
    this.first = first;
    this.last =last;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
      console.log(this.first + ' ' + this.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
      console.log('Hi! I\'m ' + this.first + '.');
    };
  }
  
Person.prototype.career = null;

let person1 = new Person('Bob', 'Smith', 32, 'Male', ['Skiing', 'SnowBoarding']);
let person2 = new Person('Sarah', 'Johnson', 42, 'Female', ['Kayaking', 'Climbing']);

person1.career = 'teacher'
console.log(person1.career)

person1.name
person1.greeting()
person1['age']
person1.interests[1]
person1.bio()

person2.bio();
//console.log(person1.valueOf());
//person1.toString

let emily;

//Person.greeting.call(emily, 'Emily', 'Xavier', 69, 'Female', 'Diving');


var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
console.log(myCar.year);

var myCar = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969
};

console.log(myCar.model)

const animal = {
  numberOfLegs: 4,
  sleep: () => console.log("Zzz")
}

animal.sleep();
//animal.sleep = null;
animal.sleep();


(function() {
  var x = 20;
  var y = 20;
  var answer = x + y;
  console.log(answer);
})();


