//PROBLEM 8
var bl = require('bl');
const http = require('http');
var link = process.argv[2];
http.get(link, function callback(response){
  response.pipe(bl(function (err, data) {
    console.log(data.length);
    console.log(data.toString());
  }))
})


//PROBLEM 7
// const http = require('http');
// var fs = require('fs');
// var link = process.argv[2];
// http.get(link, function callback(response){
//   response.setEncoding('utf8');
//   response.on("data", function(data){
//     console.log(data);
//   })
// })


//PROBLEM 6
//on run2.js and run2b.js


//PROBLEM 5
// var fs = require('fs');
// var path = require('path');
// fs.readdir(process.argv[2], function callback(err, arr){
//   if (err){return 'error';}
//   var extFilter = "."+process.argv[3]
//   for (let i=0; i<arr.length; i++){
//     let test = path.extname(arr[i])
//     if (test === extFilter){
//       console.log(arr[i]);
//     }
//   }
// })


//PROBLEM 4
// var fs = require('fs');
// var file = fs.readFile(process.argv[2], 'utf8', function callback(err, data) {
//   if (err){
//     return 'error';
//   }
//   var strings = data.toString().split('\n')
//   console.log(strings.length-1);
//   });


//PROBLEM 3
// var fs = require('fs');
// var file = fs.readFileSync(process.argv[2], 'utf8');
// var strings = file.toString().split('\n')
// console.log(strings.length-1);


//PROBLEM 2
// var acc = 0;
// for (var i=2; i<process.argv.length; i++){
//     acc+=Number(process.argv[i])
// }
// console.log(acc);


//PROBLEM 1
// console.log("HELLO WORLD");
