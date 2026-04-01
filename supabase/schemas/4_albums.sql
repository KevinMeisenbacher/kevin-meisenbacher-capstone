create table "albums" (
    "id" integer not null PRIMARY KEY,
    "artist_id" integer REFERENCES artists(id),
    "album_name" text not null,
    "genre_id" integer REFERENCES genres(id),
    "subgenre_id" integer REFERENCES subgenres(id),
    "num_songs" integer not null
)