
  create table "public"."albums" (
    "id" integer not null,
    "artist_id" integer,
    "album_name" text not null,
    "genre_id" integer,
    "subgenre_id" integer,
    "num_songs" integer not null
      );



  create table "public"."artists" (
    "id" integer not null,
    "artist_name" text not null,
    "genre_id" integer,
    "subgenre_id" integer,
    "num_albums" integer not null,
    "num_songs" integer not null,
    "num_fans" integer,
    "num_haters" integer,
    "year_started" integer not null
      );



  create table "public"."bangers" (
    "id" integer not null,
    "user_id" integer,
    "artist_id" integer
      );



  create table "public"."crap" (
    "id" integer not null,
    "user_id" integer,
    "artist_id" integer
      );



  create table "public"."genres" (
    "id" integer not null,
    "genre_name" text not null
      );



  create table "public"."songs" (
    "id" integer not null,
    "track_number" integer not null,
    "song_name" text not null,
    "artist_id" integer,
    "album_id" integer,
    "genre_id" integer,
    "subgenre_id" integer
      );



  create table "public"."subgenres" (
    "id" integer not null,
    "subgenre_name" text not null,
    "origin_id" integer,
    "inspiration_id" integer,
    "inspiration_name" text,
    "derivative_id" integer,
    "derivative_name" text
      );



  create table "public"."users" (
    "id" integer not null,
    "username" text not null,
    "password" text not null,
    "email" text not null,
    "token" text
      );


CREATE UNIQUE INDEX albums_pkey ON public.albums USING btree (id);

CREATE UNIQUE INDEX artists_pkey ON public.artists USING btree (id);

CREATE UNIQUE INDEX bangers_pkey ON public.bangers USING btree (id);

CREATE UNIQUE INDEX crap_pkey ON public.crap USING btree (id);

CREATE UNIQUE INDEX genres_pkey ON public.genres USING btree (id);

CREATE UNIQUE INDEX songs_pkey ON public.songs USING btree (id);

CREATE UNIQUE INDEX subgenres_pkey ON public.subgenres USING btree (id);

CREATE UNIQUE INDEX users_pkey ON public.users USING btree (id);

alter table "public"."albums" add constraint "albums_pkey" PRIMARY KEY using index "albums_pkey";

alter table "public"."artists" add constraint "artists_pkey" PRIMARY KEY using index "artists_pkey";

alter table "public"."bangers" add constraint "bangers_pkey" PRIMARY KEY using index "bangers_pkey";

alter table "public"."crap" add constraint "crap_pkey" PRIMARY KEY using index "crap_pkey";

alter table "public"."genres" add constraint "genres_pkey" PRIMARY KEY using index "genres_pkey";

alter table "public"."songs" add constraint "songs_pkey" PRIMARY KEY using index "songs_pkey";

alter table "public"."subgenres" add constraint "subgenres_pkey" PRIMARY KEY using index "subgenres_pkey";

alter table "public"."users" add constraint "users_pkey" PRIMARY KEY using index "users_pkey";

alter table "public"."albums" add constraint "albums_artist_id_fkey" FOREIGN KEY (artist_id) REFERENCES public.artists(id) not valid;

alter table "public"."albums" validate constraint "albums_artist_id_fkey";

alter table "public"."albums" add constraint "albums_genre_id_fkey" FOREIGN KEY (genre_id) REFERENCES public.genres(id) not valid;

alter table "public"."albums" validate constraint "albums_genre_id_fkey";

alter table "public"."albums" add constraint "albums_subgenre_id_fkey" FOREIGN KEY (subgenre_id) REFERENCES public.subgenres(id) not valid;

alter table "public"."albums" validate constraint "albums_subgenre_id_fkey";

alter table "public"."artists" add constraint "artists_genre_id_fkey" FOREIGN KEY (genre_id) REFERENCES public.genres(id) not valid;

alter table "public"."artists" validate constraint "artists_genre_id_fkey";

alter table "public"."artists" add constraint "artists_subgenre_id_fkey" FOREIGN KEY (subgenre_id) REFERENCES public.subgenres(id) not valid;

alter table "public"."artists" validate constraint "artists_subgenre_id_fkey";

alter table "public"."bangers" add constraint "bangers_artist_id_fkey" FOREIGN KEY (artist_id) REFERENCES public.artists(id) not valid;

alter table "public"."bangers" validate constraint "bangers_artist_id_fkey";

alter table "public"."bangers" add constraint "bangers_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public.users(id) not valid;

alter table "public"."bangers" validate constraint "bangers_user_id_fkey";

alter table "public"."crap" add constraint "crap_artist_id_fkey" FOREIGN KEY (artist_id) REFERENCES public.artists(id) not valid;

alter table "public"."crap" validate constraint "crap_artist_id_fkey";

