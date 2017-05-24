//PROBLEM 4
var fs = require('fs');
var file = fs.readFile(process.argv[2], 'utf8', function callback(err, data) {
  if (err){
    return 'error';
  }
  var strings = data.toString().split('\n')
  console.log(strings.length-1);
  });



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
