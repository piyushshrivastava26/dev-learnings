/*                              ************* "THIS" KEYWORD **************


In an object method, this refers to the object.
Alone, this refers to the global object.

In a function, this refers to the global object.
In a function, in strict mode, this is undefined.

In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object

The value of this depends on in which context it appears: function, class, or global

*/
/*
function getThis() {
    return this;
}
  
  const obj1 = { 
    name: "obj1" 
}

  const obj2 = { 
    name: "obj2" 
}
  
  obj1.getThis = getThis;
  obj2.getThis = getThis;
  
  console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
  console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }
*/  


// OBJECTS: "this" in objects is used to refer the current context

const newUser = {
    username: "Piyush",
    uniqueID: 889955,
    welcomeGift: function () {
        console.log(`${this.username}, get your signing bonus by entering your ${this.uniqueID}`);

        console.log(this); // gives the details of obj, it is in.
    }
}

// function call
newUser.welcomeGift()

// changing username
newUser.username = "Hitesh"

// again calling fn inside of object to see changes
newUser.welcomeGift()

console.log(this);  // {empty object} <- current context is empty as we are in the node enviroment
// the global object inside browser is "Window Object" 



// FUNCTION

function one () {
    console.log(globalThis);
}
// one()

function two () {                   // alter -> const anyFunction - function two () {
    const name = "Vidyut"
    console.log(name);
}
two()  





/*                ************************* ARROW FUNCTION *******************************

Arrow functions were introduced in ES6.
Arrow functions allow us to write shorter function syntax:
you have to hold arrow function into a variable.

*/

let myFunction = (a, b) => a * b;
console.log(myFunction(9, 8));


const chaiAndCode =  () => {
    console.log("JavaScript");
}
chaiAndCode()


// const findModulus = (num1, num2) => {return num1 % num2}

// const findModulus = (num1, num2) => num1 % num2

const findModulus = (num1, num2) => (num1 % num2)   // known as Implicit return

console.log(findModulus(10, 3));


const objFunction = () => ({username1: "Piyush", age: 18})
console.log(objFunction());



    // NOTE: In arrow fn, THIS always refers to the object that defines it.

/*
    🛑 When NOT to use arrow functions:

    In object methods (when you need this to refer to the object)
    In constructors (arrow functions can’t be used as constructors)
    
    ✅ When to use arrow functions:
    In callbacks (like .map(), .forEach())
    When you want to preserve outer this (like in setTimeout, event handlers in classes)
    
*/  