/* Creating an Object using Constructor function:

    i. Define the object type by writting a constructor function(use a capital initial letter).
    ii. Create an instance of the object with "new" keyword.

*/

// Creating a function for a specific object type
function Gamer(name, idNo, gameName){
    this.name = name,
    this.idNo = idNo,
    this.gameName = gameName
}

// creating an object
const firstGamer = new Gamer("Mortal", 7848468465, "Battleground")

// You can create any number of "Gamer" objects by calling to "new".
// And you can also reDefine the function to add a property.

function Gamer(name, idNo, gameName, startOfGamingYear){
    this.name = name,
    this.idNo = idNo,
    this.gameName = gameName,
    this.startOfGamingYear = startOfGamingYear
}

const aGamer = new Gamer("Jonathan", 645645645584544, "BGMI", 2018)
console.log(aGamer.name);

console.log(firstGamer.startOfGamingYear); // prints UNDEFINED, WHY?
console.log(firstGamer.gameName);

// Adding a property to the prev def obj:
aGamer.age = 18
console.log(aGamer);













// De-structuring an Object:

// WHY? 
// It allows us to write code that is shorter and more readable, since it allows us to bundle "VARIABLES" inside one object and then access the individual elements in another function without using the dot notation. 

//syntax : CONST {VARIABLES} = OBJECT NAME


const person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer"
  };
  
  // Destructure the object into variables
  const { name, age } = person;
  
  // Log the values of the variables
  console.log(name); // "John Doe"
  console.log(age); // 30



const cars = {
    toyotaModel2022: 'Camry',
    fordModel2021: 'Mustang',
    chevroletModel2019: 'Equinox', 
};

console.log(cars.chevroletModel2019); 

// const {chevroletModel2019} = cars // I can also assign any another or  shorter name to the key of the object.
const {chevroletModel2019 : model } = cars 
console.log(model);
