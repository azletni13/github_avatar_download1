
function getRepocontributors(repoOwner, repoName, callback) {
  githubRequest(`/repos/${repoOwner}/${repoName}/contributors`, function(err, response, body){
    var data = JSON.parse(body);
    console.log(data)
    for (var avatarURL of data) {
      console.log(data)
      callback(data[avatarURL].avatar_url);
    }

  });
}