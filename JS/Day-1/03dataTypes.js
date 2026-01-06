/* Data types in JavaScript define the data type that a variable can store.

JavaScript is a dynamic programming language, which means that the type of a variable is not declared and can change throughout the program. However, there are still different types of data that can be stored in variables, and these are known as data types.

There are seven primitive data types in JavaScript:

Number   : A number is a numeric value.
BigInt   : A BigInt is an integer that can be arbitrarily large.(available from ES2020)

String   : A string is a sequence of characters.
Boolean  : A boolean is a value that can be either true or false.
Symbol   : A symbol is a unique value that is used to identify an object.(available from ES2015)

Undefined: An undefined value is a value that has not yet been assigned.
Null     : A null value is a value that represents the absence of a value.




In addition to these primitive data types, there are also two non-primitive data types in JavaScript:

Object : An object is a collection of properties and methods.
Array  : An array is an ordered list of values.

*/


// To check the type of data init in a variable


let accountName = "Anonymus"
console.log(typeof accountName);


// console.log(sizeof, accountName);  //    <- genearting an error, how to identify the size of data ? & 'sizeof' is not defined ?

// after init a specific DT into a variable, it can be changed further to any other DT 
let message = "DayOne"
console.log(typeof message);

message = false
console.log(typeof (message));


console.log(typeof Number);
console.log(typeof BigInt);
console.log(typeof String);
console.log(typeof Boolean);
console.log(typeof Symbol);
            // All five of the above are of "function" type data type.





console.log(typeof undefined); // It is an undefined type DT .
console.log(typeof null); // It is an "Object" type DT, WHY ? -> will learn further

/*
 null is a primitive value, but typeof null returns "object" because of a historical bug in the first     version of JS.
 It was never fixed due to backward compatibility.

 In reality: null is not an object. It's a primitive type that represents "no value" or intentional absence.
*/



function getType(value) {
    return Object.prototype.toString.call(value)
  }
  
  console.log(getType([]));        // "Array"
  console.log(getType(null));      // "Null"
  console.log(getType(() => {}));  // "Function"
  console.log(getType(123));       // "Number"
  