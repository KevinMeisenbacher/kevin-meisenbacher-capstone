const express = require('express');
const router = express.Router();
const db = require('../dbConfig');

router.get('/', async (_, res) => {
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
        const subgenreData = await db('subgenres')
            .where({id: req.params.id})
            .first();
        res.json(subgenreData);
    } catch (err) {
        console.error('Error getting subgenres', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

module.exports = router;