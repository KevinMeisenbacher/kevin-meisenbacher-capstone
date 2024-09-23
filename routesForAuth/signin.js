const express = require('express');
const router = express.Router();
const db = require('../dbConfig');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const { SESSION_SECRET } = process.env;

router.use(bodyParser.json());

//login page: storing and comparing email and password,and redirecting to home page after login
router.post('/', async(req, res) => {
    const { username, password } = req.body;
    const users = await db('users');
    const user = users.find(user => user.username === username);
    if (user && user.password === password) {
        res.json({ token: jwt.sign({ username: user.username }, SESSION_SECRET) });
      } else {
        res.status(403).json({
          token: "",
          error: {
            message: "Error logging in. Invalid username/password combination.",
            username, password, user
          },
        });
      }
});

module.exports = router;