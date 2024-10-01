import axios from "axios";

export const movies = async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/v2/search',
        params: {
          searchTerm: 'tom cruise',
          type: 'NAME',
          first: '20',
          country: 'US',
          language: 'en-US'
        },
        headers: {
          'x-rapidapi-key': '06dd3d8181msh9922031bf5a0425p14476ejsn9788cc426d01',
          'x-rapidapi-host': 'imdb8.p.rapidapi.com'
        }
      };

      try {
          const response = await axios.request(options);
          console.log(response.data.data.mainSearch.edges);
          res.status(200).json({ success: true, data: response.data.data.mainSearch.edges });
      } catch (error) {
          console.error(error);
      }
};

export const getMovieTrailers = async (req, res) => {
    const axios = require('axios');

    const options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/title/v2/get-trailers',
      params: {
        tconst: 'tt0120338'
      },
      headers: {
        'x-rapidapi-key': '06dd3d8181msh9922031bf5a0425p14476ejsn9788cc426d01',
        'x-rapidapi-host': 'imdb8.p.rapidapi.com'
      }
    };
    try {
        const response = await axios.request(options);
        console.log(response.data);
        res.status(200).json({ success: true, data: response.data});
    } catch (error) {
        console.error(error);
    }
};