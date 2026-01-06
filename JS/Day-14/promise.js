/*
What is promsise ?
    => Promisse is an object(constructor) that represents the eventual completion or failure of an async operation and its resulting value. 

    Promise has one of three three states :

        i. PENDING : It is the initial state, neither fulfilled nor rejected.

        ii. FULFIULLED : It means that the operation was completed successfully.

        iii. REJECTEED : It means that the operation failed.

What does promsise do ?
    => It performs async tasks.
    => Makes DB calls, Cryptography calls, network calls.

*/


// Let's start with creating promises 

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('started with creating a promise');
        resolve()
    },1000)
}).then(function (params) {
    console.log('consumed the initited promsise');
    
})

// promsie2

const promsiseTwo = new Promise ( (resolve, reject) => {
    setTimeout(function () {
        console.log('promiseTwo created');
        resolve({
            name: 'monsteerMind',
            age : 19,
            email : 'monssteermind@grinding.com'
        })
    },2000)
})
promsiseTwo.then(function (userData) {
    console.log(userData);
    return userData.name
}).then(function (name) {
    console.log(name);
})


// promise3
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({LangName : 'JS', codeEditor : 'VS Code', year : 2024})
        } else {
            reject('Error 404 : Something went wrong with code')
        }
    }, 3000)
})
promiseThree
.then( (objUserData) => {   // .then() responses as JSON
    console.log(objUserData);
    return objUserData.codeEditor
})
.then( (codeEdito) => {
    console.log(codeEdito);
})
.catch( (someErr) => {    //.catch() schedules the function when the promise is rejected
    console.log(someErr);
})
.finally( () => {     //  .finally() schedules a fn to be called when the promise is settled(either fulfilled OR rejected)
    console.log('This runs no matter what !');
})


/*
    ASYNC & AWAIT 

    ASYNC fn : 
*/

// promise4
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = false;
        if (!err) {
            resolve({
                make: 'Toyota',
                model: 'Camry',
                year: 2022,
                color: 'silver',
                mileage: 15000,
                features: ['automatic transmission', 'GPS navigation', 'leather seats'],
                owner: {
                    name: 'John Doe',
                    age: 35,
                    location: 'New York'
                }
            });
        } else {
            reject('Error : Something wrong in promsie4');
        }
    }, 4000);
});

async function consumePromise4() {
    try {
        const response = await promiseFour
        console.log(response);  
    } catch (err) {
        console.log(err);

    }
}
consumePromise4()



// using fetch()