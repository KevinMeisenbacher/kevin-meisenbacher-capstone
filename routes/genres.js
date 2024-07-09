const express = require('express');
const router = express.Router();
const db = require('../dbConfig');

// SQL code
router.get('/', async (_, res) => {
    try { 
        const genreData = await db('genres');
        res.json(genreData);
    } catch (err) {
        console.error('Error getting genres', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

router.get('/:id', async (req, res) => {
    try { 
        const genreData = await db('genres')
            .where('genres.id', req.params.id);
        res.json(genreData);
    } catch (err) {
        console.error('Error getting genres', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

router.get('/:id/:genre_name', async (req, res) => {
    try { 
        const genreData = await db('genres')
            .where('genres.id', req.params.id)
            .orWhere('genres.genre_name', req.params.genre_name);
        res.json(genreData);
    } catch (err) {
        console.error('Error getting genres', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

router.get('/:id/subgenres', async (req, res) => {
    try { 
        const dbData = await db('subgenres');
        res.json(dbData);
    } catch (err) {
        console.error('Error getting subgenres', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

// JSON code
// const data = require('../data/music_buddy.json');
// const genres = data.genres;
// const subgenres = data.subgenres;
// const artists = data.artists;
// const songs = data.songs;
// router.get('/', (_, res) => {
//     res.send(genres);
// })

// router.get('/:id', (req, res) => {
//     const genre = genres.find(genre => genre.id === req.params.id);
//     res.send(genre);
// });

// router.get('/:id/:genre_name', (req, res) => {
//     const reqGenres = genres.filter(genre => 
//         genre.id === req.params.id
//      || genre.genre_name === req.params.genre_name
//     );
//     console.log(req);
//     res.send(reqGenres);
// });

// router.get('/:id/subgenres', (req, res) => {
//     const reqSubgenres = subgenres.filter(subgenre => subgenre.origin_id === req.params.id);
//     res.send(reqSubgenres);
// });

// router.get('/:id/:genre_name/subgenres', (req, res) => {
//     const reqSubgenres = subgenres.filter(subgenre => 
//         subgenre.origin_id === req.params.id
//      || subgenre.subgenre_name.includes(req.params.genre_name)
//     );
//     res.send(reqSubgenres);
// });

// router.get('/:id/artists', (req, res) => {
//     const reqArtists = artists.filter(artist => artist.genre_id === req.params.id);
//     res.send(reqArtists);
// });

// router.get('/:id/songs', (req, res) => {
//     const reqSongs = songs.filter(song => song.genre_id === req.params.id);
//     res.send(reqSongs);
// });

module.exports = router;