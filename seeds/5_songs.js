exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('songs').del()
  await knex('songs').insert([
    //#region classical
    {id: 1, track_number: 1, song_name: 'Symphony No. 1', album_id: 1, artist_id: 1, genre_id: 1},
    {id: 2, track_number: 1, song_name: 'Piano Concerto No. 4', album_id: 2, artist_id: 1, genre_id: 1},
    {id: 3, track_number: 1, song_name: 'Three early Kurfürstensonatas, No. 1 in E♭ major', album_id: 3, artist_id: 1, genre_id: 1},
    {id: 4, track_number: 1, song_name: 'Winter Daydreams', album_id: 4, artist_id: 2, genre_id: 1},
    {id: 5, track_number: 1, song_name: 'The Voyevoda', album_id: 5, artist_id: 2, genre_id: 1},
    {id: 6, track_number: 1, song_name: 'Orchestral Suite No. 1 in D minor', album_id: 6, artist_id: 2, genre_id: 1},
    {id: 7, track_number: 1, song_name: 'Sinfonia 111a', album_id: 7, artist_id: 3, genre_id: 1},
    {id: 8, track_number: 1, song_name: 'Concerto 109', album_id: 8, artist_id: 3, genre_id: 1},
    {id: 9, track_number: 1, song_name: 'Sonata 38', album_id: 9, artist_id: 3, genre_id: 1},
    //#endregion
    //#region country
    {id: 10, track_number: 1, song_name: 'Rock Island Lane', album_id: 10, artist_id: 4, genre_id: 2},
    {id: 11, track_number: 1, song_name: 'Run Softly, Blue River', album_id: 11, artist_id: 4, genre_id: 2},
    {id: 12, track_number: 1, song_name: 'It Was Jesus', album_id: 12, artist_id: 4, genre_id: 2},
    {id: 13, track_number: 1, song_name: 'Dumb Blonde', album_id: 13, artist_id: 5, genre_id: 2},
    {id: 14, track_number: 1, song_name: 'You\'re Gonna Be Sorry', album_id: 14, artist_id: 5, genre_id: 2},
    {id: 15, track_number: 1, song_name: 'Don\'t Let It Trouble Your Mind', album_id: 15, artist_id: 5, genre_id: 2},
    {id: 16, track_number: 1, song_name: 'Suzanne', album_id: 16, artist_id: 6, genre_id: 2},
    {id: 17, track_number: 1, song_name: 'Bird on the Wire', album_id: 17, artist_id: 6, genre_id: 2},
    {id: 18, track_number: 1, song_name: 'Avalanche', album_id: 18, artist_id: 6, genre_id: 2},
    //#endregion
    //#region blues
    {id: 19, track_number: 1, song_name: 'Please Love Me', album_id: 19, artist_id: 7, genre_id: 3},
    {id: 20, track_number: 1, song_name: 'Why Do Things Happen to Me', album_id: 20, artist_id: 7, genre_id: 3},
    {id: 21, track_number: 1, song_name: 'Sweet Thing', album_id: 21, artist_id: 7, genre_id: 3},
    {id: 22, track_number: 1, song_name: 'Tell Me Baby', album_id: 22, artist_id: 8, genre_id: 3},
    {id: 23, track_number: 1, song_name: 'My Home Is in the Delta', album_id: 23, artist_id: 8, genre_id: 3},
    {id: 24, track_number: 1, song_name: 'Corine, Corina', album_id: 24, artist_id: 8, genre_id: 3},
    {id: 25, track_number: 1, song_name: 'Walkin\' the Boogie', album_id: 25, artist_id: 9, genre_id: 3},
    {id: 26, track_number: 1, song_name: 'Dimples', album_id: 26, artist_id: 9, genre_id: 3},
    {id: 27, track_number: 1, song_name: 'Black Snake', album_id: 27, artist_id: 9, genre_id: 3},
    //#endregion
    //#region metal
    {id: 28, track_number: 1, song_name: 'Stand Up and Shout', album_id: 28, artist_id: 10, genre_id: 4},
    {id: 29, track_number: 1, song_name: 'We Rock', album_id: 29, artist_id: 10, genre_id: 4},
    {id: 30, track_number: 1, song_name: 'King of Rock n Roll', album_id: 30, artist_id: 10, genre_id: 4},
    {id: 31, track_number: 1, song_name: 'Hit the Lights', album_id: 31, artist_id: 11, genre_id: 4},
    {id: 32, track_number: 1, song_name: 'Fight Fire with Fire', album_id: 32, artist_id: 11},
    {id: 33, track_number: 1, song_name: 'Battery', album_id: 33, artist_id: 11, genre_id: 4},
    {id: 34, track_number: 1, song_name: 'Invocation of the Apocalyptic Evil', album_id: 34, artist_id: 12, genre_id: 4},
    {id: 35, track_number: 1, song_name: 'My Spirit Will Go On', album_id: 35, artist_id: 12, genre_id: 4},
    {id: 36, track_number: 1, song_name: 'Through the Fire and Flames', album_id: 36, artist_id: 12, genre_id: 4},
    //#endregion
    //#region jazz
    {id: 37, track_number: 1, song_name: 'Wild Man Blues', album_id: 37, artist_id: 13, genre_id: 5},
    {id: 38, track_number: 1, song_name: 'King Porter Stomp', album_id: 38, artist_id: 13, genre_id: 5},
    {id: 39, track_number: 1, song_name: 'Back Home Again in Indiana', album_id: 39, artist_id: 13, genre_id: 5},
    {id: 40, track_number: 1, song_name: 'Conception', album_id: 40, artist_id: 14, genre_id: 5},
    {id: 41, track_number: 1, song_name: 'Dear Old Stockholm', album_id: 41, artist_id: 14, genre_id: 5},
    {id: 42, track_number: 1, song_name: 'Bluing', album_id: 42, artist_id: 14, genre_id: 5},
    {id: 43, track_number: 1, song_name: 'Bakai', album_id: 43, artist_id: 15, genre_id: 5},
    {id: 44, track_number: 1, song_name: 'Traneing In', album_id: 44, artist_id: 15, genre_id: 5},
    {id: 45, track_number: 1, song_name: 'Good Bait', album_id: 45, artist_id: 15, genre_id: 5},
    //#endregion
    //#region rock
    {id: 46, track_number: 1, song_name: 'School Days', album_id: 46, artist_id: 16, genre_id: 6},
    {id: 47, track_number: 1, song_name: 'Sweet Little Sixteen', album_id: 47, artist_id: 16, genre_id: 6},
    {id: 48, track_number: 1, song_name: 'Almost Grown', album_id: 48, artist_id: 16, genre_id: 6},
    {id: 49, track_number: 1, song_name: 'Motörhead', album_id: 49, artist_id: 17, genre_id: 6},
    {id: 50, track_number: 1, song_name: 'Overkill', album_id: 50, artist_id: 17, genre_id: 6},
    {id: 51, track_number: 1, song_name: 'Dead Men Tell No Tales', album_id: 51, artist_id: 17, genre_id: 6},
    {id: 52, track_number: 1, song_name: 'Bye, Bye Baby', album_id: 52, artist_id: 18, genre_id: 6},
    {id: 53, track_number: 1, song_name: 'Combination of the Two', album_id: 53, artist_id: 18, genre_id: 6},
    {id: 54, track_number: 1, song_name: 'Try (Just a Little Bit Harder)', album_id: 54, artist_id: 18, genre_id: 6},
    //#endregion
    //#region funk
    {id: 55, track_number: 1, song_name: 'Please, Please, Please', album_id: 55, artist_id: 19, genre_id: 7},
    {id: 56, track_number: 1, song_name: 'There Must Be a Reason', album_id: 56, artist_id: 19, genre_id: 7},
    {id: 57, track_number: 1, song_name: 'Think', album_id: 57, artist_id: 19, genre_id: 7},
    {id: 58, track_number: 1, song_name: 'Mommy, What\'s a Funkadelic?', album_id: 58, artist_id: 20, genre_id: 7},
    {id: 59, track_number: 1, song_name: 'Free Your Mind and Your Ass Will Follow', album_id: 59, artist_id: 20, genre_id: 7},
    {id: 60, track_number: 1, song_name: 'Maggot Brain', album_id: 60, artist_id: 20, genre_id: 7},
    {id: 61, track_number: 1, song_name: 'Stone City Band, Hi!', album_id: 61, artist_id: 21, genre_id: 7},
    {id: 62, track_number: 1, song_name: 'Bustin\' Out', album_id: 62, artist_id: 21, genre_id: 7},
    {id: 63, track_number: 1, song_name: 'Fire It Up', album_id: 63, artist_id: 21, genre_id: 7},
    //#endregion
    //#region punk
    {id: 64, track_number: 1, song_name: 'Blitzkrieg Bop', album_id: 64, artist_id: 20, genre_id: 8},
    {id: 65, track_number: 1, song_name: 'Glad to See You Go', album_id: 65, artist_id: 20, genre_id: 8},
    {id: 66, track_number: 1, song_name: 'Cretin Hop', album_id: 66, artist_id: 20, genre_id: 8},
    {id: 67, track_number: 1, song_name: 'Transmetropolitan', album_id: 67, artist_id: 21, genre_id: 8},
    {id: 68, track_number: 1, song_name: 'The Sick Bed of Cúchulainn', album_id: 68, artist_id: 21, genre_id: 8},
    {id: 69, track_number: 1, song_name: 'If I Should Fall from Grace with God', album_id: 69, artist_id: 21, genre_id: 8},
    {id: 70, track_number: 1, song_name: 'Feel the Pressure', album_id: 70, artist_id: 22, genre_id: 8},
    {id: 71, track_number: 1, song_name: 'Run Your Luck', album_id: 71, artist_id: 22, genre_id: 8},
    //#endregion
    //#region pop
    {id: 72, track_number: 1, song_name: 'Ain\'t No Sunshine', album_id: 72, artist_id: 23, genre_id: 9},
    {id: 73, track_number: 1, song_name: 'Ben', album_id: 73, artist_id: 23, genre_id: 9},
    {id: 74, track_number: 1, song_name: 'With a Child\'s Heart', album_id: 74, artist_id: 23, genre_id: 9},
    {id: 75, track_number: 1, song_name: 'Just Dance', album_id: 75, artist_id: 24, genre_id: 9},
    {id: 76, track_number: 1, song_name: 'Marry the Night', album_id: 76, artist_id: 24, genre_id: 9},
    {id: 77, track_number: 1, song_name: 'Aura', album_id: 77, artist_id: 24, genre_id: 9},
    {id: 78, track_number: 1, song_name: 'Trust in Me', album_id: 78, artist_id: 25, genre_id: 9},
    {id: 79, track_number: 1, song_name: 'One of the Boys', album_id: 79, artist_id: 25, genre_id: 9},
    {id: 80, track_number: 1, song_name: 'Teenage Dream', album_id: 80, artist_id: 25, genre_id: 9},
    //#endregion
    //#region rap
    {id: 81, track_number: 1, song_name: 'Infinite', album_id: 81, artist_id: 26, genre_id: 10},
    {id: 82, track_number: 1, song_name: 'Public Service Announcement', album_id: 82, artist_id: 26, genre_id: 10},
    {id: 83, track_number: 1, song_name: 'Public Service Announcement 2000', album_id: 83, artist_id: 26, genre_id: 10},
    {id: 84, track_number: 1, song_name: 'Intro', album_id: 84, artist_id: 27, genre_id: 10},
    {id: 85, track_number: 1, song_name: 'My Niggas', album_id: 85, artist_id: 27, genre_id: 10},
    {id: 86, track_number: 1, song_name: 'The Kennel', album_id: 86, artist_id: 27, genre_id: 10},
    {id: 87, track_number: 1, song_name: 'Buttermilk Biscuits (Keep on Square Dancin\')', album_id: 87, artist_id: 28, genre_id: 10},
    {id: 88, track_number: 1, song_name: 'Seminar', album_id: 88, artist_id: 28, genre_id: 10},
    {id: 89, track_number: 1, song_name: 'One Time\'s Got No Case', album_id: 89, artist_id: 28, genre_id: 10},
    //#endregion
    //#region edm
    {id: 90, track_number: 1, song_name: 'Daftendirekt', album_id: 90, artist_id: 29, genre_id: 11},
    {id: 91, track_number: 1, song_name: 'One More Time', album_id: 91, artist_id: 29, genre_id: 11},
    {id: 92, track_number: 1, song_name: 'Human After All', album_id: 92, artist_id: 29, genre_id: 11},
    {id: 93, track_number: 1, song_name: 'Wake Me Up', album_id: 93, artist_id: 30, genre_id: 11},
    {id: 94, track_number: 1, song_name: 'Waiting for Love', album_id: 94, artist_id: 30, genre_id: 11},
    {id: 95, track_number: 1, song_name: 'Peace of Mind', album_id: 95, artist_id: 30, genre_id: 11},
    {id: 96, track_number: 1, song_name: 'All Is Fair in Love and Brostep', album_id: 96, artist_id: 31, genre_id: 11},
    {id: 97, track_number: 1, song_name: 'Leave Me Like This', album_id: 97, artist_id: 31, genre_id: 11},
    {id: 98, track_number: 1, song_name: 'Don\'t Leave Me Like This', album_id: 98, artist_id: 31, genre_id: 11},
    //#endregion
  ]);
};
