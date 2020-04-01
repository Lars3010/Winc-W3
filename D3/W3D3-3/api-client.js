//for github: the API-KEY has been redacted. Get your own api-key here: https://www.themoviedb.org/settings/api
const API_KEY = '';

/**
 * async function that gets a list of movie genres from themoviedb and converts it into json. Returns json.
 */

const getData = async () => {
    try {
        const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
        const res = await fetch(apiUrl);
        const json = await res.json();
        return json;
    } catch(error) {
        console.log(error);
    }
}