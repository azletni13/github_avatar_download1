const request = require('request');
const fs = require("fs");
var dotEnv;


function githubRequest(endpoint, callback) {
  // check if .env file exists and throw error otherwise
  fs.access(".env", fs.F_OK, function(err){
    if(err) {
      throw ".env does not exist";
    } else {

      dotEnv = require('dotenv').config();

      // do the request
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
  });
}

module.exports = githubRequest;