// console.log("Gotta catch 'em all!");

$(() => {
  const handleData = data => {
    //Sprite
    const $sprite = $('<img>');
    $sprite.attr('src', data.sprites.front_default);
    $('.results').append($sprite);
    $sprite.addClass('sprite');
    $sprite.attr('id', 'sprite');

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
  const gamesSpan = $('.gamesClose');

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

  const regionModal = $('#regionModal');
  const regionBtn = $('#regionBtn');
  const regionSpan = $('.regionClose');

  regionBtn.on('click', event => {
    regionModal.css('display', 'block');
  });

  regionSpan.on('click', event => {
    regionModal.css('display', 'none');
  });

  $('window').on('click', event => {
    if (event.target == modal) {
      regionModal.css('display', 'none');
    }
  });

  const typesModal = $('#typesModal');
  const typesBtn = $('#typesBtn');
  const typesSpan = $('.typesClose');

  typesBtn.on('click', event => {
    typesModal.css('display', 'block');
  });

  typesSpan.on('click', event => {
    typesModal.css('display', 'none');
  });

  $('window').on('click', event => {
    if (event.target == modal) {
      typesModal.css('display', 'none');
    }
  });

  const genModal = $('#genModal');
  const genBtn = $('#genBtn');
  const genSpan = $('.genClose');

  genBtn.on('click', event => {
    genModal.css('display', 'block');
  });

  genSpan.on('click', event => {
    genModal.css('display', 'none');
  });

  $('window').on('click', event => {
    if (event.target == modal) {
      genModal.css('display', 'none');
    }
  });
});

//name -> name
//pokemon # -> id
//types -> types[""0""].type types[0].type.name
//weight - in hectograms -> weight
//height - in decimeters -> height
//sprites -> sprites.front_default
