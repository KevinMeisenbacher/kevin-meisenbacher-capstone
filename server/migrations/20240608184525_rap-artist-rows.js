exports.up = function(knex) {
    return knex('artists')
      .insert([
          {
            artist_name: 'Eminem',
              num_albums: 11,
              num_songs: 197, 
              genre: 'Rap',
              year_started: 1955
          },
          {
              artist_name: 'DMX',
              num_albums: 8,
              num_songs: 136,
              genre: 'Rap',
              year_started: 1998
          },
          {
              artist_name: 'Sir Mix-a-Lot',
              num_albums: 4,
              num_songs: 43,
              genre: 'Rap',
              year_started: 1988
          }
      ])
  };
  
  exports.down = function(knex) {
      return knex('artists')
      .delete([
        {
            artist_name: 'Eminem',
              num_albums: 11,
              num_songs: 197, 
              genre: 'Rap',
              year_started: 1955
          },
          {
              artist_name: 'DMX',
              num_albums: 8,
              num_songs: 136,
              genre: 'Rap',
              year_started: 1998
          },
          {
              artist_name: 'Sir Mix-a-Lot',
              num_albums: 4,
              num_songs: 43,
              genre: 'Rap',
              year_started: 1988
          }
      ])
  };