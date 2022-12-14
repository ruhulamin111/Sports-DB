// search method 
document.getElementById('search-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const input = document.getElementById('input-field');
    const inputValue = input.value;
    if (inputValue === '') {
        alert('Please enter a valid name')
        return;
    }
    else if (isNaN(inputValue) !== true || inputValue < 1) {
        alert('Please enter a player name')
        return;
    }
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => searchResult(data.player))
    input.value = '';
})

// search result function 
function searchResult(players) {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = '';
    const player = players.slice(0, 12).forEach(player => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card h-100">
        <img src="${player.strThumb}" class="card-img-top" alt="Image are not available">
        <div class="card-body">
        <h5 class="card-title">${player.strPlayer}</h5>
        <p class="card-text">${player.strDescriptionEN.slice(0, 150)}</p>
        </div>
        <div class="card-footer">
           <a href="#" onclick="details(${player.idPlayer})" class="btn btn-primary">More Details</a>
        </div>
        </div>
        `;
        mainContainer.appendChild(div);
        const detailsContainer = document.getElementById('details-container');
        detailsContainer.innerHTML = '';
    })
}

// details funtion 
function details(playerId) {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${playerId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.players[0]))
};

// display details 
function displayDetails(player) {
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card" style="width: 30rem;">
    <img src="${player.strCutout}" class="card-img-top" alt="...">
    <div class="card-body">
    <p class="card-text"><span class="fw-bold">Name: </span> ${player.strPlayer}</p>
    <p class="card-text"><span class="fw-bold">Place of Birth: </span> ${player.strBirthLocation}</p>
    <p class="card-text"><span class="fw-bold">Nationality: </span> ${player.strNationality}</p>
    <p class="card-text"><span class="fw-bold">Position: </span> ${player.strPosition}</p>
    <p class="card-text"><span class="fw-bold">Player of Team: </span> ${player.strTeam}</p>
    <p class="card-text"><span class="fw-bold">Twitter: </span> ${player.strTwitter}</p>
    <p class=" card-text"><span class="fw-bold">Description: </span> ${player.strDescriptionEN.slice(0, 300)}</p>
    </div>
    </div>
    `;
    detailsContainer.appendChild(div);
};

