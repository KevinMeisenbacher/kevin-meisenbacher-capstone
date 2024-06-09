exports.up = function(knex) {
    return knex('artists')
      .insert([
          {
              artist_name: 'B. B. King',
              num_albums: 95,
              num_songs: 761, 
              genre: 'Blues',
              year_started: 1957
          },
          {
              artist_name: 'Muddy Waters',
              num_albums: 64,
              num_songs: 493,
              genre: 'Blues',
              year_started: 1960
          },
          {
              artist_name: 'John Lee Hooker',
              num_albums: 75,
              num_songs: 782,
              genre: 'Blues',
              year_started: 1959
          }
      ])
  };
  
  exports.down = function(knex) {
      return knex('artists')
      .delete([
        {
            artist_name: 'B. B. King',
            num_albums: 95,
            num_songs: 761, 
            genre: 'Blues',
            year_started: 1957
        },
        {
            artist_name: 'Muddy Waters',
            num_albums: 64,
            num_songs: 493,
            genre: 'Blues',
            year_started: 1960
        },
        {
            artist_name: 'John Lee Hooker',
            num_albums: 75,
            num_songs: 782,
            genre: 'Blues',
            year_started: 1959
        }
      ])
  };