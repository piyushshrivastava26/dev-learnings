// *********************** Operations in JS ***********************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2); 
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " js"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + true + 2);
console.log(1 + 2 + "2");

console.log( (3 + 4) * 5 % 3); // Avoid these type of practices.


//direct conversion of strings to number using unary method
console.log(+true);  
console.log(+"");


let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);



// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion