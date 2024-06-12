
// Fetchin data from API
fetch("https://pokeapi.co/api/v2/pokemon/spongebob")
.then(response => console.log(response))
.then(data => console.log(data.id))
.catch(error => console.error(error));
                      