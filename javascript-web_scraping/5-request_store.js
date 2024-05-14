#!/usr/bin/node
/* That gets the contents of a webpage and stores it in a file. */

const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const filePath = process.argv[3];

request(url, (err, response, body) => {
  if (err) {
    console.log(err);
  }
  fs.writeFile(filePath, body, 'utf8', (err) => {
    if (err) {
      console.log(err);
    }
  });
});
