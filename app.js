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
    mainContainer.innerHTM = '';
    const player = players.slice(0, 12).forEach(player => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card h-100">
        <img src="${player.strCutout}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${player.strPlayer}</h5>
        <p class="card-text">${player.strDescriptionEN.slice(0, 200)}</p>
        </div>
        <div class="card-footer">
           <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        `;
        mainContainer.appendChild(div);

        console.log(player)
    })
}