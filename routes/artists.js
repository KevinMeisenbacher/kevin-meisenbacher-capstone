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

router.post('/:artist_id/like/:user_id', async (req, res) => {
    try {
        await db('bangers')
            .insert('artist_name', req.params.artist_id)
            .insert('user_id', req.params.user_id);
    } catch (err) {
        console.error('Didn\'t change artist data right', err);
        res.status(500).json({err: 'Server screwed up with your like request. ' +
            'Message me if this doesn\'t get fixed shortly.'});
    }
});

router.post('/:artist_id/addFan', async (req, res) => {
    try {
        await db('artists')
            .update('fans', req.params.fans + 1);
    } catch (err) {
        console.error('Didn\'t change artist data right', err);
        res.status(500).json({err: 'Server screwed up with your like request. ' +
            'Message me if this doesn\'t get fixed shortly.'});
    }
});

router.post('/:artist_id/removeFan', async (req, res) => {
    try {
        await db('artists')
            .update('fans', req.params.fans - 1);
    } catch (err) {
        console.error('Didn\'t change artist data right', err);
        res.status(500).json({err: 'Server screwed up with your like request. ' +
            'Message me if this doesn\'t get fixed shortly.'});
    }
});

router.post('/:artist_id/hate', async (req, res) => {
    try {
        await db('crap')
            .insert('artist_id', req.params.artist_id)
            .insert('user_id', req.params.user_id);
    } catch (err) {
        console.error('Didn\'t change artist data right', err);
        res.status(500).json({err: 'Server screwed up with your hate request. ' +
            'Message me if this doesn\'t get fixed shortly.'});
    }
});

router.post('/:artist_id/addHater', async (req, res) => {
    try {
        await db('artists')
            .update('fans', req.params.fans + 1);
    } catch (err) {
        console.error('Didn\'t change artist data right', err);
        res.status(500).json({err: 'Server screwed up with your like request. ' +
            'Message me if this doesn\'t get fixed shortly.'});
    }
});

router.post('/:artist_id/removeHater', async (req, res) => {
    try {
        await db('artists')
            .update('fans', req.params.fans - 1);
    } catch (err) {
        console.error('Didn\'t change artist data right', err);
        res.status(500).json({err: 'Server screwed up with your like request. ' +
            'Message me if this doesn\'t get fixed shortly.'});
    }
});

module.exports = router;