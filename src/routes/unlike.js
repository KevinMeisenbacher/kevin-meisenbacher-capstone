const express = require('express');
const router = express.Router();
const db = require('../dbConfig');
router.use(express.json());

router.post('/:artist_id/:username', async (req, res, next) => {
    try {
        await db('bangers')
            .where('artist_id', req.params.artist_id)
            .del();
    } catch (err) {
        console.error('Didn\'t change artist data right', err);
        res.status(500).json({err: 'Server screwed up with your unlike request. ' +
            'Message me if this doesn\'t get fixed shortly.'});
    }
});

router.post('/:artist_id/removeFan', async (req, res, next) => {
    try {
        await db('artists')
            .update('fans', req.params.fans - 1);
    } catch (err) {
        console.error('Didn\'t change artist data right', err);
        res.status(500).json({err: 'Server screwed up with your unlike request. ' +
            'Message me if this doesn\'t get fixed shortly.'});
    }
});

module.exports = router;