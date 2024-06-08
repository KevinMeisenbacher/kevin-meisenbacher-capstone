exports.up = function(knex) {
    return knex('artists')
      .insert([
          {
            artist_name: 'Chuck Berry',
              albums: 20,
              songs: 920, 
              genre: 'Rock',
              year_started: 1955
          },
          {
              artist_name: 'Motorhead',
              albums: 23,
              songs: 299,
              genre: 'Rock',
              year_started: 1975
          },
          {
              artist_name: 'Janis Joplin',
              albums: 4,
              songs: 175,
              genre: 'Rock',
              year_started: 1962
          }
      ])
  };
  
  exports.down = function(knex) {
      return knex('artists')
      .delete([
        {
            artist_name: 'Chuck Berry',
              albums: 20,
              songs: 920, 
              genre: 'Rock',
              year_started: 1955
          },
          {
              artist_name: 'Motorhead',
              albums: 23,
              songs: 299,
              genre: 'Rock',
              year_started: 1975
          },
          {
              artist_name: 'Janis Joplin',
              albums: 4,
              songs: 175,
              genre: 'Rock',
              year_started: 1962
          }
      ])
  };