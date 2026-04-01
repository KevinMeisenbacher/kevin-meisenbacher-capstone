create table "subgenres" (
    "id" integer not null PRIMARY KEY,
    "subgenre_name" text not null,
    "origin_id" integer,
    "inspiration_id" integer,
    "inspiration_name" text,
    "derivative_id" integer,
    "derivative_name" text
)