exports.up = function(knex) {
    return knex('artists')
      .insert([ // Ew, gross pop music!
          {
            artist_name: 'Michael Jackson',
              albums: 10,
              songs: 613, 
              genre: 'Pop',
              year_started: 1964
          },
          {
              artist_name: 'Lady Gaga',
              albums: 7,
              songs: 23,
              genre: 'Pop',
              year_started: 2008
          },
          {
              artist_name: 'Katy Perry',
              albums: 6,
              songs: 73,
              genre: 'Pop',
              year_started: 1962
          }
      ])
  };
  
  exports.down = function(knex) {
      return knex('artists')
      .delete([ // Wish I could delete this anti-art genre from the face of history
        {
            artist_name: 'Michael Jackson',
              albums: 10,
              songs: 613, 
              genre: 'Pop',
              year_started: 1964
          },
          {
              artist_name: 'Lady Gaga',
              albums: 7,
              songs: 23,
              genre: 'Pop',
              year_started: 2008
          },
          {
              artist_name: 'Katy Perry',
              albums: 6,
              songs: 73,
              genre: 'Pop',
              year_started: 1962
          }
      ])
  };