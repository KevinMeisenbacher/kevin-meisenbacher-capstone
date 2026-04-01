create table "songs" (
    "id" integer not null PRIMARY KEY,
    "track_number" integer not null,
    "song_name" text not null,
    "artist_id" integer REFERENCES artists(id),
    "album_id" integer REFERENCES albums(id),
    "genre_id" integer REFERENCES genres(id),
    "subgenre_id" integer REFERENCES subgenres(id)
    )