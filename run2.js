const run2b = require('./run2b');
var folder = process.argv[2];
var extention = process.argv[3];

var callback = function (err, data) {
  if (err){console.log(err);}
  for (let i=0; i<data.length; i++){
    console.log(data[i]);
  }
 }


run2b(folder, extention, callback);
