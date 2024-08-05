const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../dbConfig');

//login page: storing and comparing email and password,and redirecting to home page after login
router.post('/', async(req, res) => {
    const { username, password } = req.body;
    const users = await db('users');
    const user = users.find(user => user.username === username);
    if (!user) {
        res.send('Invalid username')
    } else {
        bcrypt.compare(password, user.password, (err, result) => {
            if (result === true) {
                    res.send(user);
            } else {
                res.send('Incorrect password');
            }
        });
    }
});

module.exports = router;