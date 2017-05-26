var fs = require('fs');
var path = require('path');

module.exports = function printFiles(dirname, ext, callback){
  fs.readdir(dirname, function(err, arr){
    if (err){return callback(err);}
    var extFilter = "."+ ext
    var extArr = [];
    for (let i=0; i<arr.length; i++){
      let test = path.extname(arr[i])
      if (test === extFilter){
        extArr.push(arr[i]);
      }
    }
    return callback(null,extArr);
  })
}
