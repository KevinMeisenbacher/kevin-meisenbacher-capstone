const express = require('express');
const router = express.Router();
const db = require('../dbConfig');
const tunes = require('../musicArray');

// SQL code
router.get('/', async (_, res) => {
    try { 
        const dbData = await db('songs');
        res.json(dbData);
    } catch (err) {
        console.error('Error getting songs', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

router.get('/:genre_id', async (req, res) => {
    try { 
        const dbData = await db('songs')
            .where('songs.genre_id', req.params.genre_id);
        res.json(dbData);
    } catch (err) {
        console.error('Error getting songs', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

router.get('/:genre_id/:second_id', async (req, res) => {
    try { 
        const dbData = await db('songs')
        .where('songs.genre_id', req.params.genre_id)
        .orWhere('songs.genre_id', req.params.second_id);
        res.json(dbData);
    } catch (err) {
        console.error('Error getting songs', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

module.exports = router;