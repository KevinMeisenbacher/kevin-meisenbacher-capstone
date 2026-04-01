create table "users" (
    "id" integer not null PRIMARY KEY,
    "username" text not null,
    "password" text not null,
    "email" text not null,
    "token" text
)