exports.up = function(knex) {
  return knex.schema
    .createTable('artists', (table) => {
        table.increments('id').primary();
        table.string('artist_name').notNullable();
        table.string('genre').notNullable();
        table.integer('num_albums').notNullable();
        table.integer('num_songs').notNullable();
        table.timestamp('year_started').notNullable();
    })
    .createTable('songs', (table) => {
        table.increments('id').primary();
        table.string('song_name').notNullable();
        table.string('band').notNullable();
        table.string('genre').notNullable();
        table.timestamp('year').notNullable();
    })
    .createTable('genres', (table) => {
        table.increments('id').primary();
        table.string('genre_name').notNullable();
    })
    .createTable('fusions', (table) => {
        table.increments('id').primary();
        table.string('fusion').notNullable();
        table
            .string('genre1_name')
            .notNullable();
        table
            .string('genre2_name')
            .notNullable();
        table
            .integer('genre1_id')
            .unsigned()
            .notNullable()
            .references('genres.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table
            .integer('genre2_id')
            .unsigned()
            .notNullable()
            .references('genres.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
    .alterTable('artists', (table) => {
        table
        .integer('genre_id')
        .unsigned()
        .references('genres.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .alterTable('songs', (table) => {
        table
            .integer('artist_id')
            .unsigned()
            .references('artists.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table
            .integer('genre_id')
            .unsigned()
            .references('genres.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('artists')
        .dropTable('songs')
        .dropTable('genres')
        .dropTable('fusions');
};
