exports.up = function(knex) {
  const genre = (table, genre) => {
      table
          .integer(genre)
          .references('id')
          .inTable('genres')
          .onUpdate('CASCADE')
          .onDelete('SET NULL');
  }

  const subgenre = (table) => {
      table
          .integer('subgenre_id')
          .references('id')
          .inTable('subgenres')
          .onUpdate('CASCADE')
          .onDelete('SET NULL');
  }

  const artist = (table) => {
      table
          .integer('artist_id')
          .references('id')
          .inTable('artists')
          .onUpdate('CASCADE')
          .onDelete('SET NULL');
  }
  return knex.schema
  .createTable('genres', (table) => {
      table.increments('id').primary();
      table.string('genre_name').notNullable();
  })
  .createTable('subgenres', (table) => {
      table.increments('id').primary();
      table.string('subgenre_name').notNullable();
      genre(table, 'origin_id');
      genre(table, 'inspiration_id');
      table.string('inspiration_name');
      table
          .integer('derivative_id')
          .references('id')
          .inTable('subgenres')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      table.string('derivative_name');
  })
  .createTable('artists', (table) => {
      table.increments('id').primary();
      table.string('artist_name').notNullable();
      genre(table, 'genre_id');
      subgenre(table, 'subgenre_id');
      table.integer('num_albums').notNullable();
      table.integer('num_songs').notNullable();
      table.integer('num_fans');
      table.integer('num_haters');
      table.integer('year_started').notNullable();
  })
  .createTable('albums',(table) => {
      table.increments('id').primary();
      table.string('album_name').notNullable();
      table.integer('num_songs').notNullable();
      artist(table);
      genre(table, 'genre_id');
      subgenre(table);
  })
  .createTable('songs', (table) => {
      table.increments('id').primary();
      table.integer('track_number');
      table.string('song_name').notNullable();
      table
          .integer('album_id')
          .references('id')
          .inTable('albums')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
      artist(table);
      genre(table, 'genre_id');
      genre(table, 'inspiration_id');
  })
  .createTable('bangers', (table) => {
      table.integer('id').primary();
      table
          .integer('user_id')
          .references('id')
          .inTable('users');
      table
          .integer('artist_id')
          .references('id')
          .inTable('artists');
          genre(table, 'genre_id');
          subgenre(table, 'subgenre_id');
  })
  .createTable('crap', (table) => {
      table.integer('id').primary();
      table
        .integer('user_id')
        .references('id')
        .inTable('users');
      table
          .integer('artist_id')
          .references('id')
          .inTable('artists');
          genre(table, 'genre_id');
          subgenre(table, 'subgenre_id');
  })
};

exports.down = function(knex) {
  return knex.schema
      .dropTable('songs')
      .dropTable('albums')
      .dropTable('artists')
      .dropTable('genres')
      .dropTable('subgenres')
      .dropTable('bangers')
      .dropTable('crap');
};
