/*  
    SWITCH STATEMENT : 
*/

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