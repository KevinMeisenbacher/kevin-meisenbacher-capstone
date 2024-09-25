const express = require('express');
const router = express.Router();
const db = require('../dbConfig');
const bcrypt = require('bcrypt');
const saltRounds = 12;
const bodyParser = require('body-parser');

router.use(bodyParser.json());

//register: storing name, email and password and redirecting to home page after signup
router.post('/', async (req, res) => {

    const { username, password, confirmPassword, email, phone} = req.body;
    const user = await db('users')
    .where('users.username', username);
    if (user.length === 0) {
        bcrypt.hash(password, saltRounds, function (err,   hash) {
        db('users').insert({
            username: username,
            email: email,
            password: hash,
            phone: phone
        })
        .then((data) => {
            if (data) {
                if (password === confirmPassword &&
                    password.length >= 12 &&
                    password.includes('([a-zA-Z]+)([0-9]+)\W+')
                ) res.send(data);
            }
        })
        .then(console.log(req.body))
        .catch(err => console.error(err));
        });
    }
    else {
        console.error(`${username} already exists`);
        res.status(403).send(`${username} already exists`);
    }
});    

module.exports = router;