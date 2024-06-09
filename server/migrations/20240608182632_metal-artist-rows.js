exports.up = function(knex) {
    return knex('artists')
      .insert([
          {
              artist_name: 'Dio',
              num_albums: 18,
              num_songs: 113, 
              genre: 'Metal',
              year_started: 1983
          },
          {
              artist_name: 'Metallica',
              num_albums: 12,
              num_songs: 213,
              genre: 'Metal',
              year_started: 1982
          },
          {
              artist_name: 'Dragonforce',
              num_albums: 9,
              num_songs: 41,
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
            num_albums: 18,
            num_songs: 113, 
            genre: 'Metal',
            year_started: 1983
        },
        {
            artist_name: 'Metallica',
            num_albums: 12,
            num_songs: 213,
            genre: 'Metal',
            year_started: 1982
        },
        {
            artist_name: 'Dragonforce',
            num_albums: 9,
            num_songs: 41,
            genre: 'Metal',
            year_started: 2002
        }
      ])
  };