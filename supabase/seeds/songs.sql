INSERT INTO songs
    (id, name, num_songs, album_id, artist_id, genre_id)
VALUES
    (1, : 1, : 'Symphony No. 1', 1, 1, 1),
    (2, : 1, : 'Piano Concerto No. 4', 2, 1, 1),
    (3, : 1, : 'Three early Kurfürstensonatas, No. 1 in E♭ major', 3, 1, 1),
    (4, : 1, : 'Winter Daydreams', 4, 2, 1),
    (5, : 1, : 'The Voyevoda', 5, 2, 1),
    (6, : 1, : 'Orchestral Suite No. 1 in D minor', 6, 2, 1),
    (7, : 1, : 'Sinfonia 111a', 7, 3, 1),
    (8, : 1, : 'Concerto 109', 8, 3, 1),
    (9, : 1, : 'Sonata 38', 9, 3, 1),
    --#endregion
    --#region country
    (10, : 1, : 'Rock Island Lane', 10, 4, 2),
    (11, : 1, : 'Run Softly, Blue River', 11, 4, 2),
    (12, : 1, : 'It Was Jesus', 12, 4, 2),
    (13, : 1, : 'Dumb Blonde', 13, 5, 2),
    (14, : 1, : 'You\'re Gonna Be Sorry', 14, 5, 2),
    (15, : 1, : 'Don\'t Let It Trouble Your Mind', 15, 5, 2),
    (16, : 1, : 'Suzanne', 16, 6, 2),
    (17, : 1, : 'Bird on the Wire', 17, 6, 2),
    (18, : 1, : 'Avalanche', 18, 6, 2),
    --#endregion
    --#region blues
    (19, : 1, : 'Please Love Me', 19, 7, 3),
    (20, : 1, : 'Why Do Things Happen to Me', 20, 7, 3),
    (21, : 1, : 'Sweet Thing', 21, 7, 3),
    (22, : 1, : 'Tell Me Baby', 22, 8, 3, inspiration_2),
    (23, : 1, : 'My Home Is in the Delta', 23, 8, 3, inspiration_2),
    (24, : 1, : 'Corine, Corina', 24, 8, 3, inspiration_2),
    (25, : 1, : 'Walkin\' the Boogie', 25, 9, 3),
    (26, : 1, : 'Dimples', 26, 9, 3),
    (27, : 1, : 'Black Snake', 27, 9, 3),
    --#endregion
    --#region metal
    (28, : 1, : 'Stand Up and Shout', 28, 13, 4),
    (29, : 1, : 'We Rock', 29, 13, 4),
    (30, : 1, : 'King of Rock n Roll', 30, 13, 4),
    (31, : 1, : 'Hit the Lights', 31, 14, 4, inspiration_8),
    (32, : 1, : 'Fight Fire with Fire', 32, 14, 4, inspiration_8),
    (33, : 1, : 'Battery', 33, 14, 4, inspiration_8),
    (34, : 1, : 'Invocation of the Apocalyptic Evil', 34, 15, 4, inspiration_1),
    (35, : 1, : 'My Spirit Will Go On', 35, 15, 4, inspiration_1),
    (36, : 1, : 'Through the Fire and Flames', 36, 15, 4, inspiration_1),
    --#endregion
    --#region jazz
    (37, : 1, : 'Wild Man Blues', 37, 16, 5),
    (38, : 1, : 'King Porter Stomp', 38, 16, 5),
    (39, : 1, : 'Back Home Again in Indiana', 39, 16, 5),
    (40, : 1, : 'Conception', 40, 17, 5),
    (41, : 1, : 'Dear Old Stockholm', 41, 17, 5),
    (42, : 1, : 'Bluing', 42, 17, 5),
    (43, : 1, : 'Bakai', 43, 18, 5),
    (44, : 1, : 'Traneing In', 44, 18, 5),
    (45, : 1, : 'Good Bait', 45, 18, 5),
    --#endregion
    --#region rock
    (46, : 1, : 'School Days', 46, 10, 6, inspiration_2),
    (47, : 1, : 'Sweet Little Sixteen', 47, 10, 6, inspiration_2),
    (48, : 1, : 'Almost Grown', 48, 10, 6, inspiration_2),
    (49, : 1, : 'Motörhead', 49, 11, 6),
    (50, : 1, : 'Overkill', 50, 11, 6),
    (51, : 1, : 'Dead Men Tell No Tales', 51, 11, 6),
    (52, : 1, : 'Bye, Bye Baby', 52, 12, 6),
    (53, : 1, : 'Combination of the Two', 53, 12, 6),
    (54, : 1, : 'Try (Just a Little Bit Harder)', 54, 12, 6),
    --#endregion
    --#region funk
    (55, : 1, : 'Please, Please, Please', 55, 19, 7),
    (56, : 1, : 'There Must Be a Reason', 56, 19, 7),
    (57, : 1, : 'Think', 57, 19, 7),
    (58, : 1, : 'Mommy, What\'s a Funkadelic?', 58, 20, 7),
    (59, : 1, : 'Free Your Mind and Your Ass Will Follow', 59, 20, 7),
    (60, : 1, : 'Maggot Brain', 60, 20, 7),
    (61, : 1, : 'Stone City Band, Hi', 61, 21, 7),
    (62, : 1, : 'Bustin\' Out', 62, 21, 7),
    (63, : 1, : 'Fire It Up', 63, 21, 7),
    --#endregion
    --#region punk
    (64, : 1, : 'Blitzkrieg Bop', 64, 22, 8),
    (65, : 1, : 'Glad to See You Go', 65, 22, 8),
    (66, : 1, : 'Cretin Hop', 66, 22, 8),
    (67, : 1, : 'Transmetropolitan', 67, 23, 8),
    (68, : 1, : 'The Sick Bed of Cúchulainn', 68, 23, 8),
    (69, : 1, : 'If I Should Fall from Grace with God', 69, 23, 8),
    (70, : 1, : 'Feel the Pressure', 70, 24, 8, inspiration_4),
    (71, : 1, : 'Run Your Luck', 71, 24, 8, inspiration_4),
    --#endregion
    --#region pop
    (72, : 1, : 'Ain\'t No Sunshine', 72, 25, 9),
    (73, : 1, : 'Ben', 73, 25, 9),
    (74, : 1, : 'With a Child\'s Heart', 74, 25, 9),
    (75, : 1, : 'Just Dance', 75, 26, 9),
    (76, : 1, : 'Marry the Night', 76, 26, 9),
    (77, : 1, : 'Aura', 77, 26, 9),
    (78, : 1, : 'Trust in Me', 78, 27, 9),
    (79, : 1, : 'One of the Boys', 79, 27, 9),
    (80, : 1, : 'Teenage Dream', 80, 27, 9),
    --#endregion
    --#region rap
    (81, : 1, : 'Infinite', 81, 28, 10),
    (82, : 1, : 'Public Service Announcement', 82, 28, 10),
    (83, : 1, : 'Public Service Announcement 2000', 83, 28, 10),
    (84, : 1, : 'Intro', 84, 29, 10),
    (85, : 1, : 'My Niggas', 85, 29, 10),
    (86, : 1, : 'The Kennel', 86, 29, 10),
    (87, : 1, : 'Buttermilk Biscuits (Keep on Square Dancin\')', 87, 30, 10),
    (88, : 1, : 'Seminar', 88, 30, 10),
    (89, : 1, : 'One Time\'s Got No Case', 89, 30, 10),
    --#endregion
    --#region edm
    (90, : 1, : 'Daftendirekt', 90, 31, 11),
    (91, : 1, : 'One More Time', 91, 31, 11),
    (92, : 1, : 'Human After All', 92, 31, 11),
    (93, : 1, : 'Wake Me Up', 93, 32, 11),
    (94, : 1, : 'Waiting for Love', 94, 32, 11),
    (95, : 1, : 'Peace of Mind', 95, 32, 11),
    (96, : 1, : 'All Is Fair in Love and Brostep', 96, 33, 11),
    (97, : 1, : 'Leave Me Like This', 97, 33, 11),
    (98, : 1, : 'Don\'t Leave Me Like This', 98, 33, 11)