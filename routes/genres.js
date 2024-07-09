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

module.exports = router;