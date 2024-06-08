exports.up = function(knex) {
    return knex('artists')
      .insert([
          {
            artist_name: 'Eminem',
              albums: 11,
              songs: 197, 
              genre: 'Rap',
              year_started: 1955
          },
          {
              artist_name: 'DMX',
              albums: 8,
              songs: 136,
              genre: 'Rap',
              year_started: 1998
          },
          {
              artist_name: 'Sir Mix-a-Lot',
              albums: 4,
              songs: 43,
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
              albums: 11,
              songs: 197, 
              genre: 'Rap',
              year_started: 1955
          },
          {
              artist_name: 'DMX',
              albums: 8,
              songs: 136,
              genre: 'Rap',
              year_started: 1998
          },
          {
              artist_name: 'Sir Mix-a-Lot',
              albums: 4,
              songs: 43,
              genre: 'Rap',
              year_started: 1988
          }
      ])
  };