alter table "public"."crap" add constraint "crap_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public.users(id) not valid;

alter table "public"."crap" validate constraint "crap_user_id_fkey";

alter table "public"."songs" add constraint "songs_album_id_fkey" FOREIGN KEY (album_id) REFERENCES public.albums(id) not valid;

alter table "public"."songs" validate constraint "songs_album_id_fkey";

alter table "public"."songs" add constraint "songs_artist_id_fkey" FOREIGN KEY (artist_id) REFERENCES public.artists(id) not valid;

alter table "public"."songs" validate constraint "songs_artist_id_fkey";

alter table "public"."songs" add constraint "songs_genre_id_fkey" FOREIGN KEY (genre_id) REFERENCES public.genres(id) not valid;

alter table "public"."songs" validate constraint "songs_genre_id_fkey";

alter table "public"."songs" add constraint "songs_subgenre_id_fkey" FOREIGN KEY (subgenre_id) REFERENCES public.subgenres(id) not valid;

alter table "public"."songs" validate constraint "songs_subgenre_id_fkey";

grant delete on table "public"."albums" to "anon";

grant insert on table "public"."albums" to "anon";

grant references on table "public"."albums" to "anon";

grant select on table "public"."albums" to "anon";

grant trigger on table "public"."albums" to "anon";

grant truncate on table "public"."albums" to "anon";

grant update on table "public"."albums" to "anon";

grant delete on table "public"."albums" to "authenticated";

grant insert on table "public"."albums" to "authenticated";

grant references on table "public"."albums" to "authenticated";

grant select on table "public"."albums" to "authenticated";

grant trigger on table "public"."albums" to "authenticated";

grant truncate on table "public"."albums" to "authenticated";

grant update on table "public"."albums" to "authenticated";

grant delete on table "public"."albums" to "service_role";

grant insert on table "public"."albums" to "service_role";

grant references on table "public"."albums" to "service_role";

grant select on table "public"."albums" to "service_role";

grant trigger on table "public"."albums" to "service_role";

grant truncate on table "public"."albums" to "service_role";

grant update on table "public"."albums" to "service_role";

grant delete on table "public"."artists" to "anon";

grant insert on table "public"."artists" to "anon";

grant references on table "public"."artists" to "anon";

grant select on table "public"."artists" to "anon";

grant trigger on table "public"."artists" to "anon";

grant truncate on table "public"."artists" to "anon";

grant update on table "public"."artists" to "anon";

grant delete on table "public"."artists" to "authenticated";

grant insert on table "public"."artists" to "authenticated";

grant references on table "public"."artists" to "authenticated";

grant select on table "public"."artists" to "authenticated";

grant trigger on table "public"."artists" to "authenticated";

grant truncate on table "public"."artists" to "authenticated";

grant update on table "public"."artists" to "authenticated";

grant delete on table "public"."artists" to "service_role";

grant insert on table "public"."artists" to "service_role";

grant references on table "public"."artists" to "service_role";

grant select on table "public"."artists" to "service_role";

grant trigger on table "public"."artists" to "service_role";

grant truncate on table "public"."artists" to "service_role";

grant update on table "public"."artists" to "service_role";

grant delete on table "public"."bangers" to "anon";

grant insert on table "public"."bangers" to "anon";

grant references on table "public"."bangers" to "anon";

grant select on table "public"."bangers" to "anon";

grant trigger on table "public"."bangers" to "anon";

grant truncate on table "public"."bangers" to "anon";

grant update on table "public"."bangers" to "anon";

grant delete on table "public"."bangers" to "authenticated";

grant insert on table "public"."bangers" to "authenticated";

grant references on table "public"."bangers" to "authenticated";

grant select on table "public"."bangers" to "authenticated";

grant trigger on table "public"."bangers" to "authenticated";

grant truncate on table "public"."bangers" to "authenticated";

grant update on table "public"."bangers" to "authenticated";

grant delete on table "public"."bangers" to "service_role";

grant insert on table "public"."bangers" to "service_role";

grant references on table "public"."bangers" to "service_role";

grant select on table "public"."bangers" to "service_role";

grant trigger on table "public"."bangers" to "service_role";

grant truncate on table "public"."bangers" to "service_role";

grant update on table "public"."bangers" to "service_role";

grant delete on table "public"."crap" to "anon";

grant insert on table "public"."crap" to "anon";

grant references on table "public"."crap" to "anon";

grant select on table "public"."crap" to "anon";

grant trigger on table "public"."crap" to "anon";

grant truncate on table "public"."crap" to "anon";

grant update on table "public"."crap" to "anon";

grant delete on table "public"."crap" to "authenticated";

grant insert on table "public"."crap" to "authenticated";

grant references on table "public"."crap" to "authenticated";

grant select on table "public"."crap" to "authenticated";

