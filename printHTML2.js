

var http = require("http");

function printExampleHTML(callback) {
  var requestOptions = {
  host: "google.com",
  path: "/"
};

  http.get(requestOptions, (response) => {    // HTTP Response Callback

    response.setEncoding("utf8");             // Use UTF-8 encoding

    response.on("data", callback);

    // console.log(response.headers); // prints header of response

    response.on("end", function() {                // On Data Completed
      console.log("Response stream complete.");
    });

});
}

function hollaback (data) {
  console.log(data);
}

printExampleHTML(hollaback);