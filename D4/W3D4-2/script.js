const button = document.getElementById('action-button');
const container = document.getElementById('content-container');
const input = document.getElementById('text-input');

const clearContainer = () => {
    container.innerHTML = "";
}

const quotesToDom = (data) => {
    clearContainer();
    data.map(item => {
        const quote = document.createElement('blockquote');
        const textnode = document.createTextNode(item.value);
        quote.appendChild(textnode);
        quote.classList.add('quote');
        container.append(quote);
    })
}

const handleChangeEvent = async (event) => {
    try {
        const res = await getSearchQuery(event.target.value);
        const quotes = res._embedded.quotes;
        quotesToDom(quotes);
    } catch (err) {
        console.log(err);
    }
}

const getSearchQuery = async (query) => {
    try {
        const res = await fetch(`https://tronalddump.io/search/quote?query=${query}`, {method: 'GET'});
        const json = await res.json();
        console.log(json);
        return json;
    } catch (err) {
        console.log(err);
    }
}


const getRandomQuote = async () => {
    try{
        const res = await fetch('https://tronalddump.io/random/quote', {method: 'GET'});
        const json = await res.json();
        clearContainer();
        const quote = document.createElement('blockquote');
        const textnode = document.createTextNode(json.value);
        quote.appendChild(textnode);
        quote.classList.add('quote');
        container.append(quote);
    } catch(err) {
        console.log(err);
    }
    
}

button.addEventListener('click', getRandomQuote);
input.addEventListener('change', () => handleChangeEvent(event));