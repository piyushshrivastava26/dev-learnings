/* MAPS 
    The MAPS object holds the key-value pair and remembers the original order of insertion.
    Maps does not count the same "KEY" pair twice whereas same "VALUE" pairs can Worker. 
    A Map's keys can be any value (including functions, objects, or any primitive).	
    The keys of an Object must be either a String or a Symbol.
*/


const aMap = new Map

// To push a key-value pair in map, use ".set"
aMap.set("India", "New Delhi")
aMap.set("UK", "London")
aMap.set("Germany", "Denmark")
aMap.set("Bharat", "New Delhi")

// console.log(aMap);

for (const map of aMap) {
    // console.log(map);  // This way the key-value gets into an array, but map is an object
}

for (const [key, value] of aMap) {
    // console.log(key, ":", value);
}

// for-in loop on map:
for (const key in aMap) {
    console.log(aMap[key]);
}