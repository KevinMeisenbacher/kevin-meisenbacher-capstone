exports.up = function (knex) {
    return knex.schema
        .createTable('users', (table) => {
            table.increments('id').primary();
            table.string('avatar_url');
            table.string('username').notNullable();
            table.string('password').notNullable();
            table.string('email').notNullable();
            table.string('phone').notNullable();
            table.string('token');
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
        .createTable('posts', (table) => {
            table.increments('id').primary();
            table.integer('user_id').unsigned().notNullable();
            table.string('title', 75).notNullable();
            table.text('content').notNullable();
            table.timestamp('updated_at').defaultTo(knex.fn.now());
            table
            .foreign('user_id')
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        });
};
  
exports.down = function (knex) {
    return knex.schema.dropTable('posts').dropTable('users');
};