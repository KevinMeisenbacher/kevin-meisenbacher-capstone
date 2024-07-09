exports.seed = async function(knex) {
  await knex('artists').del()
  await knex('artists').insert([
    //#region classical
    {
        id: 1,
        artist_name: 'Ludwig Van Beethoven',
        num_albums: 22,
        num_songs: 722, // W H O A, 
        genre_id: 1,
        year_started: 1767
    },
    {
       id: 2,
        artist_name: 'Pyotr Ilyich Tchaikovsky',
        num_albums: 0,
        num_songs: 163, 
        genre_id: 1,
        year_started: 1864
    },
    {
       id: 3,
        artist_name: 'Antonio Vivaldi',
        num_albums: 8,
        num_songs: 126, 
        genre_id: 1,
        year_started: 1676
    },
    //#endregion
    //#region country
    {
       id: 4,
        artist_name: 'Johnny Cash',
        num_albums: 144, // Holy crap; 12^2!
        num_songs: 1561, // W H O A, 
        genre_id: 2,
        year_started: 1957
    },
    {
       id: 5,
        artist_name: 'Dolly Parton',
        num_albums: 83,
        num_songs: 600, 
        genre_id: 2,
        year_started: 1967
    },
    {
       id: 6,
        artist_name: 'Leonard Cohen',
        num_albums: 31,
        num_songs: 152, 
        genre_id: 2,
        year_started: 1957
    },
    //#endregion
    //#region blues
    {
       id: 7,
        artist_name: 'B. B. King',
        num_albums: 95,
        num_songs: 761, 
        genre_id: 3,
        year_started: 1957
    },
    {
       id: 8,
        artist_name: 'Muddy Waters',
        num_albums: 64,
        num_songs: 493,
        genre_id: 3,
        year_started: 1960
    },
    {
       id: 9,
        artist_name: 'John Lee Hooker',
        num_albums: 75,
        num_songs: 782,
        genre_id: 3,
        subgenre_id: 47,
        year_started: 1959
    },
    //#endregion
    //#region rock
    {
       id: 10,
        artist_name: 'Chuck Berry',
        num_albums: 20,
        num_songs: 920,  
        genre_id: 6,
        year_started: 1955
    },
    {
       id: 11,
        artist_name: 'Motorhead',
        num_albums: 23,
        num_songs: 299, 
        genre_id: 6,
        subgenre_id: 24,
        year_started: 1975
    },
    {
       id: 12,
        artist_name: 'Janis Joplin',
        num_albums: 4,
        num_songs: 175, 
        genre_id: 6,
        year_started: 1962
    },
    //#endregion
    //#region metal
    {
       id: 13,
        artist_name: 'Dio',
        num_albums: 18,
        num_songs: 113, 
        genre_id: 4,
        year_started: 1983
    },
    {
       id: 14,
        artist_name: 'Metallica',
        num_albums: 12,
        num_songs: 213,
        genre_id: 4,
        subgenre_id: 8,
        year_started: 1982
    },
    {
       id: 15,
        artist_name: 'Dragonforce',
        num_albums: 9,
        num_songs: 41,
        genre_id: 4,
        subgenre_id: 2,
        year_started: 2002
    },
    //#endregion
    //#region jazz
    {
       id: 16,
        artist_name: 'Louis Armstrong',
        num_albums: 70,
        num_songs: 2973, 
        genre_id: 5,
        year_started: 1923
    },
    {
       id: 17,
        artist_name: 'Miles Davis',
        num_albums: 60,
        num_songs: 1269,
        genre_id: 5,
        year_started: 1944
    },
    {
       id: 18,
        artist_name: 'John Coltrane',
        num_albums: 45,
        num_songs: 706,
        genre_id: 5,
        year_started: 1949
    },
    //#endregion
    //#region funk
    {
       id: 19,
        artist_name: 'James Brown',
        num_albums: 59,
        num_songs: 1192,  
        genre_id: 7,
        year_started: 1953
    },
    {
       id: 20,
        artist_name: 'Funkadelic',
        num_albums: 10,
        num_songs: 112, 
        genre_id: 7,
        year_started: 1970
    },
    {
       id: 21,
        artist_name: 'Rick James',
        num_albums: 13,
        num_songs: 124, 
        genre_id: 7,
        year_started: 1978
    },
    //#endregion
    //#region punk
    {
       id: 22,
        artist_name: 'The Ramones',
        num_albums: 14,
        num_songs: 164,  
        genre_id: 8,
        year_started: 1976
    },
    {
       id: 23,
        artist_name: 'The Pogues',
        num_albums: 7,
        num_songs: 66, 
        genre_id: 8,
        year_started: 1982
    },
    {
       id: 24,
        artist_name: 'Drain',
        num_albums: 2,
        num_songs: 10, 
        genre_id: 8,
        subgenre_id: 37,
        year_started: 2020
    },
    //#endregion
    //#region pop
    {
       id: 25,
        artist_name: 'Michael Jackson',
        num_albums: 10,
        num_songs: 613,  
        genre_id: 9,
        year_started: 1964
    },
    {
       id: 26,
        artist_name: 'Lady Gaga',
        num_albums: 7,
        num_songs: 23, 
        genre_id: 9,
        year_started: 2008
    },
    {
       id: 27,
        artist_name: 'Katy Perry',
        num_albums: 6,
        num_songs: 73, 
        genre_id: 9,
        year_started: 1962
    },
    //#endregion
    //#region rap
    {
       id: 28,
        artist_name: 'Eminem',
        num_albums: 11,
        num_songs: 197,  
        genre_id: 10,
        year_started: 1955
    },
    {
       id: 29,
        artist_name: 'DMX',
        num_albums: 8,
        num_songs: 136, 
        genre_id: 10,
        year_started: 1998
    },
    {
       id: 30,
        artist_name: 'Sir Mix-a-Lot',
        num_albums: 4,
        num_songs: 43, 
        genre_id: 10,
        year_started: 1988
    },
    //#endregion
    //#region edm
    {
       id: 31,
        artist_name: 'Daft Punk',
        num_albums: 4,
        num_songs: 20, // 4, 20. Nice
        genre_id: 11,
        year_started: 1996
    },
    {
       id: 32,
        artist_name: 'Avicii',
        num_albums: 3,
        num_songs: 72, 
        genre_id: 11,
        subgenre_id: 90,
        year_started: 2013
    },
    {
       id: 33,
        artist_name: 'Skrillex',
        num_albums: 3,
        num_songs: 80, 
        genre_id: 11,
        subgenre_id: 90,
        year_started: 2014
    },
    //#endregion
    ])
};