/*      OBJECTS can be created in two ways:
             i. Object Literal Method
             ii. Constructor Method
             ii. Singelton -> Single objects 
*/ 

// singleton 
Object.create

// const newUser = Object.create
// const newUser = new Object()
const newUser = {}

newUser.id = "JavaScript"
newUser.password = "MDN"
newUser.name = "Piyush"
newUser.email = "js@Headers.com"
newUser.isLoggedIn = false

// console.log(newUser);


const anotherUser = Object.create(null)

anotherUser.id = "C++"
anotherUser.password = "MDN"
anotherUser.userName = {
    name1: {
        userFullName: {
            firstName: "Piyush",
            lastName: "Shrivastava"
        }
    }
}
anotherUser.email = "js@c++@headquarters.com"
anotherUser.isLoggedIn = true

// console.log(anotherUser);
// console.log(anotherUser.userName.name1.userFullName.firstName);
// console.log(anotherUser.userName.name1.userFullName.lastName);


// CONCATINATING TWO OR MORE OBJECTS:
const LCAlphabets = {
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd'
};

const UCAlphabets = {
    5: 'A',    // variable  names should always be in quotes
    6: 'B',     // keys name shouldn't be same of both obj's
    7: 'C',
    8: 'D'
};

// const alphabet = { LCAlphabets, UCAlphabets }; // this method does not combine obj's in a single obj.

const alphabet = Object.assign({}, LCAlphabets, UCAlphabets)
console.log(alphabet);

// Another metod to combine obj's:
const combAlphabhets = {...LCAlphabets, ...UCAlphabets}
console.log(combAlphabhets);



const cars = {
    car1: {
        brand: 'Toyota',
        model: 'Camry',
        year: 2022,
        color: 'Silver',
        mileage: 15000
    },
    car2: {
        brand: 'Ford',
        model: 'Mustang',
        year: 2021,
        color: 'Red',
        mileage: 18000
    },
    car3: {
        brand: 'Chevrolet',
        model: 'Equinox',
        year: 2019,
        color: 'Black',
        mileage: 25000
    }
};

console.log(cars.car2.brand);


console.log(Object.keys(cars));  //returns an array
console.log(Object.values(cars)); // return an array having obj within

console.log(Object.entries(cars));



console.log(Object.keys(UCAlphabets));  
console.log(Object.values(UCAlphabets)); // 103 & 104 returns an array

console.log(Object.entries(UCAlphabets));


//  There is also exist a property to check that whether a key is present in the object or not:

console.log(cars.hasOwnProperty('car3'));   // returns an boolean expression
