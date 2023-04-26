#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];
const url = `https://swapi.dev/api/films/${movieId}/`;
let characters = [];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const data = JSON.parse(body);
  characters = data.characters;
  getCharacters(0);
});

const getCharacters = (index) => {
  if (index === characters.length) {
    return;
  }

<<<<<<< HEAD
request(characters[index], (error, response, body) => {
=======
  request(characters[index], (error, response, body) => {
>>>>>>> 5efbfb37bf3c5ab02e46bea1b4c2702c149059d5
    if (error) {
      console.log(error);
      return;
    }
    const characterData = JSON.parse(body);
    console.log(characterData.name);
    getCharacters(index + 1);
  });
};
