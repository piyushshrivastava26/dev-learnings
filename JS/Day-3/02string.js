 /*      ----------------------------STRINGS---------------------------------

A JavaScript string stores a series of characters like "Java Script".
A string can be any text inside double or single quotes: 
    let carName1 = "Volvo XC60"; 
    let carName2 = 'Volvo XC60'; 


Here are some of the most commonly used string methods in JavaScript:

charAt()    : returns the character at a specified index in a string.
concat()    : concatenates two strings together.
indexOf()   : returns the index of the first occurrence of a specified substring within a string.
lastIndexOf(): returns the index of the last occurrence of a specified substring within a string.
length      : returns the length of a string.
match()     : searches a string for a specified pattern and returns an array of matches.
replace()   : replaces a specified substring within a string with another substring.
search()    : searches a string for a specified pattern and returns the index of the first match.
slice()     : extracts a part of a string and returns the extracted part in a new string.
split()     : splits a string into an array of substrings, using a specified separator.
substr()    : extracts a part of a string and returns the extracted part in a new string.
substring() : extracts a part of a string and returns the extracted part in a new string.
toLowerCase(): converts a string to lowercase.
toUpperCase(): converts a string to uppercase.

String Interpolation


*/

// Ways to declare a string :

const myAge = " 19 at present time"

const myName = new String('Piyush Shrivastava')


// Adding two strings :

console.log(myName + myAge);     // we're having a better way to add the string discussed as :

console.log(`Hello, My name is ${myName} and my age is ${myAge}`); // can also add in-built fn with it.


// Concatenate two strings together
let str1 = "Hello ";
let str2 = "world!";
console.log(str1.concat(str2)); // Hello world!


// Get the length of a string
let str = "Java-script";
console.log(str.length);

// Replace a substring in the string with another substring
console.log(str.replace("script", "everyone")); 


// Get the character at a specified index
console.log(str.charAt(0)); 

// Get the index for a specific character
console.log(str.indexOf('c'));



// Extract a substring from the string
console.log(str.slice(0, 5)); //  5 not included


// Split the string into an array of substrings
console.log(str.split("-")); 


// Convert the string to lowercase
console.log(str.toLowerCase()); 


// Convert the string to uppercase
console.log(str.toUpperCase()); 

// ******************************************************************************************************


// *******************SAMAJH NHI AAYA*********************




// Search for a match between a regular expression and the string
let regex = /scr/;
console.log(str.match(regex)); 


// Search for a match between a regular expression and the string
console.log(str.search(regex)); 
