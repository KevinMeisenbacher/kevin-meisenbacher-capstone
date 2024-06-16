exports.seed = async function(knex) {
  await knex('artists').del()
  await knex('artists').insert([
      //#region classical
        {
            artist_name: 'Ludwig Van Beethoven',
            num_albums: 22,
            num_songs: 722, // W H O A,
            genre_name: 'Classical',
            genre_id: 1,
            year_started: 1767
        },
        {
            artist_name: 'Pyotr Ilyich Tchaikovsky',
            num_albums: 0,
            num_songs: 163,
            genre_name: 'Classical',
            genre_id: 1,
            year_started: 1864
        },
        {
            artist_name: 'Antonio Vivaldi',
            num_albums: 8,
            num_songs: 126,
            genre_name: 'Classical',
            genre_id: 1,
            year_started: 1676
        },
        //#endregion
        //#region country
        {
            artist_name: 'Johnny Cash',
            num_albums: 144, // Holy crap; 12^2!
            num_songs: 1561, // W H O A,
            genre_name: 'Country',
            genre_id: 2,
            year_started: 1957
        },
        {
            artist_name: 'Dolly Parton',
            num_albums: 83,
            num_songs: 600,
            genre_name: 'Country',
            genre_id: 2,
            year_started: 1967
        },
        {
            artist_name: 'Leonard Cohen',
            num_albums: 31,
            num_songs: 152,
            genre_name: 'Country',
            genre_id: 2,
            year_started: 1957
        },
        //#endregion
        //#region blues
        {
          artist_name: 'B. B. King',
          num_albums: 95,
          num_songs: 761, 
          genre_name: 'Blues',
          genre_id: 3,
          year_started: 1957
      },
      {
          artist_name: 'Muddy Waters',
          num_albums: 64,
          num_songs: 493,
          genre_name: 'Blues',
          genre_id: 3,
          year_started: 1960
      },
      {
          artist_name: 'John Lee Hooker',
          num_albums: 75,
          num_songs: 782,
          genre_name: 'Blues',
          genre_id: 3,
          year_started: 1959
      },
    //#endregion
    //#region rock
        {
          artist_name: 'Chuck Berry',
            num_albums: 20,
            num_songs: 920, 
            genre_name: 'Rock',
            genre_id: 6,
            year_started: 1955
        },
        {
            artist_name: 'Motorhead',
            num_albums: 23,
            num_songs: 299,
            genre_name: 'Rock',
            genre_id: 6,
            year_started: 1975
        },
        {
            artist_name: 'Janis Joplin',
            num_albums: 4,
            num_songs: 175,
            genre_name: 'Rock',
            genre_id: 6,
            year_started: 1962
        },
        //#endregion
        //#region metal
        {
          artist_name: 'Dio',
          num_albums: 18,
          num_songs: 113, 
          genre_name: 'Metal',
          genre_id: 4,
          year_started: 1983
      },
      {
          artist_name: 'Metallica',
          num_albums: 12,
          num_songs: 213,
          genre_name: 'Metal',
          genre_id: 4,
          year_started: 1982
      },
      {
          artist_name: 'Dragonforce',
          num_albums: 9,
          num_songs: 41,
          genre_name: 'Metal',
          genre_id: 4,
          year_started: 2002
      },
      //#endregion
      //#region jazz
      {
          artist_name: 'Louis Armstrong',
          num_albums: 70,
          num_songs: 2973, 
          genre_name: 'Jazz',
          genre_id: 5,
          year_started: 1923
      },
      {
          artist_name: 'Miles Davis',
          num_albums: 60,
          num_songs: 1269,
          genre_name: 'Jazz',
          genre_id: 5,
          year_started: 1944
      },
      {
          artist_name: 'John Coltrane',
          num_albums: 45,
          num_songs: 706,
          genre_name: 'Jazz',
          genre_id: 5,
          year_started: 1949
      },
      //#endregion
      //#region funk
      {
          artist_name: 'James Brown',
            num_albums: 59,
            num_songs: 1192, 
            genre_name: 'Funk',
            genre_id: 7,
            year_started: 1953
        },
        {
            artist_name: 'Funkadelic',
            num_albums: 10,
            num_songs: 112,
            genre_name: 'Funk',
            genre_id: 7,
            year_started: 1970
        },
        {
            artist_name: 'Rick James',
            num_albums: 13,
            num_songs: 124,
            genre_name: 'Funk',
            genre_id: 7,
            year_started: 1978
        },
        //#endregion
        //#region punk
        {
          artist_name: 'The Ramones',
            num_albums: 14,
            num_songs: 164, 
            genre_name: 'Punk',
            genre_id: 8,
            year_started: 1976
        },
        {
            artist_name: 'The Pogues',
            num_albums: 7,
            num_songs: 66,
            genre_name: 'Punk',
            genre_id: 8,
            year_started: 1982
        },
        {
            artist_name: 'Drain',
            num_albums: 2,
            num_songs: 10,
            genre_name: 'Punk',
            genre_id: 8,
            year_started: 2020
        },
        //#endregion
        //#region pop
        {
          artist_name: 'Michael Jackson',
            num_albums: 10,
            num_songs: 613, 
            genre_name: 'Pop',
            genre_id: 9,
            year_started: 1964
        },
        {
            artist_name: 'Lady Gaga',
            num_albums: 7,
            num_songs: 23,
            genre_name: 'Pop',
            genre_id: 9,
            year_started: 2008
        },
        {
            artist_name: 'Katy Perry',
            num_albums: 6,
            num_songs: 73,
            genre_name: 'Pop',
            genre_id: 9,
            year_started: 1962
        },
        //#endregion
        //#region rap
      {
          artist_name: 'Eminem',
            num_albums: 11,
            num_songs: 197, 
            genre_name: 'Rap',
            genre_id: 10,
            year_started: 1955
        },
        {
            artist_name: 'DMX',
            num_albums: 8,
            num_songs: 136,
            genre_name: 'Rap',
            genre_id: 10,
            year_started: 1998
        },
        {
            artist_name: 'Sir Mix-a-Lot',
            num_albums: 4,
            num_songs: 43,
            genre_name: 'Rap',
            genre_id: 10,
            year_started: 1988
        },
        //#endregion
        //#region edm
        {
            artist_name: 'Daft Punk',
            num_albums: 4,
            num_songs: 20, // 4, 20. Nice
            genre_name: 'EDM',
            genre_id: 11,
            year_started: 1996
        },
        {
            artist_name: 'Avicii',
            num_albums: 3,
            num_songs: 72,
            genre_name: 'EDM',
            genre_id: 11,
            year_started: 2013
        },
        {
            artist_name: 'Skrillex',
            num_albums: 3,
            num_songs: 80,
            genre_name: 'EDM',
            genre_id: 11,
            year_started: 2014
        },
        //#endregion
    ])
};