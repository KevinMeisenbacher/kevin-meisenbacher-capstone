const express = require('express');
const router = express.Router();
const axios = require('axios');

let num = 0;
const genres = [];

const url = `https://deezerdevs-deezer.p.rapidapi.com`;

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '9de545fbf1mshebbb2d4d28ff7dap1acaf0jsnbed8e1e631d6',
    'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
  }
};

router.get('/', (_, res) => {
  for (let i=0; i<100; i++) {
    num++;
    axios.get(`${url}/genre/${num}`, options)
    .then(response => {
        genres.push(response.data);
      })
    .then(_ => {
      res.send(genres);
      console.log(genres);
    })
    .catch(err => console.error(err));
  }
});

module.exports = router;