console.log("Gotta catch 'em all!");

$('form').on('submit', event => {
  //   event.preventDefault();

  const pokemonSearch = $('.pokemonSearch').val();
  const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemonSearch}/`;

  const textField = $(() => {
    const handleData = data => {
      // console.log(data.game_indices[0].game_index);

      //NAME
      const $name = $('<h2>').text('Name: ' + data.name);
      $('.container').append($name);
      $name.addClass('pokemonName');

      //Poké#
      const $pokeNum = $('<h2>').text(
        'Pokémon #' + data.game_indices[0].game_index
      );
      $('.container').append($pokeNum);
      $pokeNum.addClass('pokeNum');

      //TYPE
      const $type =
        $('<h2>').text('Type: ' + data.types[0].type.name) +
        ' / ' +
        types[1].type.name;
      $('.container').append($type);
      $type.addClass('pokemonType');

      //Weight
      const $weight = $('<h2>').text('Weight: ' + data.weight + ' hectograms');
      $('.container').append($weight);
      $type.addClass('weight');

      //Height
      const $height = $('<h2>').text('Height: ' + data.height + ' decimeters');
      $('.container').append($height);
      $height.addClass('height');

      //Sprite
      const $sprite = $('<img>');
      $sprite.attr('src', data.sprites.front_default);
      $('.container').append($sprite);
      $sprite.addClass('sprite');
      $sprite.attr('id', 'sprite');
    };
  });

  $.ajax({
    url: endpoint
  }).then(handleData);
});

//name -> name
//pokemon # -> id
//types -> types[""0""].type types[0].type.name
//weight - in hectograms -> weight
//height - in decimeters -> height
//sprites -> sprites.front_default
