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

router.get('/:genre_id/:second_id?', async (req, res) => {
    const { genre_id, second_id } = req.params;
    try { 
        let query = db('songs')
        .where('songs.genre_id', genre_id);
        if (second_id)
            query = query.orWhere('songs.genre_id', second_id);
        const dbData = await query;
        res.json(dbData);
    } catch (err) {
        console.error('Error getting songs', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

module.exports = router;