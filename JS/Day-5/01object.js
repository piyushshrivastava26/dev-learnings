/*      OBJECTS : It is a type of reference datatype which stores in the heap memory
    It is used to strore various keyed conditions and their values, combined of both known as entries in obj.

OBJECTS can be created in two ways:
    i. Object Literal Method
    ii. Constructor Method
    ii. Singelton -> Single objects 



*/
    // *********************OBJECT LITERAL METHOD******************************

const firstUser = {
    name: "Piyush",
    idName: "Anonymus",
    age: 18,
    email: "piyushShrivastava22ec27@gmail.com",
    password: 1234509876,
    location: "Bareilly",
    IsLoggedIn: true,
    loggedInDays: ['Tuesday', 'Thursday','Saturday'],
    noOfDev: 1,
}
// console.log(firstUser);
// console.log(firstUser.idName);
// console.log(firstUser["loggedInDays","noOfDev"]); // Another way to print the result by, objName[keyNameOfEntry]

firstUser.password = "qwertKey"
// console.log(firstUser);



// To include a unique identity "Symbol" is used, let's use it here

const UniqueSymbol = Symbol("Key1")

const user = {
    id: "smartPerson",
    [UniqueSymbol]: "FirstUserOFMyApp", // [], the dataType of o/p will show if square brackets is not used 
    password: "Dreamer"
}

// console.log(user);
console.log(user[UniqueSymbol]);


// If you do not want to change /inclide any other entries of the object, use "freeze()" method

Object.freeze(user)

password = "qwertKey" // Passsword will not change as the object user has been freezed.
// console.log(user);





firstUser.greeting =  function(){
    console.log(`The user named ${this.name} is the first proto user with id: ${this.idName} and password: ${this.password} is logged In, BUT WHAT IS THEW USE OF FUNCTIONS IN OBJECT`);
}
console.log(firstUser.greeting());



// firstUser.greeting = function(){
//     console.log("Hello JS user");
// }
firstUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(firstUser.greeting());
console.log(firstUser.greetingTwo());   // it is logging undefined after printing because method is not returning anything.