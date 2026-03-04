const express = require('express');
const router = express.Router();
const db = require('../dbConfig');
router.use(express.json());

router.post('/:artist_id/:user_id', async (req, res) => {
    // Basically make sure only logged in users can like stuff
    for (let prop in req.body) {
        if (!req.body[prop]) return res.status(400).send(
            `Can't like an artist without ${prop}.` +
            !req.body.username && `You have to log in to like artists so the site 
            can know whose data to update and filter your preferences accordingly.`)
    }
    // Add data to bangers
    try {
        const banger = await db('bangers')
        .insert({
            'artist_id': req.params.artist_id,
            'user_id': req.params.user_id
        });
        res.status(201).json(banger);
    } catch (err) {
        console.error('Null value', err);
        res.status(500).json({err: 'Server screwed up with your like request. ' +
            'Message me if this doesn\'t get fixed shortly.'});
    }
});

router.post('/:artist_id/addFan', async (req, res, next) => {
    try {
        await db('artists')
            .update('fans', req.params.fans + 1);
        setTimeout(() => {
            next();
        }, 1000);
    } catch (err) {
        console.error('Didn\'t change artist data right', err);
        res.status(500).json({err: 'Server screwed up with your like request. ' +
            'Message me if this doesn\'t get fixed shortly.'});
    }
});

module.exports = router;