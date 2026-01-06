// conditionals 

// if-statememt

const subject = "Javascript"

if (true) {
    console.log(`we are going through the toppics of ${subject}`);
}





// if-else statemet

const cgpa = 7.1

if (cgpa > 3.5) {
console.log(`you've passed the sem exam. with the aggreate of ${cgpa} CGPA`);
} else {
    console.log("you've failed the sem exam");
}





// nested if-else (if-else if statement)

const temprature = 0

if (temprature === 0) {
    console.log("ice/solid");
} else if (temprature > 0 && temprature <= 25) {
    console.log("liquid");
}else {
    console.log("vapour");
}




// logicak operators in conditionals 

// logical and operator => (cond1 && cond2) <- In this case, both cond. should be true to get a output

const userLoggedIn = true
const anyPaymentMethod = false

if (userLoggedIn && anyPaymentMethod) {
    console.log("U can purchase any item from our cart");
} else {
    console.log("Default error");
}


// logical or operator => (cond1 || cond2) <- In this case,  cond. even a single correct condition can get you a output

const emailID = true
const hotmailID = false

if (emailID || hotmailID) {
    console.log("Loggged In successfully");     
} else {
    console.log("Enter correct ID");
}





