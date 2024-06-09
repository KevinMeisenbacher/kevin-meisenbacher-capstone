exports.up = function(knex) {
    return knex('artists')
      .insert([
          {
              artist_name: 'Louis Armstrong',
              num_albums: 70,
              num_songs: 2973, 
              genre: 'Jazz',
              year_started: 1923
          },
          {
              artist_name: 'Miles Davis',
              num_albums: 60,
              num_songs: 1269,
              genre: 'Jazz',
              year_started: 1944
          },
          {
              artist_name: 'John Coltrane',
              num_albums: 45,
              num_songs: 706,
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
            num_albums: 70,
            num_songs: 2973, 
            genre: 'Jazz',
            year_started: 1923
        },
        {
            artist_name: 'Miles Davis',
            num_albums: 60,
            num_songs: 1269,
            genre: 'Jazz',
            year_started: 1944
        },
        {
            artist_name: 'John Coltrane',
            num_albums: 45,
            num_songs: 706,
            genre: 'Jazz',
            year_started: 1949
        }
      ])
  };