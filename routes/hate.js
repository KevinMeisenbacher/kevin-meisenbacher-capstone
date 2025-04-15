const express = require('express');
const router = express.Router();
const db = require('../dbConfig');
router.use(express.json());

router.post('/:artist_id/:genre_id/:inspiration_id/:username', async (req, res, next) => {
    // Basically make sure only logged in users can hate stuff
    for (let prop in req.body) {
        if (!req.body[property]) return res.status(400).send(
            `Can't like an artist without ${prop}.` +
            !req.body.username && `You have to log in to hate artists so the site 
            can know whose data to update and filter your preferences accordingly.`)
    }
    // Add data to rcap
    try {
        await db('crap')
        .insert({
            'artist_id': req.params.artist_id,
            'genre_id': req.params.genre_id,
            'inspiration_id': req.params.inspiration_id,
            'username': req.params.username
        });
    } catch (err) {
        console.error('Didn\'t change artist data right', err);
        res.status(500).json({err: 'Server screwed up with your hate request. ' +
            'Message me if this doesn\'t get fixed shortly.'});
    }
});

router.post('/:artist_id/addHater', async (req, res, next) => {
    try {
        await db('artists')
            .update('fans', req.params.fans + 1);
    } catch (err) {
        console.error('Didn\'t change artist data right', err);
        res.status(500).json({err: 'Server screwed up with your hate request. ' +
            'Message me if this doesn\'t get fixed shortly.'});
    }
});

module.exports = router;