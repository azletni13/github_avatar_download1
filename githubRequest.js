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