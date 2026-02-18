const express = require('express');
const router = express.Router();
const db = require('../dbConfig');

router.get('/:username', async (_, res) => {
    try { 
        const bangerData = await db('bangers');
        res.json(bangerData);
    } catch (err) {
        console.error('Error getting bangers', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

module.exports = router;