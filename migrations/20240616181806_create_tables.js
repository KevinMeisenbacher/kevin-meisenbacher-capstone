exports.up = function(knex) {
    const genre = (table) => {
        table
            .integer('genre_id')
            .unsigned()
            .references('genres.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('genre_name').notNullable();
    }

    const subgenre = (table) => {
        table
            .integer('subgenre_id')
            .unsigned()
            .references('subgenres.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('subgenre_name');
    }

    const artist = (table) => {
        table
            .integer('artist_id')
            .unsigned()
            .references('artists.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('artist_name').notNullable();
    }
    return knex.schema
    .createTable('genres', (table) => {
        table.increments('id').primary();
        table.string('genre_name').notNullable();
    })
    .createTable('subgenres', (table) => {
        table.increments('id').primary();
        table.string('subgenre_name').notNullable();
        table // genre
            .integer('origin_id')
            .unsigned()
            .notNullable()
            .references('genres.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('origin_name').notNullable();
        table
            .integer('inspiration_id')
            .unsigned()
            .references('genres.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('inspiration_name')
        table
            .integer('derivative_id')
            .unsigned()
            .references('subgenres.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('derivative_name')
    })
    .createTable('artists', (table) => {
        table.increments('id').primary();
        table.string('artist_name').notNullable();
        genre(table);
        table.integer('num_albums').notNullable();
        table.integer('num_songs').notNullable();
        table.integer('year_started').notNullable();
    })
    .createTable('albums',(table) => {
        table.increments('id').primary();
        table.string('album_name').notNullable();
        table.integer('num_songs');
        artist(table);
        genre(table);
        subgenre(table);
    })
    .createTable('songs', (table) => {
        table.increments('id').primary();
        table.integer('track_number');
        table.string('song_name').notNullable();
        artist(table);
        genre(table);
        subgenre(table);
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('songs')
        .dropTable('albums')
        .dropTable('artists')
        .dropTable('genres')
        .dropTable('subgenres');
};
  