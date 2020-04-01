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

/**
 * Gets a single movie from IMDB
 * @param {STRING} id 
 */
const getSingleMovieById = async (id) => {
    try{
        const res = await fetch(`https://api.themoviedb.org/3/find/${id}?api_key=${API_KEY}&language=en-US&external_source=imdb_id`);
        const json = await res.json();
        return json;
    } catch(err){
        console.log(err);
    }
}


const getTopTenMovies = async () => {
    try{
        const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
        const json = await res.json();
        return json;
    } catch(error) {
        console.log(error);
    }
}

const getDiscoverMovie = async (year, genre) => {
    try {
        let yearUrl = '';
        let genreUrl = '';
        if(year !== undefined)
        {
            yearUrl = `&year=${year}`
        } else {
            yearUrl = '';
        }
        if(year !== undefined)
        {
            genreUrl = `&year=${year}`
        } else {
            genreUrl = '';
        }
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1${yearUrl}${genreUrl}`;
        const res = await fetch(url);
        const json = await res.json();
        return json;
    } catch (error) {
        console.log(error);
    }
}