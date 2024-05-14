#!/usr/bin/node
/* prints the number of tasks completed by a user. */

const request = require('request');
const url = process.argv[2];

request(url, (err, response, body) => {
  if (err) {
    console.log(err);
  }
  const tasks = JSON.parse(body);
  const dict = {};
  for (const task of tasks) {
    if (task.completed === true) {
      if (task.userId in dict) {
        dict[task.userId]++;
      } else {
        dict[task.userId] = 1;
      }
    }
  }
  console.log(dict);
});
