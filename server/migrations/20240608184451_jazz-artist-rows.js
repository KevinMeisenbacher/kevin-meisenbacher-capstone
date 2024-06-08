exports.up = function(knex) {
    return knex('artists')
      .insert([
          {
              artist_name: 'Louis Armstrong',
              albums: 70,
              songs: 2973, 
              genre: 'Jazz',
              year_started: 1923
          },
          {
              artist_name: 'Miles Davis',
              albums: 60,
              songs: 1269,
              genre: 'Jazz',
              year_started: 1944
          },
          {
              artist_name: 'John Coltrane',
              albums: 45,
              songs: 706,
              genre: 'Jazz',
              year_started: 1949
          }
      ])
  };
  
  exports.down = function(knex) {
      return knex('artists')
      .delete([
        {
            artist_name: 'Louis Armstrong',
            albums: 70,
            songs: 2973, 
            genre: 'Jazz',
            year_started: 1923
        },
        {
            artist_name: 'Miles Davis',
            albums: 60,
            songs: 1269,
            genre: 'Jazz',
            year_started: 1944
        },
        {
            artist_name: 'John Coltrane',
            albums: 45,
            songs: 706,
            genre: 'Jazz',
            year_started: 1949
        }
      ])
  };