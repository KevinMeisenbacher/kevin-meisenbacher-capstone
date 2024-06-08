exports.up = function(knex) {
    return knex('artists')
      .insert([
          {
            artist_name: 'Daft Punk',
              albums: 4,
              songs: 20, // 4, 20. Nice
              genre: 'EDM',
              year_started: 1996
          },
          {
              artist_name: 'Avicii',
              albums: 3,
              songs: 72,
              genre: 'EDM',
              year_started: 2013
          },
          {
              artist_name: 'Skrillex',
              albums: 3,
              songs: 80,
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
              albums: 4,
              songs: 20, // 4, 20. Nice
              genre: 'EDM',
              year_started: 1996
          },
          {
              artist_name: 'Avicii',
              albums: 3,
              songs: 72,
              genre: 'EDM',
              year_started: 2013
          },
          {
              artist_name: 'Skrillex',
              albums: 3,
              songs: 80,
              genre: 'EDM',
              year_started: 2014
          }
      ])
  };
