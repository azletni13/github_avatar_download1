var request = require("request");


function printHTML() {
  request("http://www.google.com", function(err, response, body) {
    if (err) {
      throw err;
    }
    console.log(`Response Body: ${body}`)
  });
}

printHTML();