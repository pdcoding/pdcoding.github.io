console.log("Gotta catch 'em all!");

$(() => {
  const handleData = data => {
    // console.log(data.game_indices[0].game_index);

    //Poké#
    const $pokeNum = $('<h2>').text('Pokémon #' + data.id);
    $('.results').append($pokeNum);
    $pokeNum.addClass('pokeNum');

    //NAME
    const $name = $('<h2>').text(data.name);
    $('.results').append($name);
    $name.addClass('pokemonName');

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

  const historyModal = $('#historyModal');
  const historyBtn = $('#historyBtn');
  const historySpan = $('.historyClose');

  historyBtn.on('click', event => {
    historyModal.css('display', 'block');
  });

  historySpan.on('click', event => {
    historyModal.css('display', 'none');
  });

  $('window').on('click', event => {
    if (event.target == modal) {
      historyModal.css('display', 'none');
    }
  });

  const gamesModal = $('#gamesModal');
  const gamesBtn = $('#gamesBtn');
  const gamesSpan = $('.gameClose');

  gamesBtn.on('click', event => {
    gamesModal.css('display', 'block');
  });

  gamesSpan.on('click', event => {
    gamesModal.css('display', 'none');
  });

  $('window').on('click', event => {
    if (event.target == modal) {
      gamesModal.css('display', 'none');
    }
  });
});

//name -> name
//pokemon # -> id
//types -> types[""0""].type types[0].type.name
//weight - in hectograms -> weight
//height - in decimeters -> height
//sprites -> sprites.front_default
