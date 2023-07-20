<!DOCTYPE html>
<html>
<head>
  <!-- Other head elements go here -->
</head>
<body>
  <!-- Body elements go here -->

  <script>
    // JavaScript code goes here
    fetch('https://cryptic-mountain-40626-a8a4c6663ade.herokuapp.com/https://games.planetaryannihilation.net/', {
        headers: {
            'x-requested-with': 'xhr' 
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  </script>
</body>
</html>

