
const fs = require('fs');

// const os = require('os');
// console.log(os.cpus().length);

// 📍 Create a File with Syn , Blocking request

// fs.writeFileSync('./test.txt', 'Helo, i created by using writeFileSync');


// 📍Create file  with Async | it take call back function  | non - Blocking request

// fs.writeFile('./test.txt', 'Helo i created b using Asyn' , (err)=>{})



// 📍 To read File

// const result = fs.readFileSync('./test.txt', 'utf-8')
// console.log(result);


// 📍 it take 2 argument in call back fuction one is error and 2nd one is result that return 

// fs.readFile('./test.txt', 'utf-8', (err, result)=>{
//     if (err) {
//         console.log('Error', err);   
//     }
//     else{
//         console.log(result);
        
//     }
    
// });

// 📍 AppendFile
// fs.appendFileSync('./text.txt', 'Helo there \n')

// 📍 delete 

// fs.unlinkSync('./test.txt');

// 📍 create folder

// fs.mkdirSync('./helo');

// create a folder for server create by using module

fs.mkdirSync('./server');






