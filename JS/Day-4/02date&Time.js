

let todaysDate = new Date() // 'todaysDate' is an instance of object 'new Date'

console.log(todaysDate);

console.log(todaysDate.toString());


console.log(todaysDate.toTimeString());


console.log(todaysDate.toDateString());


console.log(todaysDate.toLocaleString()); // can be divided ind. into date & time by putting in between Locale & String




// 'Typeof' of 'Date'
console.log(typeof todaysDate); // "Date" is an onject, which creates its instance and take space in heap.




// Another ways to declare a date & time 

let initDates = new Date("01-26-2024")
let initDate = new Date(2024, 0, 26) // month starts with 0, if i/p as in an array
console.log(initDate.toLocaleString());

let anotherDate = Date(2024, 0, 26, 13, 59) // you can remove "new" to just date to create an inst. of it.
console.log(anotherDate.toLocaleString());



//  *** TIME-STAMPS ***

let myTimeStap = Date.now()
console.log(myTimeStap); // Gives a millisecond value of current time

console.log(initDates.getTime());

// Convert milliSec into Seconds :
console.log(Math.floor(Date.now()/1000));


let myDate = new Date()
console.log(myDate);

console.log(myDate.getDate());
console.log(myDate.getMonth() + 1);
console.log(myDate.getFullYear());
console.log(myDate.getDay().toString());

// We can also use string interpolation to print string using backticks 
`today's date is ${myDate.getDate()} and the time is ${myDate.getTime()}`



// .toLocaleString() : In this method, we can create an object use multiple parameters by  defining them.

let hindi = myDate.toLocaleString('hi-IN', {
    dateStyle : "full"  // options : full, long, medium, short
})

console.log(hindi)


let english = myDate.toLocaleString('en-US', {  // can use default too
    weekday : "long",
    day : "numeric", 
    month : "long",
    year : "numeric"
})

console.log(english)