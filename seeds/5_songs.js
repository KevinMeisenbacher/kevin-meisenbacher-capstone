exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('songs').del()
  await knex('songs').insert([
    {track_number: 1, song_name: 'Hit the Lights', artist_id: 14, genre_id: 4},
    {track_number: 1, song_name: 'Feel the Pressure', artist_id: 24, genre_id: 8},
  ]);
};
