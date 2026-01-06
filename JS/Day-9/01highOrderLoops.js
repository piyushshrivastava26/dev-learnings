
// for of loop
{

const cleanestCities = ["Indore", "New York", "London", "Hong Kong"]

cleanestCities.push("NCR")

for (const city of cleanestCities) {    // city is a iterator, iterates on the every element of array.
    console.log(city);
}

}

// for-of loop on Objects :
{

const authUser = {
    "CheckName": "Name",
    "CheckPhoneNo": 108,
    "VerifiryBiometrics": true,
    "VerifyNationality": "Indian"
}

for (const userVerification of authUser) {
    console.log(userVerification);  // "authUser" is not iteratable, compiler responds. 
}

}

// for-in loop on obj :
{

for (const key in authUser) {
        // console.log(key);                 <- for keys 
        // console.log(authUser[key]);      <- for values
}

// for in loop on arrays :

const cricTeams = ['IND', 'ENG', 'AUS', 'AFG', 'SA', 'PAK', 'IRE', 'OMAN', 'BAN', 'SL', 'USA']

for (const key in cricTeams) {
    // console.log(key);   // by default, the keys of arrays are numbers starts with 0.
    console.log(cricTeams[key]);    // this will print the value of keys.
    
}

}




// for-each loop :
{
    
const evenNo = [0,2,4,6,8]


evenNo.forEach(element => {         // can use Arrow Fn.
    console.log(element);
});

// anotherWay
const webs = ["Surface Web", "Deep Web", "Dark Web"]

webs.forEach(function (webNames) {
    console.log(webNames);
})


//  for-each loop on Arrays handling objects:

const myProjects = [
    {
        projectName: "Amplitude",
        techStack: "HTML,CSS,JS"
    },
    {
        projectName: "Portfolio",
        techStack: "HTML,CSS,JS"
    },
    {       
        projectName: "E-Commerce",
        techStack: "MERN"
    }
]

myProjects.forEach( (Projects) => {console.log(Projects.projectName);} )

}