grant trigger on table "public"."crap" to "authenticated";

grant truncate on table "public"."crap" to "authenticated";

grant update on table "public"."crap" to "authenticated";

grant delete on table "public"."crap" to "service_role";

grant insert on table "public"."crap" to "service_role";

grant references on table "public"."crap" to "service_role";

grant select on table "public"."crap" to "service_role";

grant trigger on table "public"."crap" to "service_role";

grant truncate on table "public"."crap" to "service_role";

grant update on table "public"."crap" to "service_role";

grant delete on table "public"."genres" to "anon";

grant insert on table "public"."genres" to "anon";

grant references on table "public"."genres" to "anon";

grant select on table "public"."genres" to "anon";

grant trigger on table "public"."genres" to "anon";

grant truncate on table "public"."genres" to "anon";

grant update on table "public"."genres" to "anon";

grant delete on table "public"."genres" to "authenticated";

grant insert on table "public"."genres" to "authenticated";

grant references on table "public"."genres" to "authenticated";

grant select on table "public"."genres" to "authenticated";

grant trigger on table "public"."genres" to "authenticated";

grant truncate on table "public"."genres" to "authenticated";

grant update on table "public"."genres" to "authenticated";

grant delete on table "public"."genres" to "service_role";

grant insert on table "public"."genres" to "service_role";

grant references on table "public"."genres" to "service_role";

grant select on table "public"."genres" to "service_role";

grant trigger on table "public"."genres" to "service_role";

grant truncate on table "public"."genres" to "service_role";

grant update on table "public"."genres" to "service_role";

grant delete on table "public"."songs" to "anon";

grant insert on table "public"."songs" to "anon";

grant references on table "public"."songs" to "anon";

grant select on table "public"."songs" to "anon";

grant trigger on table "public"."songs" to "anon";

grant truncate on table "public"."songs" to "anon";

grant update on table "public"."songs" to "anon";

grant delete on table "public"."songs" to "authenticated";

grant insert on table "public"."songs" to "authenticated";

grant references on table "public"."songs" to "authenticated";

grant select on table "public"."songs" to "authenticated";

grant trigger on table "public"."songs" to "authenticated";

grant truncate on table "public"."songs" to "authenticated";

grant update on table "public"."songs" to "authenticated";

grant delete on table "public"."songs" to "service_role";

grant insert on table "public"."songs" to "service_role";

grant references on table "public"."songs" to "service_role";

grant select on table "public"."songs" to "service_role";

grant trigger on table "public"."songs" to "service_role";

grant truncate on table "public"."songs" to "service_role";

grant update on table "public"."songs" to "service_role";

grant delete on table "public"."subgenres" to "anon";

grant insert on table "public"."subgenres" to "anon";

grant references on table "public"."subgenres" to "anon";

grant select on table "public"."subgenres" to "anon";

grant trigger on table "public"."subgenres" to "anon";

grant truncate on table "public"."subgenres" to "anon";

grant update on table "public"."subgenres" to "anon";

grant delete on table "public"."subgenres" to "authenticated";

grant insert on table "public"."subgenres" to "authenticated";

grant references on table "public"."subgenres" to "authenticated";

grant select on table "public"."subgenres" to "authenticated";

grant trigger on table "public"."subgenres" to "authenticated";

grant truncate on table "public"."subgenres" to "authenticated";

grant update on table "public"."subgenres" to "authenticated";

grant delete on table "public"."subgenres" to "service_role";

grant insert on table "public"."subgenres" to "service_role";

grant references on table "public"."subgenres" to "service_role";

grant select on table "public"."subgenres" to "service_role";

grant trigger on table "public"."subgenres" to "service_role";

grant truncate on table "public"."subgenres" to "service_role";

grant update on table "public"."subgenres" to "service_role";

grant delete on table "public"."users" to "anon";

grant insert on table "public"."users" to "anon";

grant references on table "public"."users" to "anon";

grant select on table "public"."users" to "anon";

grant trigger on table "public"."users" to "anon";

grant truncate on table "public"."users" to "anon";

grant update on table "public"."users" to "anon";

grant delete on table "public"."users" to "authenticated";

grant insert on table "public"."users" to "authenticated";

grant references on table "public"."users" to "authenticated";

grant select on table "public"."users" to "authenticated";

grant trigger on table "public"."users" to "authenticated";

grant truncate on table "public"."users" to "authenticated";

grant update on table "public"."users" to "authenticated";

grant delete on table "public"."users" to "service_role";

grant insert on table "public"."users" to "service_role";

grant references on table "public"."users" to "service_role";

grant select on table "public"."users" to "service_role";

grant trigger on table "public"."users" to "service_role";

grant truncate on table "public"."users" to "service_role";

grant update on table "public"."users" to "service_role";


