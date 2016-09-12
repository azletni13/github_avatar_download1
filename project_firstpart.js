const request = require('request');
var fs = require("fs");

function getRepocontributors(repoOwner, repoName, callback) {
  githubRequest(`/repos/${repoOwner}/${repoName}/contributors`, function(err, response, body){
    var data = JSON.parse(body);
    for (var avatarURL of data) {
      callback(data[avatarURL].avatar_url);
    }

  });
}

function githubRequest(endpoint, callback) {
  var requestData = {
    url: `https://api.github.com${endpoint}`,
    auth: {
      bearer: '16a11abae3636eeb8a6ff33a798351855149af61'
    },
    headers: {
      'User-Agent': "requests"
    }
  }
  request.get(requestData, callback);
}


function downloadImageByURL(url, path) {
  // fs.createWriteStream(path);
  request(url).pipe(fs.createWriteStream(path));
}

getRepocontributors(`${process.argv[2]}`, `${process.argv[3]}`, function(url){
  var filename = url.substring(url.lastIndexOf("/")+1);
  console.log(filename);
  downloadImageByURL(url, `./avatarLibrary/${filename}.png`);
});



