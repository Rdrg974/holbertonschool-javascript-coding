#!/usr/bin/node
/* prints the number of movies
where the character "Wedge Antilles" is present.
*/

const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/people/18/';

request(url, (err, response, body) => {
    if (err) {
        console.log(err);
    } else {
        const films = JSON.parse(body).films;
        console.log(films.length);
    }
});
