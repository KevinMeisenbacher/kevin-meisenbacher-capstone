INSERT INTO albums
    (id, album_name, num_songs, artist_id, genre_id)
VALUES
    (1, 'Symphonies', 9, 1, 1),
    (2, 'Concertos', 18, 1, 1),
    (3, 'Sonatas', 36, 1, 1),
    (4, 'Symphonies', 8, 2, 1),
    (5, 'Operas', 11, 2, 1),
    (6, 'Orchestral Suites', 4, 2, 1),
    (7, 'Symphonies', 21, 3, 1),
    (8, 'Concertos', 551, 3, 1),
    (9, 'Sonatas', 113, 3, 1),
    --#endregion
    --#region country
    (10, 'Johnny Cash with his Hot Blue Guitar', 12, 4, 2),
    (11, 'The Fabulous Johnny Cash', 12, 4, 2),
    (12, 'Hymns by Johnny Cash', 12, 4, 2),
    (13, 'Hello, I\'m Dolly', 12, 5, 2),
    (14, 'Just Because I\'m a Woman', 12, 5, 2),
    (15, 'In the Good Old Days', 12, 5, 2),
    (16, 'Songs of Leonard Cohen', 10, 6, 2),
    (17, 'Songs from a Room', 10, 6, 2),
    (18, 'Songs of Love and Hate', 8, 6, 2),
    --#endregion
    --#region blues
    (19, 'Singin\' the Blues', 12, 7, 3),
    (20, 'The Blues', 12, 7, 3),
    (21, 'B. B. King Wails', 10, 7, 3),
    (22, 'Muddy Waters Sings "Big Bill"', 10, 8, 3),
    (23, 'Folk Singer', 12, 8, 3),
    (24, 'Muddy, Brass & the Blues', 12, 8, 3),
    (25, 'House of the Blues', 12, 9, 3),
    (26, 'I\'m John Lee Hooker', 12, 9, 3),
    (27, 'The Country Blues', 13, 9, 3),
    --#endregion
    --#region metal
    (28, 'Holy Diver', 9, 10, 4),
    (29, 'The Last in Line', 9, 10, 4),
    (30, 'Sacred Heart', 9, 10, 4),
    (33, 'Kill \'em All', 10, 11, 4, sub8),
    (31, 'Ride the Lightning', 8, 11, 4, sub8),
    (32, 'Master of Puppets', 8, 11, 4, sub8),
    (34, 'Valley of the Damned', 8, 12, 4, sub2),
    (35, 'Sonic Firestorm', 8, 12, 4, sub2),
    (36, 'Inhuman Rampage', 8, 12, 4, sub2),
    --#endregion
    --#region rock
    (37, 'After School Session', 13, 13, 6),
    (38, 'One Dozen Berries', 13, 13, 6),
    (39, 'Chuck Berry Is On Top', 13, 13, 6),
    (40, 'Motorhead', 8, 14, 6, sub24),
    (41, 'Overkill', 10, 14, 6, sub24),
    (42, 'Bomber', 12, 14, 6, sub24),
    (43, 'Big Brother & the Holding Company', 10, 15, 6),
    (44, 'Cheap Thrills', 7, 15, 6),
    (45, 'I Got Dem Ol\' Kozmic Blues Again Mama!', 8, 15, 6),
    --#endregion
    --#region jazz
    (46, 'Jazz Classics', 6, 16, 5),
    (47, 'Satchmo at Symphony Hall', 14, 16, 5),
    (48, 'Satchmo at Pasadena', 10, 16, 5),
    (49, 'The New Sounds', 4, 17, 5),
    (50, 'Young Man with a Horn', 6, 17, 5),
    (51, 'Blue Period', 3, 17, 5),
    (52, 'Coltrane', 6, 18, 5),
    (53, 'John Coltrane with the Red Garland Trio', 5, 18, 5),
    (54, 'Soultrane', 5, 18, 5),
    --#endregion
    --#region funk
    (55, 'Please Please Please', 16, 19, 7),
    (56, 'Try Me!', 16, 19, 7),
    (57, 'Think!', 12, 19, 7),
    (58, 'Funkadelic', 7, 20, 7),
    (59, 'Free Your Mind... and Your Ass Will Follow', 6, 20, 7),
    (60, 'Maggot Brain', 7, 20, 7),
    (61, 'Come Get It', 8, 21, 7),
    (62, 'Bustin\' Out of L Seven', 7, 21, 7),
    (63, 'Fire It Up', 7, 21, 7),
    --#endregion
    --#region punk
    (64, 'Ramones', 10, 22, 8),
    (65, 'Leave Home', 10, 22, 8),
    (66, 'Rocket to Russia', 14, 22, 8),
    (67, 'Red Roses for Me', 13, 23, 8),
    (68, 'Rum Sodomy & the Lash', 12, 23, 8),
    (69, 'If I Should Fall from Grace with God', 15, 23, 8),
    (70, 'California Cursed', 10, 24, 8, sub39),
    (71, 'Good Good Times', 10, 24, 8, sub39),
    --#endregion
    --#region pop
    (72, 'Got to Be There', 10, 25, 9),
    (73, 'Ben', 10, 25, 9),
    (74, 'Music & Me', 14, 25, 9),
    (75, 'The Fame', 13, 26, 9),
    (76, 'Born This Way', 14, 26, 9),
    (77, 'Artpop', 15, 26, 9),
    (78, 'Katy Hudson', 12, 27, 9),
    (79, 'One of the Boys', 13, 27, 9),
    (80, 'Teenage Dream', 12, 27, 9),
    --#endregion
    --#region rap
    (81, 'Infinite', 11, 28, 10),
    (82, 'The Slim Shady LP', 18, 28, 10),
    (83, 'The Marshall Mathers LP', 19, 28, 10),
    (84, 'It\'s Dark and Hell is Hot', 19, 29, 10),
    (85, 'Flesh of My Flesh, Blood of My Blood', 16, 29, 10),
    (86, '... And Then There Was X', 18, 29, 10),
    (87, 'Swass', 11, 30, 10),
    (88, 'Seminar', 10, 30, 10),
    (89, 'Mack Daddy', 13, 30, 10),
    --#endregion
    --#region edm
    (90, 'Homework', 16, 31, 11),
    (91, 'Discovery', 14, 31, 11),
    (92, 'Human After All', 10, 31, 11),
    (93, 'True', 10, 32, 11, sub90),
    (94, 'Story', 14, 32, 11, sub90),
    (95, 'Tim', 12, 32, 11, sub90),
    (96, 'Recess', 11, 33, 11, sub90),
    (97, 'Quest for Fire', 15, 33, 11, sub90),
    (98, 'Don\'t Get Too Close', 12, 33, 11, sub90)