const request = require('request');
const githubRequest = require("./githubRequest");


function getRepocontributors(repoOwner, repoName, callback) {
    githubRequest(`/repos/${repoOwner}/${repoName}/contributors`, function(err, response, body){
      //checks if repo owner or repo name exist
      if (response.statusCode === 404) {
        throw "error";
      } else {

        var data = JSON.parse(body);

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