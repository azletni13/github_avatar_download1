const request = require('request');
const githubRequest = require("./githubRequest");


function getRepocontributors(repoOwner, repoName, callback) {
    githubRequest(`/repos/${repoOwner}/${repoName}/contributors`, function(err, response, body){
      if (response.statusCode === 404) {
        console.log("error");
      } else {
        var data = JSON.parse(body);
        // console.log(data.message)
        if (data.message === 'Bad credentials') {
          throw "incorrect credentials in .env file";
        } else {
          data.forEach((avatar) =>  {
            callback(avatar.avatar_url);
          })
        }
    }
  });

}

module.exports = getRepocontributors;