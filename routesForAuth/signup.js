const express = require('express');
const router = express.Router();
const db = require('../dbConfig');
const bcrypt = require('bcrypt');
const saltRounds = 12;
const bodyParser = require('body-parser');

router.use(bodyParser.json());

//register: storing name, email and password and redirecting to home page after signup
router.post('/', async (req, res) => {

    const { username, password, email, phone} = req.body;
    const user = await db('users')
    .where('users.username', username);
    if (user.length === 0) {
        bcrypt.hash(password, saltRounds, function (err,   hash) {
        db('users').insert({
            username: username,
            email: email,
            password: password,
            phone: phone
        })
        .then(console.log(req.body))
        .then((data) => {
            if (data) {
                res.send(data);
            }
        })
        .catch(err => console.error(err));
        });
    }
    else {
        console.error('User already exists');
        res.status(403).send('User already exists');
    }
});    

module.exports = router;