const request = require('request');
const downloadImageByURL = require("./downloadImageByURL");
const getRepocontributors = require("./getRepocontributors");

//checks if correct amount of arguments is used
if (process.argv.length === 4) {
  getRepocontributors(process.argv[2], process.argv[3], function(url){

    var filename = url.substring(url.lastIndexOf("/")+1);

    downloadImageByURL(url, './avatarLibrary', `./avatarLibrary/${filename}.png`);
  });
} else {
    throw "incorrect number of arguments";
};

