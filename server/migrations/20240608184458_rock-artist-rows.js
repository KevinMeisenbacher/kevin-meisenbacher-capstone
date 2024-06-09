exports.up = function(knex) {
    return knex('artists')
      .insert([
          {
            artist_name: 'Chuck Berry',
              num_albums: 20,
              num_songs: 920, 
              genre: 'Rock',
              year_started: 1955
          },
          {
              artist_name: 'Motorhead',
              num_albums: 23,
              num_songs: 299,
              genre: 'Rock',
              year_started: 1975
          },
          {
              artist_name: 'Janis Joplin',
              num_albums: 4,
              num_songs: 175,
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
              num_albums: 20,
              num_songs: 920, 
              genre: 'Rock',
              year_started: 1955
          },
          {
              artist_name: 'Motorhead',
              num_albums: 23,
              num_songs: 299,
              genre: 'Rock',
              year_started: 1975
          },
          {
              artist_name: 'Janis Joplin',
              num_albums: 4,
              num_songs: 175,
              genre: 'Rock',
              year_started: 1962
          }
      ])
  };