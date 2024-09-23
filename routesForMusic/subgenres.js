const express = require('express');
const router = express.Router();
const db = require('../dbConfig');

router.get('/', async (req, res) => {
    try { 
        const dbData = await db('subgenres');
        res.json(dbData);
    } catch (err) {
        console.error('Error getting subgenres', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

router.get('/:id', async (req, res) => {
    try { 
        const dbData = await db('subgenres')
            .where('subgenres.id', req.params.id);
        res.json(dbData);
    } catch (err) {
        console.error('Error getting subgenres', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

router.get('/:inspiration_id/:id', async (req, res) => {
    try { 
        const dbData = await db('subgenres')
        .where(req.params.inspiration_id && 'subgenres.inspiration_id', req.params.inspiration_id)
        .orWhere(req.params.id && 'genres.id', req.params.id);
        res.json(dbData);
    } catch (err) {
        console.error('Error getting subgenres', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

module.exports = router;