exports.up = function(knex) {
  const genre = (table, genre) => {
      table
          .integer(genre)
          .references('id')
          .inTable('genres')
          .onUpdate('CASCADE')
          .onDelete('SET NULL');
  }

  const subgenre = (table, subgenre) => {
      table
          .integer(subgenre)
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
        .createTable('users', (table) => {
            table.increments('id').primary();
            table.string('avatar_url');
            table.string('username').notNullable();
            table.string('password').notNullable();
            table.string('email').notNullable();
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
        })
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
      subgenre(table, 'derivative_id');
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
      subgenre(table, 'subgenre_id');
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
          .onDelete('SET NULL');
      artist(table);
      genre(table, 'genre_id');
      genre(table, 'inspiration_id');
      subgenre(table, 'subgenre_id');
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
      .dropTableIfExists('crap')
      .dropTableIfExists('bangers')
      .dropTableIfExists('posts')
      .dropTableIfExists('users')
      .dropTableIfExists('songs')
      .dropTableIfExists('albums')
      .dropTableIfExists('artists')
      .dropTableIfExists('subgenres')
      .dropTableIfExists('genres');
};
