// search method 
document.getElementById('search-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const inputValue = document.getElementById('input-field').value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => searchResult(data.player))
})

// search result function 
function searchResult(players) {
    const mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = '';
    const player = players.slice(0, 12).forEach(player => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card h-100">
        <img src="${player.strCutout}" class="card-img-top" alt="Image are not available">
        <div class="card-body">
        <h5 class="card-title">${player.strPlayer}</h5>
        <p class="card-text">${player.strDescriptionEN.slice(0, 200)}</p>
        </div>
        <div class="card-footer">
           <a href="#" onclick="details(${player.idPlayer})" class="btn btn-primary">More Details</a>
        </div>
        </div>
        `;
        mainContainer.appendChild(div);
    })
}

// details funtion 
function details(playerId) {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${playerId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.players[0]))


}

// display details 
function displayDetails(player) {
    console.log(player)
    const detailsContainer = document.getElementById('details-container');
    detailsContainer.innerHTML = '';
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card" style="width: 30rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
    </div>
    `;
    detailsContainer.appendChild(div);
}