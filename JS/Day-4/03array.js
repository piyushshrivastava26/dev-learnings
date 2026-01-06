var x = 3;
var y = x++;
y += 1;

console.log(y);


// **************** ARRAY *****************

const arr = [1, 2, 3, 4, 5, 6]
console.log(arr);

arr.push(10)  // "push" is used to add elements in array 
arr.push(100)  

arr.pop() // "pop" doesn't take any input & is used to eliminate the last elements in array
console.log(arr);

const brr = [10, 30, 20, true, false, "JavaScript"]

// Accessing the elements in an Array :
console.log(brr[0]);  // [index] first element is always at 0th index and last at length-1 index
console.log(brr[brr.length-1]); 


brr.unshift(0)  // creates a unshift array in the start, mostly not taken in use asitis a time consuming operation (for vey long arrays)
brr.shift()     // removes the first elememt of an array.
console.log(brr);


console.log(brr.includes(20)); // for numeric & boolean  -> true & for string -> false
console.log(brr.indexOf(true));  // WHY NOT GIVIVNG CORRECT INPUT WITH STRINGS ?

.find()
.filter()



//  Concept of "Slice" amd "Splice" :

const newArr = [10, 30, 20, true, false, "JavaScript"]
console.log("myArray", newArr);

// Slice
const slicedArr = newArr.slice(0,3)
console.log("Sliced", slicedArr);

// Splice
const splicedArr = newArr.splice(0,3)
console.log("SplicedArray", splicedArr);

// splice can also used to insert elements
const arra = [1, 2, 5];
arra.splice(2, 0, 3, 4); // At index 2, remove 0 items, insert 3 and 4
console.log(arra); // [1, 2, 3, 4, 5]


// THE ACTUAL DIFFERENCE B/W 'SLICE' & 'SPLICE' IS THAT THE SPLICE REMOVE THE SPLICED PART OF ARRAY WHEREAS THE SLICE DOESN'T MAKE ANY CHANGES IN THE ORIGINAL ARRAY.












const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator

// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"})) // interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));