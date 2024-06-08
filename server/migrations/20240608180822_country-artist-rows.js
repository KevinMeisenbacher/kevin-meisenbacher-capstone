exports.up = function(knex) {
    return knex('artists')
      .insert([
          {
              artist_name: 'Johnny Cash',
              albums: 144, // Holy crap; 12^2!
              songs: 1561, // W H O A,
              genre: 'Country',
              year_started: 1957
          },
          {
              artist_name: 'Dolly Parton',
              albums: 83,
              songs: 600,
              genre: 'Country',
              year_started: 1967
          },
          {
              artist_name: 'Antonio Vivaldi',
              albums: 152,
              songs: 31,
              genre: 'Country',
              year_started: 1957
          }
      ])
  };
  
  exports.down = function(knex) {
      return knex('artists')
      .delete([
        {
            artist_name: 'Johnny Cash',
            albums: 144, // Holy crap; 12^2!
            songs: 1561, // W H O A,
            genre: 'Country',
            year_started: 1957
        },
        {
            artist_name: 'Dolly Parton',
            albums: 83,
            songs: 600,
            genre: 'Country',
            year_started: 1967
        },
        {
            artist_name: 'Antonio Vivaldi',
            albums: 152,
            songs: 31,
            genre: 'Country',
            year_started: 1957
        }
      ])
  };