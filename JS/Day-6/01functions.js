/*

function functionName(parameters){
// Define the scope
}

// calling function:
// functionName <- It is just a reference of functionName. when putting (), it becomes executable.
functionName(Arguments)

*/


// function to print the square of a number:
function findingSquare(number){
    let square = number * number 
    // return number; 
    console.log(square);
}
findingSquare(25)


// function to return the factorial of a number:
function factorialOf(number){
    if (number === 1) {
        return 1
    }
    // Recursive case: multiply the current number by the factorial of (number - 1)
    return number * factorialOf(number-1) // Functions get terminated if something has returned
}
// When a function is returned, it should be stored in a variable in order to get the o/p in terminal
const result = factorialOf(5)

// Display the result
console.log("Result: ", result);


let todaysDate = new Date()

function loginMessage(userName){  // we can also write (username == AnyDefaultName), so the if else wont count as we have a backup
    if (userName == undefined) {
        console.log("Enter the correct username");
        return;
    }
    return `${userName}, logged IN at date and time, ${todaysDate}`
}
// const message = loginMessage()  // results in "ubdefined" username
const message = loginMessage("Andrew Symons")
console.log(message);


// Write a function to calculate the price, adding into a cart section:

function addToCart_Total(...number){
    return number.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0 ) // 0 is the initialValue of accumulator
}

const cartChecklist = [99, 129, 159, 199, 229]

console.log(addToCart_Total(...cartChecklist))




// Write an object using function:

const Course = {
    name: "Supreme 2.O",
    price: 3600,
    instructor: ["Love Babbar", " Lakshya Chaudhary"]
}

function handlingObjects(anyObject){
    console.log(`${anyObject.name} is the new DSA course launched by ${anyObject.instructor.join(" and")} at the price of ${anyObject.price}`);
}

handlingObjects(Course)



// Write a function to return the ith elememt of an array:

function returnElementOfArray(anyArray, index){
    return anyArray[index]
}

const marks = [60, 75, 85, 95, 100]

const reqelement = returnElementOfArray(marks, 1)
console.log(reqelement);







// ++++++++++++++++++ interesting ++++++++++++++++++

// example of hoisting
console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)    // Because addTwo is a function expression assigned to a const var

const addTwo = function(num){
    return num + 2
}