exports.up = function(knex) {
    return knex('artists')
      .insert([
          {
            artist_name: 'James Brown',
              num_albums: 59,
              num_songs: 1192, 
              genre: 'Funk',
              year_started: 1953
          },
          {
              artist_name: 'Funkadelic',
              num_albums: 10,
              num_songs: 112,
              genre: 'Funk',
              year_started: 1970
          },
          {
              artist_name: 'Rick James',
              num_albums: 13,
              num_songs: 124,
              genre: 'Funk',
              year_started: 1978
          }
      ])
  };
  
  exports.down = function(knex) {
      return knex('artists')
      .delete([
        {
            artist_name: 'James Brown',
              num_albums: 59,
              num_songs: 1192, 
              genre: 'Funk',
              year_started: 1953
          },
          {
              artist_name: 'Funkadelic',
              num_albums: 10,
              num_songs: 112,
              genre: 'Funk',
              year_started: 1970
          },
          {
              artist_name: 'Rick James',
              num_albums: 13,
              num_songs: 124,
              genre: 'Funk',
              year_started: 1978
          }
      ])
  };