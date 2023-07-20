document.addEventListener('DOMContentLoaded', function() {
  let cors_api_url = 'https://cryptic-mountain-40626-a8a4c6663ade.herokuapp.com/https://games.planetaryannihilation.net/';
  fetch(cors_api_url, {
    method: "GET",
    headers: {
      "x-requested-with": "xhr" 
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    document.getElementById("data").innerHTML = JSON.stringify(data, undefined, 2);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
});
