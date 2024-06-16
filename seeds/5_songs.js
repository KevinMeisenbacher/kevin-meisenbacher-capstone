exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('songs').del()
  await knex('songs').insert([
    {
      track_number: 1, song_name: 'Hit the Lights', 
      artist_id: 14, artist_name: 'Metallica', 
      genre_id: 4, genre_name: 'Metal', 
      subgenre_id: 8, subgenre_name: 'Thrash Metal'
    },
    {
      track_number: 1, song_name: 'Feel the Pressure', 
      artist_id: 24, artist_name: 'Drain', 
      genre_id: 8, genre_name: 'Punk', 
      subgenre_id: 8, subgenre_name: 'Hardcore Punk'
    },
  ]);
};
