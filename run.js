//PROBLEM 13
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res)=>{
  res.writeHead(200, { 'Content-Type': 'application/json' })
  if(req.method !== 'GET'){
    return res.send('only GET')
  }
  let urlObj = url.parse(req.url, true);
  if(urlObj.pathname === '/api/parsetime'){
    let dateObj = new Date(urlObj.query.iso);
    let dateReturn = {
      hour: dateObj.getHours(),
      minute: dateObj.getMinutes(),
      second: dateObj.getSeconds()
    }
    res.write(JSON.stringify(dateReturn));
    res.end();
  } else if(urlObj.pathname === '/api/unixtime'){
    let unix = {unixtime: Date.parse(urlObj.query.iso)}
    res.write(JSON.stringify(unix));
    res.end();
  } else {
    return;
  }
})
server.listen(process.argv[2]);


//PROBLEM 12
// const http = require('http');
// const map = require('through2-map');
// const fs = require('fs');
// const server = http.createServer((req, res)=>{
//   if(req.method !== 'POST'){
//     return res.send('only POST');
//   }
//   req.pipe(map(function (chunk) {
//       return chunk.toString().toUpperCase();
//     })).pipe(res);
// })
// server.listen(process.argv[2]);


//PROBLEM 11
// const http = require('http');
// const fs = require('fs');
// const server = http.createServer(function callback(req, res){
//   res.writeHead(200, { 'content-type': 'text/plain' })
//   const fileStream = fs.createReadStream(process.argv[3]);
//   fileStream.pipe(res)
// });
// server.listen(process.argv[2]);

//PROBLEM 10
// const strftime = require('strftime');
// var net = require('net');
// var server = net.createServer(function listener(socket){
//   socket.end(strftime('%F %H:%M')+`\n`)
// })
// server.listen(process.argv[2]);


//PROBLEM 9
// const bl = require('bl');
// const http = require('http');
// var links = [process.argv[2],process.argv[3],process.argv[4]];
// var dataArr = [];
// var count = 0;
//
// function getData(arr, pipesFunction){
//   for(var i=0; i<arr.length; i++){
//     var httplink = arr[i];
//     pipesFunction(httplink, i)
//   }
// }
//
// function pipesFunction(httplink, index){
//   http.get(httplink, function(response){
//     response.pipe(bl(function (err,data){
//       if (err) {return console.error(err);}
//       dataArr[index] = data.toString()
//       count++
//       if(count === 3){
//         for (let i=0; i<dataArr.length; i++){
//           console.log(dataArr[i]);
//         }
//       }
//     }))
//   })
// }
//
// getData(links, pipesFunction);



//PROBLEM 8
// var bl = require('bl');
// const http = require('http');
// var link = process.argv[2];
// http.get(link, function callback(response){
//   response.pipe(bl(function (err, data) {
//     console.log(data.length);
//     console.log(data.toString());
//   }))
// })


//PROBLEM 7
// const http = require('http');
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
