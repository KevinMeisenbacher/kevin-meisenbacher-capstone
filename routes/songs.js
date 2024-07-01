const express = require('express');
const router = express.Router();
const db = require('../dbConfig');

// SQL code
router.get('/', async (_, res) => {
    try { 
        const subgenreData = await db('songs');
        res.json(subgenreData);
    } catch (err) {
        console.error('Error getting songs', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

router.get('/:genre_id', async (req, res) => {
    try { 
        const subgenreData = await db('songs')
            .where('songs.genre_id', req.params.genre_id);
        res.json(subgenreData);
    } catch (err) {
        console.error('Error getting songs', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

router.get('/:genre_id/:second_id', async (req, res) => {
    try { 
        const subgenreData = await db('songs')
        .where('songs.genre_id', req.params.genre_id)
        .orWhere('songs.genre_id', req.params.second_id);
        res.json(subgenreData);
    } catch (err) {
        console.error('Error getting songs', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

module.exports = router;