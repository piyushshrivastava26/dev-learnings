/* 
SCOPE : It refers to the current context of your code and determines where you can access certain variables and functions.

    i. local variavble : which is init within a scope/block/function &
                        accesible only within that block.
                        It is created when the function starts and destroys with the end of function.

    ii. global variable : it is declared into the main script and can be
                        accessed anywhere from that script onto the same page & it remains in the memory until the scrpit execution finishes.
        It's a variable declared outside the function and can be accessed anywhere in fn
*/   

let gloVar = 100

if (true) {
    let gloVar = 101
    console.log(`Inside the scope globbal variable changed to, ${gloVar}`);
    const localVar = 'Inside the local scope'
}

// console.log(localVar); ,will run only inside the defined scope as 'localVar' is a local variable operates within a block.

console.log(gloVar);    // it will excute.


// Another Ex-

function one(params) {
    myName = "Piyush"
    username = '123@abs'

    function two(params) {
        surname = "shrivastava"

        console.log(myName);
    }
    // console.log(surname);

    // two()

    console.log(username);
    
    
}
one()

// A child function can access the 'values & keys' of parent funtion, so as done by function two in the above example.



// 
// perfAddition(1) can be accesed as it is a funcction

function perfAddition(num1) {
return num1 + 1
}

perfAddition(1)
console.log(perfAddition(1));


// 
// addNUms(1) <- cant be accesed before initializing, bcz the fn is stored in a variabe and executing variable which stored fn, not the actual fn.

const addNUms = function(num) {
    return num + 1.5
}

console.log(addNUms(1));

