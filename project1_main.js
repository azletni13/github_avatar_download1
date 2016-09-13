const request = require('request');
var fs = require("fs");
var dotEnv = require('dotenv').config();





function downloadImageByURL(url, path) {
  request(url).pipe(fs.createWriteStream(path));
}

getRepocontributors(`${process.argv[2]}`, `${process.argv[3]}`, function(url){
  var filename = url.substring(url.lastIndexOf("/")+1);
  console.log(filename);
  downloadImageByURL(url, `./avatarLibrary/${filename}.png`);
});



