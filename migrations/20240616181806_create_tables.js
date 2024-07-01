exports.up = function(knex) {
    const genre = (table, genre) => {
        table
            .integer(genre)
            .unsigned()
            .references('genres.id');
    }

    const subgenre = (table) => {
        table
            .integer('subgenre_id')
            .unsigned()
            .references('subgenres.id');
    }

    const artist = (table) => {
        table
            .integer('artist_id')
            .unsigned()
            .references('artists.id');
    }
    return knex.schema
    .createTable('genres', (table) => {
        table.integer('id').primary();
        table.string('genre_name').notNullable();
    })
    .createTable('subgenres', (table) => {
        table.integer('id').primary();
        table.string('subgenre_name').notNullable();
        genre(table, 'origin_id');
        genre(table, 'inspiration_id');
        table.string('inspiration_name');
        table
            .integer('derivative_id')
            .unsigned()
            .references('subgenres.id')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.string('derivative_name');
    })
    .createTable('artists', (table) => {
        table.integer('id').primary();
        table.string('artist_name').notNullable();
        genre(table, 'genre_id');
        table.integer('num_albums').notNullable();
        table.integer('num_songs').notNullable();
        table.integer('year_started').notNullable();
    })
    .createTable('albums',(table) => {
        table.integer('id').primary();
        table.string('album_name').notNullable();
        table.integer('num_songs');
        artist(table);
        genre(table, 'genre_id');
        subgenre(table);
    })
    .createTable('songs', (table) => {
        table.integer('id').primary();
        table.integer('track_number');
        table.string('song_name').notNullable();
        table
            .integer('album_id')
            .unsigned()
            .references('albums.id');
        artist(table);
        genre(table, 'genre_id');
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
  