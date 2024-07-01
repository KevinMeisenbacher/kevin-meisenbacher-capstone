const express = require('express');
const router = express.Router();
const db = require('../dbConfig');

// SQL code
router.get('/', async (_, res) => {
    try { 
        const artistData = await db('albums');
        res.json(artistData);
    } catch (err) {
        console.error('Error getting albums', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

router.get('/:genre_id', async (req, res) => {
    try { 
        const artistData = await db('albums')
            .where('albums.genre_id', req.params.genre_id);
        res.json(artistData);
    } catch (err) {
        console.error('Error getting albums', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

router.get('/:genre_id/:second_id', async (req, res) => {
    try { 
        const artistData = await db('albums')
        .where('albums.genre_id', req.params.genre_id)
        .orWhere('albums.genre_id', req.params.second_id);
        res.json(artistData);
    } catch (err) {
        console.error('Error getting albums', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

module.exports = router;