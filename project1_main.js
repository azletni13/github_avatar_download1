const request = require('request');
const downloadImageByURL = require("./downloadImageByURL");
const getRepocontributors = require("./getRepocontributors");

//checks if correct amount of arguments are used
if (process.argv.length === 4) {
  getRepocontributors(process.argv[2], process.argv[3], function(url){

    var filename = url.substring(url.lastIndexOf("/")+1);

    downloadImageByURL(url, './avatarLibrary', `./avatarLibrary/${filename}.png`);
  });
} else {
    throw "incorrect number of arguments, you ";
};

// I know that there is a different way to do this! :)
// next time I think I would modularization the callback

// Through writing this and then realizng afterwards that it is difficult
//follow, I learned that I should have probably wrote it more procedurally as opposed to nested callbacks