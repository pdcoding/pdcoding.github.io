console.log("Gotta catch 'em all!");

const pokemonSearch = 'charizard';
const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemonSearch}/`;

// const typeSearch = 'flying';
// const endpoint = `https://pokeapi.co/api/v2/${typeSearch}/`;

$(() => {
  //   console.log(endpoint);

  //   const data = $.ajax({
  //     url: endpoint
  //   });

  const handleData = data => {
    console.log(data.types[0].type.name);
    // console.log(data.type);

    const $name = $('<h2>').text(data.name);
    $('.container').append($name);
    $name.addClass('pokemonName');

    const $type = $('<h2>').text(data.type);
    $('.container').append($type);
    $name.addClass('pokemonType');
  };

  $.ajax({
    url: endpoint
  }).then(handleData);
  // const
});

//name -> name
//pokemon # -> id
//types -> types[""0""].type types[0].type.name
//weight - in kg -> weight
//height - in cm -> height
//sprites -> sprites.front_default
