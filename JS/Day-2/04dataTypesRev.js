


//  Primitive

//  7 types : String, Number, BigInt, Boolean, null, undefined, Symbol.

const score = 100
const scoreValue = 100.3
console.log(typeof scoreValue);


const isLoggedIn = false
const outsideTemp = null
console.log(outsideTemp); 

let userEmail; // o/p-> undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  // SYMBOL can be used for same same but different things

const bigNumber = 345654357665435675464654554544564544n
console.log(bigNumber);




// Reference (Non primitive) Data types : -> Array, Objects, Functions


//    i. Arrays 

let attendees = ["C", "C++", "Phyton", "JavaScript"];
console.table(attendees);

const heros = ["shaktiman", "naagraj", "doga"];
console.log(heros);


//   ii. Objects 

let firstObj = {
    type: "Luxury",
    model: 2009,
    modelName: "Ghost",
    isExist: true
}


//  iii. Functions

const sum = function addNum( ) {

    //logic for addition

    console.log(sum);
}


// https://262.ecma-international.org/5.1/#sec-11.4.3