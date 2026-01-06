/*

When an variable is declared, it takes space in memory. And the that memory is divided into two types :
    i.  Stack
    ii. Heap

    JS uses a garbage collector to manage memory and ensure that developers do not need to manually allocate or de-allocatememory

STACK : It is a data structure used to store static data(all primitive data types). 
        Static data refers to data whose size is known  by the engine at the compile time. 
        A fixed amount of memory is allocated for static data. 


HEAP : It is used to store functions and objects(all reference DT).
       It's size is also known  by the engine at the compile time. 
       In heap, the engine does not allocatea a fixed amt of memory. Instead, it allocates more space as per required. 

       The object gets created in heap but a reference is given to it in the stack.

*/

// Example for stack :

let myName = "PiyushSH."
console.log(myName);

let hisName = myName

hisName = "PiyushGoyal"
console.log(hisName);

// Here, the variable you get is actually the copy of actual declaration/init and it's another identity allocated to it, it does change in current variable but not in the parent variavle, which gets stored in stack memory



// Example for heap :

let person1 = {
    person1Name: "Ram",
    fatherName: "Dashrat",
    motherName: "Kaushalya"
}

let person2 = person1

person2.fatherName = "Ravana"

console.log(person1.fatherName);
console.log(person2.fatherName);    