/*                        JavaScript Type Conversion
JavaScript variables can be converted to a new variable and another data type:

    i.  By the use of a JavaScript function
    ii. Automatically by JavaScript itsel



*/

//      
let score = '3'
console.log(score);
console.log(typeof (score));

// The global method "Number()" converts a variable (or a value) into a number.
let valueInNum = Number(score)

console.log(typeof valueInNum);
console.log(valueInNum);

/* If the input given in score is like "65a", so the O/P 'll be "NaN"("65a" -> NaN)
NaN => "Not a Number"

If the I/P is boolean, then O/P 'll be (true -> 1) & (false -> 0)


The unary '+' operator can be used to convert a variable to a number:
If the variable cannot be converted, it will still become a number, but with the value NaN (Not a Number)*/

let y = "5";      // y is a string
let x = + y;      // x is a number by its dataType.

console.log(x);



let takeInput = "2"
console.log(typeof takeInput);

let booleanValue = Boolean(takeInput)

console.log(typeof booleanValue);
console.log(booleanValue);

/*
0 or natural no.-> false
1 -> true

In case of string:
"" -> true 
"Any Decl." -> false
*/

let num = 10
let changednum = num.toExponential(); 
console.log(changednum);

// THE OP. IS AS THE EXPONENTIAL IS NOT DEFINED, WHY ?
