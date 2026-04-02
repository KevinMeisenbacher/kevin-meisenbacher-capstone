const express = require('express');
const router = express.Router();
const db = require('../dbConfig');

// SQL code
router.get('/', async (_, res) => {
    try { 
        const dbData = await db('genres');
        res.json(dbData);
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

module.exports = router;