exports.up = function(knex) {
    return knex('artists')
      .insert([
          {
              artist_name: 'Dio',
              albums: 18,
              songs: 113, 
              genre: 'Metal',
              year_started: 1983
          },
          {
              artist_name: 'Metallica',
              albums: 12,
              songs: 213,
              genre: 'Metal',
              year_started: 1982
          },
          {
              artist_name: 'Dragonforce',
              albums: 9,
              songs: 41,
              genre: 'Metal',
              year_started: 2002
          }
      ])
  };
  
  exports.down = function(knex) {
      return knex('artists')
      .delete([
        {
            artist_name: 'Dio',
            albums: 18,
            songs: 113, 
            genre: 'Metal',
            year_started: 1983
        },
        {
            artist_name: 'Metallica',
            albums: 12,
            songs: 213,
            genre: 'Metal',
            year_started: 1982
        },
        {
            artist_name: 'Dragonforce',
            albums: 9,
            songs: 41,
            genre: 'Metal',
            year_started: 2002
        }
      ])
  };