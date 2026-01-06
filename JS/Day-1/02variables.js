/*
In this section we are learning about variables: To declare a vaeriable "const, let & var" are taken in use and "var" is the old way of declaring a variable.

ES6 :
"const" is used to declare a constant variable.
"let" is used to declare a variable that can be changed.

"const" and "let" are braces scoped.
"const" doesn't adds itself to the window object 

WINDOW IS A BOX OF FEATURE GIVEN BY BROWSER TO USE. ex- alert, prompt, console


ES5 :
"var" is used to declare a variable that can be changed. 
"var" is a function scoped, accessible everywhere in it's parent function.   
"VAR" adds itself to the window object 

    IDENTIFIERS : An identifier is a name you choose for variables, parameters, functions, classes, etc.
    An identifiers name starts with (a-z), (A-Z), _ , $ followed by seq. of char including all uppercase and smallcase alphabhets.

*/

const accountId = 12345
// accountId = 123456;
// console.log(accountId);
// This will throw an error as we are trying to change the value of a constant variable.

let accountName = "Anonymus"
let accountEmail = "anonymus24@hacker.com"

var password = "987654321" // Prefer not to use "var" to dclare a variable, instead use "let".

accountLocation = "Bareilly"

//Updating the values inserted into the variables ecxept the const type:
accountName = "Cracker"
accountEmail = "cracker@sprinklr.com"
password = "123456789" 
accountLocation = "Hyderabad";

// Although the semicolon (;) is optional, you should always use it to terminate a statement.


console.log(accountId);
console.log(accountName);
console.log(accountEmail);
console.log(password);
console.log(accountLocation);

// to print the values given init variables into tabular form:
console.table([accountId, accountName, accountEmail, password, accountLocation]); 


