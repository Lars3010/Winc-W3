/**
 * Function that gets waits for the data from api-client.js. Returns a promise.
 */

const getAsyncData = async () => {
    const data = await getData();
    console.log('Here is the data:', data);
}

getAsyncData();