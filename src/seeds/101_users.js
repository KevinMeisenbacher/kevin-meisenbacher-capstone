exports.seed = async function(knex) {
    await knex('users').del();
    await knex('users').insert([
        {username: 'Test User', password: 'lmao42069', email: 'dude@email.com', phone: '7054206969'}
    ]);
}