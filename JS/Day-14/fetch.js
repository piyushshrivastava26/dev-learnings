
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    return data.followers;
})
.then( (followers) => {
    console.log(followers);
})
.catch((error) => console.log(error))





// promise.all
// yes this is also available, kuch reading aap b kro.