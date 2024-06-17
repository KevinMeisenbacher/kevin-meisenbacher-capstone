exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('albums').del()
  await knex('albums').insert([
    //#region classical
    {album_name: 'Sonatas', artist_id: 1, genre_id: 1},
    //#endregion
    //#region country
    {album_name: 'Johnny Cash with his Hot Blue Guitar', num_songs: 12, artist_id: 4, genre_id: 2},
    //#endregion
    //#region rock
    {album_name: 'Motorhead', num_songs: 8, artist_id: 11, genre_id: 6, subgenre_id: 6},
    //#endregion
    //#region metal
    {album_name: 'Kill \'em All', num_songs: 10, artist_id: 12, genre_id: 4, subgenre_id: 8},
    //#endregion
    //#region punk
    {album_name: 'California Cursed', num_songs: 10, artist_id: 24, genre_id: 8, subgenre_id: 39},
  ]);
};
