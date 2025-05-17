exports.seed = async function(knex) {
  await knex('genres').del();
  await knex('genres').insert([
    {id: 1, genre_name: 'classical'},
    {id: 2, genre_name: 'country'},
    {id: 3, genre_name: 'blues'},
    {id: 4, genre_name: 'metal'},
    {id: 5, genre_name: 'jazz'},
    {id: 6, genre_name: 'rock'},
    {id: 7, genre_name: 'funk'},
    {id: 8, genre_name: 'punk'},
    {id: 9, genre_name: 'pop'},
    {id: 10, genre_name: 'rap'},
    {id: 11, genre_name: 'edm'}
  ]);
};
