exports.up = function(knex) {
    return knex('artists')
      .insert([
          {
              artist_name: 'B. B. King',
              albums: 95,
              songs: 761, 
              genre: 'Blues',
              year_started: 1957
          },
          {
              artist_name: 'Muddy Waters',
              albums: 64,
              songs: 493,
              genre: 'Blues',
              year_started: 1960
          },
          {
              artist_name: 'John Lee Hooker',
              albums: 75,
              songs: 782,
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
            albums: 95,
            songs: 761, 
            genre: 'Blues',
            year_started: 1957
        },
        {
            artist_name: 'Muddy Waters',
            albums: 64,
            songs: 493,
            genre: 'Blues',
            year_started: 1960
        },
        {
            artist_name: 'John Lee Hooker',
            albums: 75,
            songs: 782,
            genre: 'Blues',
            year_started: 1959
        }
      ])
  };