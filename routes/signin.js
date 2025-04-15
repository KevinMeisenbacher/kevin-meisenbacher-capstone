const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../dbConfig');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const { PORT, CORS_ORIGIN, SESSION_SECRET } = process.env;

router.use(bodyParser.json());

//login page: storing and comparing email and password,and redirecting to home page after login
router.post('/', async(req, res) => {
    console.log('authorization', req.headers.authorization);
    const { username, password } = req.body;
    const users = await db('users');
    const user = users.find(user => user.username === username);
    if (!user) {
        res.send('Invalid username')
    } else {
        bcrypt.compare(password, user.password, (err, result) => {
            if (result === true) {
                    // res.send(user);
                    const accessToken = jwt.sign({username: username}, SESSION_SECRET);
                    console.log('token', accessToken);
                    res.json(accessToken);
            } else {
                res.send('Incorrect password');
            }
        });
    }
});

module.exports = router;