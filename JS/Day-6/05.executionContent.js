// execution context : whenever we create a function and run it it creates a IMAGINARY CONTAINER at the time of exection which contains mainly three things :

    // 1) Variables
    // 2) Functions inside that parent function
    // 3) lexical enviroment of the function 


function abcd (){
    let a = 1;

    function efg(){
        let b = 2;
    }
}

// execution context of abcd has :

//     var a 
//     function efg 
//     function xyz

//     lexical enviroment


// LEXICAL ENVIROMENT : ek chart jisme ye likha hota hai ki ek particular function kin cheejo ko access kr skta hai and kinko nhi 

// IT HOLDS IT'S SCOPE AND SCOPE CHAIN