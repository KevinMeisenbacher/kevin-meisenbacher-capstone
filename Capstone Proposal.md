# Project Title

## Overview

Music Buddy recommends music based on the genres people like by picking the top several songs that relate to the criteria people choose depending on what they want to get into.

### Problem

Spotify is a 2-way guessing game. Its recommendations consistently satisfy people but sometimes don't, and it is either costly or obnoxious. Music Buddy will be a simple app that will give people lists of songs to check out based on what they want, and when they find something they like, they can check them out later.

### User Profile

People looking for new music either based on what they like or wanting to check out some new genres

### Features

- Checklists of what genres people like
- Checklists of what genres people want to get into (optional)
- Lists of songs based on chosen criteria with respective artists, genres and other basic info
- (later) *Like/dislike buttons to give people better recommendations based on their tastes*
- (later) *Popularity filters to skip mainstream stuff*

## Implementation

### Tech Stack

- React
- Express
- MySQL
- Client libraries:
    - react-router
    - axios
- Server libraries:
    - express
    - knex
- Maybes:
    - *uuid*
    - *fs*
    - *passport.js*

### APIs

- Start with a small and simple API to get everything working nicely
- (maybe later) *Incorporate a popular API to give people more options and top results and pick if they want what is or isn't popular*

### Sitemap

- Questionnaire to filter down what people might like
- Music List based on filtered and consolidated criteria

### Mockups

![](frontend_mockup.png)

### Data

![](db_mockup.png)

### Endpoints

**GET /genres**
- Get all genres

Parameters:
- genre_name

**GET /genres/genre_name**
- Get all artists within a genre

Parameters:
All artists within the specified genre

**GET /genres/genre_name/related**
- Get *(MAYBE top 10)* related to what is chosen

Parameters:
- Everything in /songs that has a genre or subgenre related to the request

**GET /artists**
- Get all artists

Parameters:
- artist_name
- primary_genre
- starting_year
- num_albums
- num_songs

**GET /artists/artist_name/genres
- Get all genres that relate to a specific artist's genre

Parameters:
- genre_name FROM genres
*- genre_name*
- subgenre_name FROM subgenres
*- subgenre_name*

**GET /artists/:artist_name/albums**
- Get all of a artist's albums

**GET /songs**
- Get all songs

Parameters:
- song_name
- genre_name
- subgenre_name
- artist_name

**GET /artists/:artist_name/songs**
- Get all songs from a certain artist

### Auth

No authentication yet. Thinking of implementing user accounts sometime after capstone, but that's out of scope for now.

## Roadmap

- Create database
    - Start with genres I know decently and don't hate. Add fusion genres that relate between those, and maybe throw in some subgenres.
    - Put in the most popular artists from those genres as well as a few key songs people will like
- Create server
    - Get all data from the database
    - Create logic that filters songs/artists(depending on user input) based on choices
- Create client
    - Build the form that will do all of the filtering magic
    - Create the music list page that will get all of the backend queries

## Nice-to-haves

- Filter based on popularity to either get top hits or filter out mainstream crap
- External API to give people any music they could want
- Downloadable local storage for people to check out their recommendations later
- Sampling feature so people can just listen to key parts of a song