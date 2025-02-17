import axios from "axios";


export const getTrendingTv = async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-most-popular-tv-shows',
        params: {
            homeCountry: 'US',
            purchaseCountry: 'US',
            currentCountry: 'US'
        },
        headers: {
            'x-rapidapi-key': ENV_VARS.key,
            'x-rapidapi-host': ENV_VARS.host
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        res.status(200).json({ data: response.data });

    } catch (error) {
        console.error(error);
    }
}


export const getTvTrailers = async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/v2/get-trailers',
        params: {
            tconst: 'tt0120338'
        },
        headers: {
            'x-rapidapi-key': ENV_VARS.key,
            'x-rapidapi-host': ENV_VARS.host
        }
    };
    try {
        const response = await axios.request(options);
        console.log(response.data);
        res.status(200).json({ data: response.data });
    } catch (error) {
        console.error(error);
    }
}



export const getTvDetails = async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/get-overview-details',
        params: {
            tconst: 'tt0944947',
            currentCountry: 'US'
        },
        headers: {
            'x-rapidapi-key': ENV_VARS.key,
            'x-rapidapi-host': ENV_VARS.host
        }
    };
    try {
        const response = await axios.request(options);
        console.log(response.data);
        res.status(200).json({ data: response.data });
    } catch (error) {
        console.error(error);
    }
}