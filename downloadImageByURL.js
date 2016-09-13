const request = require('request');
const fs = require("fs");

function downloadImageByURL(url, folder, path) {
  fs.access(folder, fs.F_OK, function(err){
    if (!err) {
      request(url).pipe(fs.createWriteStream(path));
    } else {
      console.log("folder to store images to does not exist!");
    }
  })
}

module.exports = downloadImageByURL;