console.log("Gotta catch 'em all!");

$(() => {
  const handleData = data => {
    // console.log(data.game_indices[0].game_index);

    //NAME
    const $name = $('<h2>').text('Name: ' + data.name);
    $('.results').append($name);
    $name.addClass('pokemonName');

    //Poké#
    const $pokeNum = $('<h2>').text('Pokémon #' + data.id);
    $('.results').append($pokeNum);
    $pokeNum.addClass('pokeNum');

    //TYPE
    const $type = $('<h2>').text(
      'Type: ' + data.types[0].type.name
    ); /* + ' / ' + data.types[1].type.name
    );*/
    $('.results').append($type);
    $type.addClass('pokemonType');

    //Weight
    const $weight = $('<h2>').text('Weight: ' + data.weight + ' hectograms');
    $('.results').append($weight);
    $type.addClass('weight');

    //Height
    const $height = $('<h2>').text('Height: ' + data.height + ' decimeters');
    $('.results').append($height);
    $height.addClass('height');

    //Sprite
    const $sprite = $('<img>');
    $sprite.attr('src', data.sprites.front_default);
    $('.results').append($sprite);
    $sprite.addClass('sprite');
    $sprite.attr('id', 'sprite');
  };

  $('form').on('submit', event => {
    $('.results').empty();
    event.preventDefault();

    const pokemonSearch = $('.pokemonSearch').val();
    const actualSearch = pokemonSearch.toLowerCase();
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${actualSearch}/`;

    $.ajax({
      url: endpoint
    }).then(handleData);
  });
});

//name -> name
//pokemon # -> id
//types -> types[""0""].type types[0].type.name
//weight - in hectograms -> weight
//height - in decimeters -> height
//sprites -> sprites.front_default
