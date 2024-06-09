exports.up = function(knex) {
  return knex('artists')
    .insert([
        {
            artist_name: 'Ludwig Van Beethoven',
            num_albums: 22,
            num_songs: 722, // W H O A,
            genre: 'Classical',
            year_started: 1767
        },
        {
            artist_name: 'Pyotr Ilyich Tchaikovsky',
            num_albums: 0,
            num_songs: 163,
            genre: 'Classical',
            year_started: 1864
        },
        {
            artist_name: 'Antonio Vivaldi',
            num_albums: 8,
            num_songs: 126,
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
            num_albums: 22,
            num_songs: 722, // W H O A,
            genre: 'Classical',
            year_started: 1767
        },
        {
            artist_name: 'Pyotr Ilyich Tchaikovsky',
            num_albums: 0,
            num_songs: 163,
            genre: 'Classical',
            year_started: 1864
        },
        {
            artist_name: 'Antonio Vivaldi',
            num_albums: 8,
            num_songs: 126,
            genre: 'Classical',
            year_started: 1676
        }
    ])
};