// to work with File System, we need a module : 'fs' 

// file handling allows you to read, write, update, rename and delete files on your system ( fs module is used for these operations)

        // => Synchronous method : blocks the code execution until the operation on the file is complete.

        // => Asynchronous method : it uses callbacks and promises and does not block code execution.


const { error } = require('console');
const fs = require('fs')


        // Creating a file 

// synchronous call
fs.writeFileSync('./text.txt', 'Writting in a .txt file through a blocking method')    // ./ <- current directory

// aSync call
fs.writeFile('./text.txt', 'replacing the sync call with non blocking method', (err) => {
        console.error(err)
        return;
})
 

        // reading a file

// sync call
const data = fs.readFileSync('./data.txt', 'utf-8')
console.log(data);

// async call 
fs.readFile('./data.txt', 'utf-8', (err, data) => {
        if (err) {
                console.log(error, err);
                return
        }
        console.log(data)
})


        // appending file/data

// sync call
// fs.writeFileSync('./contacts.txt', 'Contact details of user') <- not actrually needed 
fs.appendFileSync('./contacts.txt', 'user1 : 001122334455, \n')

// async call
fs.appendFile('./contacts.txt', `user2 : 9876543211`, (err) => {
        if (err) {
                console.error(err);
                return
        }
})


    // copying file

// sync call
fs.cpSync('./contacts.txt', 'anthrCnctDir.txt')
console.log('contacts copied successfully');



    // deleting file

// async call
fs.unlink('./anthrCnctDir.txt', (err) => {
        if (err) {
              console.error(err);
                return
        }
})



        // file statistics

fs.stat('./data.txt', (err, data) => {
        if (err) {
              console.error(err);
                return
        }
        console.log(data);
        
})


        // create foler in directory

// fs.mkdirSync('virtual folfer')
fs.mkdirSync('virtual folfer/insideVFolder.txt', {recursive : true})


        // watching file for change
        
