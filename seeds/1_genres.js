exports.seed = async function(knex) {
  await knex('genres').del();
  await knex('genres').insert([
        {genre_name: 'Classical'},
        {genre_name: 'Country'},
        {genre_name: 'Blues'},
        {genre_name: 'Metal'},
        {genre_name: 'Jazz'},
        {genre_name: 'Rock'},
        {genre_name: 'Funk'},
        {genre_name: 'Punk'},
        {genre_name: 'Pop'},
        {genre_name: 'Rap'},
        {genre_name: 'EDM'},
    ]);
};
