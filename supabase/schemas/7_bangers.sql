create table "bangers" (
    "id" integer not null PRIMARY KEY,
    "user_id" integer REFERENCES users(id),
    "artist_id" integer REFERENCES artists(id)
)