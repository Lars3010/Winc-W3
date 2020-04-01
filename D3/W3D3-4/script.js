const genreListParent = document.getElementById('genres-list')
const favouriteMovieText = document.getElementById('favourite-movie');
const topTenListParent = document.getElementById('top-ten-list');
const topActionListParent = document.getElementById('top-action-list');
const yearListParent = document.getElementById('1975-list');

/**
 * This function creates a list of movie genres and adds them to the dom
 * @param {Object} data returns a json object with movie genres
 */
const addSingleMovieToDom = (data) => {
    const textnode = document.createTextNode(data.movie_results[0].title);
    favouriteMovieText.appendChild(textnode);
}

/**
 * This function creates a list of movie genres and adds them to the dom
 * @param {Object} data returns a json object with movie genres
 * @param {Object} list unordered list item to add list items to
 */
const createTopTenList = (data, list) => {
    data.forEach(item => {
        const listItem = document.createElement('li');
        const textnode = document.createTextNode(item.title);
        listItem.appendChild(textnode);
        list.appendChild(listItem);
    })
}

/**
 * This function creates a list of movie genres and adds them to the dom
 * @param {Object} data returns a json object with movie genres
 */
const createList = (data) => {
    data.genres.forEach(item => {
        const listItem = document.createElement('li');
        const textnode = document.createTextNode(`Genre naam: ${item.name}, id: ${item.id}`);
        listItem.appendChild(textnode);
        genreListParent.appendChild(listItem);
    })
}

/**
 * Function that waits for the data from api-client.js. Returns a promise.
 */

const getMovieGenres = async () => {
    try {
        const data = await getData();
        return createList(data);
    } catch(error) {
        console.log(error);
    }
}

/**
 * Function that waits for the data from api-client.js. Returns a promise.
 */

const getSingleMovie = async (id) => {
    try {
        const data = await getSingleMovieById(id);
        return addSingleMovieToDom(data);
    } catch(error) {
        console.log(error);
    }
}

getTopTen = async () => {
    try {
        const data = await getTopTenMovies();
        const getTen = data.results.splice(0,10);
        return createTopTenList(getTen, topTenListParent);
    } catch (error) {
        console.log(error);
    }
}

discoverMovie = async (year, genre, list) => {
    try {
        const data = await getDiscoverMovie(year, genre);
        return createTopTenList(data.results, list)
    } catch (error) {
        console.log(error);
    }
}

getMovieGenres();
getSingleMovie('tt6105098');
getTopTen();
discoverMovie(null, '28', topActionListParent);
discoverMovie(1975, null, yearListParent);
