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

router.get('/:origin_id/:second_id', async (req, res) => {
    try { 
        const dbData = await db('subgenres')
        .where('subgenres.origin_id', req.params.origin_id)
        .orWhere('subgenres.origin_id', req.params.second_id);
        res.json(dbData);
    } catch (err) {
        console.error('Error getting subgenres', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

module.exports = router;