exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('albums').del()
  await knex('albums').insert([
    //#region classical
    {id: 1, album_name: 'Symphonies', num_songs: 9, artist_id: 1, genre_id: 1},
    {id: 2, album_name: 'Concertos', num_songs: 18, artist_id: 1, genre_id: 1},
    {id: 3, album_name: 'Sonatas', num_songs: 36, artist_id: 1, genre_id: 1},
    {id: 4, album_name: 'Symphonies', num_songs: 8, artist_id: 2, genre_id: 1},
    {id: 5, album_name: 'Operas', num_songs: 11, artist_id: 2, genre_id: 1},
    {id: 6, album_name: 'Orchestral Suites', num_songs: 4, artist_id: 2, genre_id: 1},
    {id: 7, album_name: 'Symphonies', num_songs: 21, artist_id: 3, genre_id: 1},
    {id: 8, album_name: 'Concertos', num_songs: 551, artist_id: 3, genre_id: 1},
    {id: 9, album_name: 'Sonatas', num_songs: 113, artist_id: 3, genre_id: 1},
    //#endregion
    //#region country
    {id: 10, album_name: 'Johnny Cash with his Hot Blue Guitar', num_songs: 12, artist_id: 4, genre_id: 2},
    {id: 11, album_name: 'The Fabulous Johnny Cash', num_songs: 12, artist_id: 4, genre_id: 2},
    {id: 12, album_name: 'Hymns by Johnny Cash', num_songs: 12, artist_id: 4, genre_id: 2},
    {id: 13, album_name: 'Hello, I\'m Dolly', num_songs: 12, artist_id: 5, genre_id: 2},
    {id: 14, album_name: 'Just Because I\'m a Woman', num_songs: 12, artist_id: 5, genre_id: 2},
    {id: 15, album_name: 'In the Good Old Days', num_songs: 12, artist_id: 5, genre_id: 2},
    {id: 16, album_name: 'Songs of Leonard Cohen', num_songs: 10, artist_id: 6, genre_id: 2},
    {id: 17, album_name: 'Songs from a Room', num_songs: 10, artist_id: 6, genre_id: 2},
    {id: 18, album_name: 'Songs of Love and Hate', num_songs: 8, artist_id: 6, genre_id: 2},
    //#endregion
    //#region blues
    {id: 19, album_name: 'Singin\' the Blues', num_songs: 12, artist_id: 7, genre_id: 3},
    {id: 20, album_name: 'The Blues', num_songs: 12, artist_id: 7, genre_id: 3},
    {id: 21, album_name: 'B. B. King Wails', num_songs: 10, artist_id: 7, genre_id: 3},
    {id: 22, album_name: 'Muddy Waters Sings "Big Bill"', num_songs: 10, artist_id: 8, genre_id: 3},
    {id: 23, album_name: 'Folk Singer', num_songs: 12, artist_id: 8, genre_id: 3},
    {id: 24, album_name: 'Muddy, Brass & the Blues', num_songs: 12, artist_id: 8, genre_id: 3},
    {id: 25, album_name: 'House of the Blues', num_songs: 12, artist_id: 9, genre_id: 3},
    {id: 26, album_name: 'I\'m John Lee Hooker', num_songs: 12, artist_id: 9, genre_id: 3},
    {id: 27, album_name: 'The Country Blues', num_songs: 13, artist_id: 9, genre_id: 3},
    //#endregion
    //#region metal
    {id: 28, album_name: 'Holy Diver', num_songs: 9, artist_id: 10, genre_id: 4},
    {id: 29, album_name: 'The Last in Line', num_songs: 9, artist_id: 10, genre_id: 4},
    {id: 30, album_name: 'Sacred Heart', num_songs: 9, artist_id: 10, genre_id: 4},
    {id: 33, album_name: 'Kill \'em All', num_songs: 10, artist_id: 11, genre_id: 4, subgenre_id: 8},
    {id: 31, album_name: 'Ride the Lightning', num_songs: 8, artist_id: 11, genre_id: 4, subgenre_id: 8},
    {id: 32, album_name: 'Master of Puppets', num_songs: 8, artist_id: 11, genre_id: 4, subgenre_id: 8},
    {id: 34, album_name: 'Valley of the Damned', num_songs: 8, artist_id: 12, genre_id: 4, subgenre_id: 2},
    {id: 35, album_name: 'Sonic Firestorm', num_songs: 8, artist_id: 12, genre_id: 4, subgenre_id: 2},
    {id: 36, album_name: 'Inhuman Rampage', num_songs: 8, artist_id: 12, genre_id: 4, subgenre_id: 2},
    //#endregion
    //#region rock
    {id: 37, album_name: 'After School Session', num_songs: 13, artist_id: 13, genre_id: 6},
    {id: 38, album_name: 'One Dozen Berries', num_songs: 13, artist_id: 13, genre_id: 6},
    {id: 39, album_name: 'Chuck Berry Is On Top', num_songs: 13, artist_id: 13, genre_id: 6},
    {id: 40, album_name: 'Motorhead', num_songs: 8, artist_id: 14, genre_id: 6, subgenre_id: 24},
    {id: 41, album_name: 'Overkill', num_songs: 10, artist_id: 14, genre_id: 6, subgenre_id: 24},
    {id: 42, album_name: 'Bomber', num_songs: 12, artist_id: 14, genre_id: 6, subgenre_id: 24},
    {id: 43, album_name: 'Big Brother & the Holding Company', num_songs: 10, artist_id: 15, genre_id: 6},
    {id: 44, album_name: 'Cheap Thrills', num_songs: 7, artist_id: 15, genre_id: 6},
    {id: 45, album_name: 'I Got Dem Ol\' Kozmic Blues Again Mama!', num_songs: 8, artist_id: 15, genre_id: 6},
    //#endregion
    //#region jazz
    {id: 46, album_name: 'Jazz Classics', num_songs: 6, artist_id: 16, genre_id: 5},
    {id: 47, album_name: 'Satchmo at Symphony Hall', num_songs: 14, artist_id: 16, genre_id: 5},
    {id: 48, album_name: 'Satchmo at Pasadena', num_songs: 10, artist_id: 16, genre_id: 5},
    {id: 49, album_name: 'The New Sounds', num_songs: 4, artist_id: 17, genre_id: 5},
    {id: 50, album_name: 'Young Man with a Horn', num_songs: 6, artist_id: 17, genre_id: 5},
    {id: 51, album_name: 'Blue Period', num_songs: 3, artist_id: 17, genre_id: 5},
    {id: 52, album_name: 'Coltrane', num_songs: 6, artist_id: 18, genre_id: 5},
    {id: 53, album_name: 'John Coltrane with the Red Garland Trio', num_songs: 5, artist_id: 18, genre_id: 5},
    {id: 54, album_name: 'Soultrane', num_songs: 5, artist_id: 18, genre_id: 5},
    //#endregion
    //#region funk
    {id: 55, album_name: 'Please Please Please', num_songs: 16, artist_id: 19, genre_id: 7},
    {id: 56, album_name: 'Try Me!', num_songs: 16, artist_id: 19, genre_id: 7},
    {id: 57, album_name: 'Think!', num_songs: 12, artist_id: 19, genre_id: 7},
    {id: 58, album_name: 'Funkadelic', num_songs: 7, artist_id: 20, genre_id: 7},
    {id: 59, album_name: 'Free Your Mind... and Your Ass Will Follow', num_songs: 6, artist_id: 20, genre_id: 7},
    {id: 60, album_name: 'Maggot Brain', num_songs: 7, artist_id: 20, genre_id: 7},
    {id: 61, album_name: 'Come Get It', num_songs: 8, artist_id: 21, genre_id: 7},
    {id: 62, album_name: 'Bustin\' Out of L Seven', num_songs: 7, artist_id: 21, genre_id: 7},
    {id: 63, album_name: 'Fire It Up', num_songs: 7, artist_id: 21, genre_id: 7},
    //#endregion
    //#region punk
    {id: 64, album_name: 'Ramones', num_songs: 10, artist_id: 22, genre_id: 8},
    {id: 65, album_name: 'Leave Home', num_songs: 10, artist_id: 22, genre_id: 8},
    {id: 66, album_name: 'Rocket to Russia', num_songs: 14, artist_id: 22, genre_id: 8},
    {id: 67, album_name: 'Red Roses for Me', num_songs: 13, artist_id: 23, genre_id: 8},
    {id: 68, album_name: 'Rum Sodomy & the Lash', num_songs: 12, artist_id: 23, genre_id: 8},
    {id: 69, album_name: 'If I Should Fall from Grace with God', num_songs: 15, artist_id: 23, genre_id: 8},
    {id: 70, album_name: 'California Cursed', num_songs: 10, artist_id: 24, genre_id: 8, subgenre_id: 39},
    {id: 71, album_name: 'Good Good Times', num_songs: 10, artist_id: 24, genre_id: 8, subgenre_id: 39},
    //#endregion
    //#region pop
    {id: 72, album_name: 'Got to Be There', num_songs: 10, artist_id: 25, genre_id: 9},
    {id: 73, album_name: 'Ben', num_songs: 10, artist_id: 25, genre_id: 9},
    {id: 74, album_name: 'Music & Me', num_songs: 14, artist_id: 25, genre_id: 9},
    {id: 75, album_name: 'The Fame', num_songs: 13, artist_id: 26, genre_id: 9},
    {id: 76, album_name: 'Born This Way', num_songs: 14, artist_id: 26, genre_id: 9},
    {id: 77, album_name: 'Artpop', num_songs: 15, artist_id: 26, genre_id: 9},
    {id: 78, album_name: 'Katy Hudson', num_songs: 12, artist_id: 27, genre_id: 9},
    {id: 79, album_name: 'One of the Boys', num_songs: 13, artist_id: 27, genre_id: 9},
    {id: 80, album_name: 'Teenage Dream', num_songs: 12, artist_id: 27, genre_id: 9},
    //#endregion
    //#region rap
    {id: 81, album_name: 'Infinite', num_songs: 11, artist_id: 28, genre_id: 10},
    {id: 82, album_name: 'The Slim Shady LP', num_songs: 18, artist_id: 28, genre_id: 10},
    {id: 83, album_name: 'The Marshall Mathers LP', num_songs: 19, artist_id: 28, genre_id: 10},
    {id: 84, album_name: 'It\'s Dark and Hell is Hot', num_songs: 19, artist_id: 29, genre_id: 10},
    {id: 85, album_name: 'Flesh of My Flesh, Blood of My Blood', num_songs: 16, artist_id: 29, genre_id: 10},
    {id: 86, album_name: '... And Then There Was X', num_songs: 18, artist_id: 29, genre_id: 10},
    {id: 87, album_name: 'Swass', num_songs: 11, artist_id: 30, genre_id: 10},
    {id: 88, album_name: 'Seminar', num_songs: 10, artist_id: 30, genre_id: 10},
    {id: 89, album_name: 'Mack Daddy', num_songs: 13, artist_id: 30, genre_id: 10},
    //#endregion
    //#region edm
    {id: 90, album_name: 'Homework', num_songs: 16, artist_id: 31, genre_id: 11},
    {id: 91, album_name: 'Discovery', num_songs: 14, artist_id: 31, genre_id: 11},
    {id: 92, album_name: 'Human After All', num_songs: 10, artist_id: 31, genre_id: 11},
    {id: 93, album_name: 'True', num_songs: 10, artist_id: 32, genre_id: 11, subgenre_id: 90},
    {id: 94, album_name: 'Story', num_songs: 14, artist_id: 32, genre_id: 11, subgenre_id: 90},
    {id: 95, album_name: 'Tim', num_songs: 12, artist_id: 32, genre_id: 11, subgenre_id: 90},
    {id: 96, album_name: 'Recess', num_songs: 11, artist_id: 33, genre_id: 11, subgenre_id: 90},
    {id: 97, album_name: 'Quest for Fire', num_songs: 15, artist_id: 33, genre_id: 11, subgenre_id: 90},
    {id: 98, album_name: 'Don\'t Get Too Close', num_songs: 12, artist_id: 33, genre_id: 11, subgenre_id: 90},
  ]);
};
