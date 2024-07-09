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

router.get('/:id', async (req, res) => {
    try { 
        const artistData = await db('artists')
            .where('artists.id', req.params.id);
        res.json(artistData);
    } catch (err) {
        console.error('Error getting artists', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

router.get('/:genre_id/:second_id', async (req, res) => {
    try { 
        const artistData = await db('artists')
        .where('artists.genre_id', req.params.genre_id)
        .orWhere('artists.genre_id', req.params.second_id);
        res.json(artistData);
    } catch (err) {
        console.error('Error getting artists', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

module.exports = router;