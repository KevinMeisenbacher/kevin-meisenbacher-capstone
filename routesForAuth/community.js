const express = require('express');
const router = express.Router();
const db = require('../dbConfig');

router.get('/', async (_, res) => {
    try { 
        const userData = await db('users');
        res.json(userData);
    } catch (err) {
        console.error('Error getting users', err);
        res.status(500).json({err: 'Server error; oh no!'});
    }
});

module.exports = router;