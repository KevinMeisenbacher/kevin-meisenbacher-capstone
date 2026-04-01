create table "artists" (
    "id" integer not null PRIMARY KEY,
    "artist_name" text not null,
    "genre_id" integer REFERENCES genres(id),
    "subgenre_id" integer REFERENCES subgenres(id),
    "num_albums" integer not null,
    "num_songs" integer not null,
    "num_fans" integer,
    "num_haters" integer,
    "year_started" integer not null
    )