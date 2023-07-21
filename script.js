window.onload = function() {
    // Variables for the API request
    var proxyUrl = 'https://cryptic-mountain-40626-a8a4c6663ade.herokuapp.com/';
    var targetUrl = 'https://games.planetaryannihilation.net/';

    // Make the API request
    fetch(proxyUrl + targetUrl, { 
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors'
    })
    .then(response => response.json())
    .then(data => {
        // Log the API data
        console.log('Success:', data);
    })
    .catch((error) => {
        // Log any errors
        console.error('Error:', error);
    });
}
