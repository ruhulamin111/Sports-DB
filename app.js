// search method 
document.getElementById('search-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const inputValue = document.getElementById('input-field').value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
})
