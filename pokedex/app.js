console.log("Gotta catch 'em all!");

$(() => {
  const pokemonSearch = 'cubone';
  const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemonSearch}/`;

  console.log(endpoint);
});
