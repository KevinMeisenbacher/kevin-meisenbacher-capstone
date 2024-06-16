exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('albums').del()
  await knex('albums').insert([
    //#region classical
    {album_name: 'Sonatas', artist_name: 'Ludwig Van Beethoven', artist_id: 1, genre_name: 'Classical Music', genre_id: 1},
    //#endregion
    //#region country
    {album_name: 'Johnny Cash with his Hot Blue Guitar', num_songs: 12, artist_name: 'Johnny Cash', artist_id: 4, genre_name: 'Country', genre_id: 2},
    //#endregion
    //#region rock
    {album_name: 'Motorhead', artist_name: 'Motorhead', num_songs: 8, artist_id: 11, genre_name: 'Rock', genre_id: 6},
    //#endregion
    //#region metal
    {album_name: 'Kill \'em All', artist_name: 'Metallica', num_songs: 10, artist_id: 12, genre_name: 'Metal', genre_id: 4},
    //#endregion
    //#region punk
    {album_name: 'California Cursed', artist_name: 'Drain', num_songs: 10, artist_id: 24, genre_name: 'Punk', genre_id: 8},
  ]);
};
