const express = require('express');
const router = express.Router();
const db = require('../dbConfig');

// SQL code
router.get('/', async (req, res) => {
    try { 
        const subgenreData = await db('subgenres');
        res.json(subgenreData);
    } catch (err) {
        console.error('Error getting subgenres', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

router.get('/:origin_id', async (req, res) => {
    try { 
        const subgenreData = await db('subgenres')
            .where('subgenres.origin_id', req.params.origin_id);
        res.json(subgenreData);
    } catch (err) {
        console.error('Error getting subgenres', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

router.get('/:origin_id/:second_id', async (req, res) => {
    try { 
        const subgenreData = await db('subgenres')
        .where('subgenres.origin_id', req.params.origin_id)
        .orWhere('subgenres.origin_id', req.params.second_id);
        res.json(subgenreData);
    } catch (err) {
        console.error('Error getting subgenres', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

module.exports = router;