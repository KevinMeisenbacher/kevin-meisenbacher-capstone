exports.up = function(knex) {
    return knex('artists')
      .insert([
          {
            artist_name: 'Daft Punk',
              num_albums: 4,
              num_songs: 20, // 4, 20. Nice
              genre: 'EDM',
              year_started: 1996
          },
          {
              artist_name: 'Avicii',
              num_albums: 3,
              num_songs: 72,
              genre: 'EDM',
              year_started: 2013
          },
          {
              artist_name: 'Skrillex',
              num_albums: 3,
              num_songs: 80,
              genre: 'EDM',
              year_started: 2014
          }
      ])
  };
  
  exports.down = function(knex) {
      return knex('artists')
      .delete([
        {
            artist_name: 'Daft Punk',
              num_albums: 4,
              num_songs: 20, // 4, 20. Nice
              genre: 'EDM',
              year_started: 1996
          },
          {
              artist_name: 'Avicii',
              num_albums: 3,
              num_songs: 72,
              genre: 'EDM',
              year_started: 2013
          },
          {
              artist_name: 'Skrillex',
              num_albums: 3,
              num_songs: 80,
              genre: 'EDM',
              year_started: 2014
          }
      ])
  };
