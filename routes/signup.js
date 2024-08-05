const express = require('express');
const router = express.Router();
const db = require('../dbConfig');
const bcrypt = require('bcrypt');
const saltRounds = 12;

//register: storing name, email and password and redirecting to home page after signup
router.post('/', async (req, res) => {
    const { username, password, email, phone} = req.body;
    // db.users.findOne({
    //     where: {
    //         username: username
    //            }
    // }).then((user) => {
        const users = await db('users');
        const user = await db('users')
        .where('users.username', username);
        if (!user) {
            bcrypt.hash(password, saltRounds, function (err,   hash) {
            db('users').insert({
                username: username,
                email: email,
                password: hash,
                phone: phone
            })
            .then(console.log(req.body))
            .then((data) => {
                if (data) {
                    res.send(data);
                res.redirect('/');
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
// });

module.exports = router;