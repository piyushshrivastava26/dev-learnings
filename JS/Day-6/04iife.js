/*           Immediately Invoked Function Expressions (IIFE)

An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. 
The name IIFE is promoted by Ben Alman.
It is a design pattern which is also known as a Self-Executing Anonymous Function.

*/

/*
WHY USE IIFE OVER REGULAR FUNCTIONS ?
    IIFEs prevent pollution of the global JS scope. 
    In a traditional function, if you create a variable within the function, it is accessible in the global object. If you define a variable in an IIFE, it is accessible only directly within the function.
*/

// SYNTAX

(function () {
    // …
  })();
  // semi-colon is used to terminate the fn.

  (() => {
    // …
  })();
  

  (async () => {
    // …
  })();


  // Example - 


( () => {
  console.log('CONNECTED TO SERVER');
})();

((serverName) => {
  console.log(`Connected to ${serverName} live server`);
  
})('node.js');


// /Named IFEE -

(function namedIFEE() {
  console.log(`this is an example of a named IFEE`);
  
}) ()
   

