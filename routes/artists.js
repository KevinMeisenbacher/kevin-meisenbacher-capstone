const express = require('express');
const router = express.Router();
const db = require('../dbConfig');

router.get('/', async (_, res) => {
    try { 
        const artistData = await db('artists');
        res.json(artistData);
    } catch (err) {
        console.error('Error getting artists', err);
        res.status(500).json({err: 'Server error getting artists'});
    }
});

router.get('/:genre_id?/:second_id?', async (req, res) => {
    const {genre_id, second_id} = req.params;
    try { 
        let query = await db('artists')
        .where('artists.genre_id', genre_id);
        if (second_id) 
            query = query.orWhere('artists.genre_id', second_id);
        const dbData = await query;
        res.json(dbData);
    } catch (err) {
        console.error('Didn\'t change artist data right', err);
        res.status(500).json({err: 'Server error getting artist IDs'});
    }
});

module.exports = router;