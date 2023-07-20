fetch('https://your-app-name.herokuapp.com/https://games.planetaryannihilation.net/')
    .then(response => response.json())
    .then(data => {
        // Get the div where we will display the game data
        const gameDataDiv = document.getElementById('game-data');

        // Iterate over each game in the data
        data.Games.forEach(game => {
            // Check if the game is in lobby
            if(game.GameServerState === "lobby") {
                // Parse the TitleData into a JSON object
                const titleData = JSON.parse(game.TitleData);

                // Get the creator, spectators and player count from the TitleData
                const creator = titleData.creator;
                const spectators = titleData.spectator_names;
                const currentPlayers = titleData.players;
                const maxPlayers = titleData.max_players;

                // Create a new div for this game
                const gameDiv = document.createElement('div');

                // Create a new text node with the game details
                const gameText = document.createTextNode(`Game Mode: ${game.GameMode}, 
                                                         Creator: ${creator}, 
                                                         Players: ${currentPlayers.length}/${maxPlayers}, 
                                                         Spectators: ${spectators.join(', ')}`);

                // Add the text to the game div
                gameDiv.appendChild(gameText);

                // Add the game div to the main game data div
                gameDataDiv.appendChild(gameDiv);
            }
        });
    })
    .catch(error => console.error('Error:', error));
