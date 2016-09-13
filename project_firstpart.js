const request = require('request');
var fs = require("fs");
var dotEnv = require('dotenv').config();

function getRepocontributors(repoOwner, repoName, callback) {
  githubRequest(`/repos/${repoOwner}/${repoName}/contributors`, function(err, response, body){
    var data = JSON.parse(body);
    console.log(data)
    for (var avatarURL of data) {
      callback(data[avatarURL].avatar_url);
    }

  });
}

function githubRequest(endpoint, callback) {
  var requestData = {
    url: `https://api.github.com${endpoint}`,
    auth: {
      bearer: process.env.GITHUB_TOKEN
    },
    headers: {
      'User-Agent': "requests"
    }
  }
  request.get(requestData, callback);
}


function downloadImageByURL(url, path) {
  request(url).pipe(fs.createWriteStream(path));
}

getRepocontributors(`${process.argv[2]}`, `${process.argv[3]}`, function(url){
  var filename = url.substring(url.lastIndexOf("/")+1);
  console.log(filename);
  downloadImageByURL(url, `./avatarLibrary/${filename}.png`);
});



