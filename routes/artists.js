const express = require('express');
const router = express.Router();
const db = require('../dbConfig');

router.get('/', async (_, res) => {
    try { 
        const artistData = await db('artists');
        res.json(artistData);
    } catch (err) {
        console.error('Error getting artists', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

router.get('/:genre_id?/:second_id?', async (req, res) => {
    const {origin_id, second_id} = req.params;
    try { 
        let query = await db('artists')
        .where('artists.origin_id', origin_id);
        if (second_id) 
            query = query.orWhere('artists.origin_id', second_id);
        const dbData = await query;
        res.json(artistData);
    } catch (err) {
        console.error('Error getting artists', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

module.exports = router;