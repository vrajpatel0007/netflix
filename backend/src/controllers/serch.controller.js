import axios from "axios";

export const searchPerson = async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/actors/get-all-filmography',
        params: {
          nconst: 'nm0001667'
        },
        headers: {
          'x-rapidapi-key': ENV_VARS.key,
          'x-rapidapi-host': ENV_VARS.host
        }
      };
      try {
          const response = await axios.request(options);
          console.log(response.data);
          res.status(200).json({data:  response.data});

      } catch (error) {
          console.error(error);
      }
}

export const searchMovie = async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-top-rated-movies',
        headers: {
          'x-rapidapi-key': ENV_VARS.key,
          'x-rapidapi-host': ENV_VARS.host
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          res.status(200).json({data:  response.data});
      } catch (error) {
          console.error(error);
      }
}

export const searchTv = async (req, res) => {
    const axios = require('axios');

    const options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/title/v2/get-interests',
      params: {
        tconst: 'tt0120338',
        first: '20',
        country: 'US',
        language: 'en-US'
      },
      headers: {
        'x-rapidapi-key': ENV_VARS.key,
        'x-rapidapi-host': ENV_VARS.host
      }
    };
    try {
        const response = await axios.request(options);
        console.log(response.data);
        res.status(200).json({data:  response.data});
    } catch (error) {
        console.error(error);
    }
}