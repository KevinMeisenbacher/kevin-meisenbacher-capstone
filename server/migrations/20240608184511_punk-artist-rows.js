exports.up = function(knex) {
    return knex('artists')
      .insert([
          {
            artist_name: 'The Ramones',
              num_albums: 14,
              num_songs: 164, 
              genre: 'Punk',
              year_started: 1976
          },
          {
              artist_name: 'The Pogues',
              num_albums: 7,
              num_songs: 66,
              genre: 'Punk',
              year_started: 1982
          },
          {
              artist_name: 'Drain',
              num_albums: 2,
              num_songs: 10,
              genre: 'Punk',
              year_started: 2020
          }
      ])
  };
  
  exports.down = function(knex) {
      return knex('artists')
      .delete([
        {
            artist_name: 'The Ramones',
              num_albums: 14,
              num_songs: 164, 
              genre: 'Punk',
              year_started: 1976
          },
          {
              artist_name: 'The Pogues',
              num_albums: 7,
              num_songs: 66,
              genre: 'Punk',
              year_started: 1982
          },
          {
              artist_name: 'Drain',
              num_albums: 2,
              num_songs: 10,
              genre: 'Punk',
              year_started: 2020
          }
      ])
  };