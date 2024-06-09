exports.up = function(knex) {
    return knex('genres')
      .insert([
          {genre_name: 'Classical'}, // DONE
          {genre_name: 'Country'}, // DONE
          {genre_name: 'Blues'}, // DONE
          {genre_name: 'Metal'}, // DONE
          {genre_name: 'Jazz'},
          {genre_name: 'Rock'}, // DONE
          {genre_name: 'Funk'}, // DONE
          {genre_name: 'Punk'}, // DONE
          {genre_name: 'Pop'}, // DONE
          {genre_name: 'Rap'}, // DONE
          {genre_name: 'EDM'}, // DONE
      ])
  };
  
  exports.down = function(knex) {
      return knex('genres')
        .delete({
            genre_name: 'Classical',
            genre_name: 'Country',
            genre_name: 'Blues',
            genre_name: 'Metal',
            genre_name: 'Jazz',
            genre_name: 'Rock',
            genre_name: 'Funk',
            genre_name: 'Punk',
            genre_name: 'Pop',
            genre_name: 'Rap',
            genre_name: 'EDM',
        })
  };
  