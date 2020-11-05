const request = require ('request');
const fs = require('fs');

const input = process.argv.slice(2);
const url = input[0];
const path = input [1];

request(url,(error, response, body) => {
  if (error) return;
  if (response.statusCode !== 200) {
    console.log("something went wrong " + response.statusCode );
    return;
  }
 
  fs.writeFile(path, body, function (err) {
    if (err) throw err;
    else  console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`);

  });

 
});

