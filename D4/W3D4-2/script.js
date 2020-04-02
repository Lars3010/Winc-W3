const button = document.getElementById('action-button');
const container = document.getElementById('content-container');
const input = document.getElementById('text-input');

const quotesToDom = (data) => {
    data.map(item => {
        const quote = document.createElement('blockquote');
        const textnode = document.createTextNode(item.value);
        quote.appendChild(textnode);
        quote.classList.add('quote');
        container.append(quote);
    })
}

const handleChangeEvent = async (event) => {
    const res = await getSearchQuery(event.target.value);
    const quotes = res._embedded.quotes;
    quotesToDom(quotes);
}

const getSearchQuery = async (query) => {
    const res = await fetch(`https://tronalddump.io/search/quote?query=${query}`, {method: 'GET'});
    const json = await res.json();
    console.log(json);
    return json;
}


const getRandomQuote = async () => {
    const res = await fetch('https://tronalddump.io/random/quote', {method: 'GET'});
    const json = await res.json();
    const quote = document.createElement('blockquote');
    const textnode = document.createTextNode(json.value);
    quote.appendChild(textnode);
    quote.classList.add('quote');
    container.append(quote);
}

button.addEventListener('click', getRandomQuote);
input.addEventListener('change', () => handleChangeEvent(event));