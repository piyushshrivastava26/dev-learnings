/*
WHAT IS MODULE ?
A module is a single JavaScript file that encapsulates a specific piece of functionality. It can export variables, functions, or objects to be used in other parts of your application.

function.js working as amodule to main.js

const Function = require('./function') => './function' is a module built by me

*/


function add(a, b) {
    return a + b
} 

function multiply(c, d) {
    return c * d
}



module.exports = {
    firstFn : add,
    secondFn : multiply
}

// alter to module.exports 
// exports.mPercent = (e, f) => e % f