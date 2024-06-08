exports.up = function(knex) {
    return knex('artists')
      .insert([
          {
            artist_name: 'The Ramones',
              albums: 14,
              songs: 164, 
              genre: 'Punk',
              year_started: 1976
          },
          {
              artist_name: 'The Pogues',
              albums: 7,
              songs: 66,
              genre: 'Punk',
              year_started: 1982
          },
          {
              artist_name: 'Drain',
              albums: 2,
              songs: 10,
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
              albums: 14,
              songs: 164, 
              genre: 'Punk',
              year_started: 1976
          },
          {
              artist_name: 'The Pogues',
              albums: 7,
              songs: 66,
              genre: 'Punk',
              year_started: 1982
          },
          {
              artist_name: 'Drain',
              albums: 2,
              songs: 10,
              genre: 'Punk',
              year_started: 2020
          }
      ])
  };