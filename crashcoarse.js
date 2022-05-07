

// https://www.youtube.com/watch?v=hdI2bqOjy3c&t=506s

// console.log("hello");  


// // Data types:
// // String:
// const name1 = "Maks";
// //Numbers:  
// const number = 10;
// const numberFloat = 10.5;
// //bolean:  ff
// const isCool = true;
// //null
// const null1 = null;
// //undefined
// const undefined1 = undefined;
// let z;

// console.log(typeof name1);
// //Concatination    
// console.log("Hello My Name is: " + name1);
// //Template strings - new way. Back Ticks. 
// const hello = `my name is ${name1} and i am ${number} years old.`;
// //Showingn only x,y indexes with Substring. 
// console.log(hello.substring());  
// // split string
// console.log(hello.split(' '));
/* multi line comment 
Hello 
comments
*/

//arrays - variables that hold multiple values. 
//not used often arrayconstructor
// const numbers = new Array(1,23,4,5,6,79);
// console.log(numbers);

// //best way
// const fruits = [4,  'Apples', 'Fruits', 'pears', 'jumba'];
// fruits[5] = 'Grape';
// fruits.push('Lemon'); // push to end. 
// fruits.unshift('Orange'); // unshift to start
// fruits.pop(); // remove last element.
// console.log(fruits.indexOf('pears'));
// console.log(fruits);

// Literal values

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 34,
//     hobbies: ['music', 'movies'],
//     address: {
//         street: '12321 main St', 
//         city: 'joa', 
//         state: 'MY', 
//         country: 'US'
//     }
// }
// person.email = 'max@example.com';

// console.log(person);
// console.log(person.address.street);
// // pulling out values from json as seperate variables. 
// const {firstName, age, address: { city }} = person;
// console.log(firstName,age, city);

// // arrays of objects
const todos = [
    {
        id: 1,
        text: "trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "call momo",
        isCompleted: true
    },
    {
        id: 3,
        text: "Shovel snow",
        isCompleted: false
    }
]
//todos.forEach((x) => console.log(x));
// console.log(todos[0]["text"]); 
// console.log(todos)

// // Convert to JSON
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON );


// // lops
// // for
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// //while lops
// let i = 0;
// while(i< 10) {
//     console.log(i + ": Second One");
//     i++
// }

// Loop through arrays
// for (let i= 0; i < todos.length; i++) {
//     console.log(todos[i].text);
// }

// // vetter way
// for (let x of todos) {
//     console.log(x.id + ": " + x.text);
// }

//high order array methods - suggested for iteration of arrays:
// forEach, map, filter
// forEach
// todos.forEach(function(x) {
//     console.log(x.isCompleted)
// });
// //map returns an array
// const todoText = todos.map(function(x) {
//     return x.id;
// });
// console.log(`New: ${todoText}`)

// //filter 
// const todoCompleted = todos.filter(function(x) {
//     return x.isCompleted === true;
// });
// console.log(todoCompleted);

// //filter - map to get text
// const todoCompleted2 = todos.filter(function(x) {
//     return x.isCompleted === true;
// }).map(function(x) {
//     return x.text;
// })
// console.log(todoCompleted2);


// // Conditionals:
// const x = '10', y = 11;

// // two == is matching the data content so 10 is equal to '10' while 3 === matching the data type. so 10 is not equal to '10'.
// // || is OR and && is AND. 
// if (x == 10 || y == 11) {
//     console.log(`x: ${x} and y: ${y}`)
// } 
// if (x === '10' ){
//     console.log(`x: ${x} and y: ${y}`)
// }

// //ternariy operator - short hand IF - assign value to var based on condition. 
// const color = x == 10 ? 'read' : 'blaue' // color will equal RED if x == 10 and blue if else (:)
// console.log(color)

// // SWITCHES> 
// switch(color) {
//     case 'red':
//         console.log(`Should be RED: Color is: ${color}`);
//         break;
//     case 'blue': 
//         console.log(`Should be blue: Color is: ${color}`);
//         break;
//     default:
//         console.log(`Should be ${color}`);
//         break;
// }


// //  NaN - Not a Number. 
// function addNums(num1 = 1, num2 = 5) {
//     return num1+num2;
// }

// let sum = addNums();
// console.log(sum);


// const addNums2 = (num1 = 1, num2 = 1) =>  num1+num2;
// console.log(addNums2());


//contructor function 
function Person(firstName, lastName, dob, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.age = age;
    this.getBirthYear = function () {
        return this.dob.getFullYear();
    }
    // combine first and last names and capitalize first letters of both VARs 
    this.getFullName = function () {
        return this.firstName.charAt(0).toUpperCase() + this.firstName.slice(1) +
            " " +
            this.lastName.charAt(0).toUpperCase() + this.lastName.slice(1);
    }
}
// instantiate object
const person1 = new Person('John', 'Doe', '11-23-1998', 23);
const person2 = new Person('beth', 'dawn', '5-3-1996', 44)
console.log(person2.getBirthYear());
console.log(person2.getFullName());

// Class 

class PersonClass {
    constructor(firstName, lastname, dob) {
        this.firstName = firstName;
        this.lastName = lastname;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return this.firstName.charAt(0).toUpperCase() + this.firstName.slice(1) +
            " "
            + this.lastName.charAt(0).toUpperCase() + this.lastName.slice(1);
    }
}

const personC1 = new PersonClass('John', 'Doe', '11-23-1998', 23);
const personC2 = new PersonClass('beth', 'dawn', '5-3-1996', 44)
console.log(personC2.getBirthYear());
console.log(personC2.getFullName());