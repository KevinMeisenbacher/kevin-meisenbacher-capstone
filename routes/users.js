const express = require('express');
const router = express.Router();
const db = require('../dbConfig');

router.get('/', async (req, res) => {
    try {
        const userData = await db('users');
        res.json(userData);
    } catch (err) {
        console.error('Error getting users', err);
        res.status(500).send('Server error; oh no!');
    }
});

router.get('/:username', async (req, res) => {
    try {
        const userData = await db('users')
        .where('users.username', req.params.username)
    } catch(err) {
        console.error('Error getting user', err);
        res.status(404).send('Might have typed the name wrong');
    } finally {
        if (req.params.username.includes('coffee')) {
            res.status(418).send('I am a teapot. I cannot brew coffee.');
        }
    }
});

module.exports = router;