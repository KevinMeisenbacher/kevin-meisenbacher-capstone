exports.up = function(knex) {
    return knex('artists')
      .insert([
          {
            artist_name: 'James Brown',
              albums: 59,
              songs: 1192, 
              genre: 'Funk',
              year_started: 1953
          },
          {
              artist_name: 'Funkadelic',
              albums: 10,
              songs: 112,
              genre: 'Funk',
              year_started: 1970
          },
          {
              artist_name: 'Rick James',
              albums: 13,
              songs: 124,
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
              albums: 59,
              songs: 1192, 
              genre: 'Funk',
              year_started: 1953
          },
          {
              artist_name: 'Funkadelic',
              albums: 10,
              songs: 112,
              genre: 'Funk',
              year_started: 1970
          },
          {
              artist_name: 'Rick James',
              albums: 13,
              songs: 124,
              genre: 'Funk',
              year_started: 1978
          }
      ])
  };