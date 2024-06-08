exports.up = function(knex) {
  return knex('artists')
    .insert([
        {
            artist_name: 'Ludwig Van Beethoven',
            albums: 22,
            songs: 722, // W H O A,
            genre: 'Classical',
            year_started: 1767
        },
        {
            artist_name: 'Pyotr Ilyich Tchaikovsky',
            albums: 0,
            songs: 163,
            genre: 'Classical',
            year_started: 1864
        },
        {
            artist_name: 'Antonio Vivaldi',
            albums: 8,
            songs: 126,
            genre: 'Classical',
            year_started: 1676
        }
    ])
};

exports.down = function(knex) {
    return knex('artists')
    .delete([
        {
            artist_name: 'Ludwig Van Beethoven',
            albums: 22,
            songs: 722, // W H O A,
            genre: 'Classical',
            year_started: 1767
        },
        {
            artist_name: 'Pyotr Ilyich Tchaikovsky',
            albums: 0,
            songs: 163,
            genre: 'Classical',
            year_started: 1864
        },
        {
            artist_name: 'Antonio Vivaldi',
            albums: 8,
            songs: 126,
            genre: 'Classical',
            year_started: 1676
        }
    ])
};