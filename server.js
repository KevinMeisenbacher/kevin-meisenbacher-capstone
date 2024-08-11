const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');
app.use(bodyParser.json())
const cors = require("cors");
const db = require('./dbConfig');

app.use(express.json());
app.use(cors());

// NOTE: Secret Keys should NEVER be included in source code. Better kept in
// environment variables provided on deployment. For demo purposes only.
const jsonSecretKey = "fdda10aa47b4f61c7d5a00c9e3caf32ee640321fcb463260520d278768d334b9";

app.use((req, res, next) => {
  // Signup and signin are public URLs that don't require a token
  if (req.url === "/signup" || req.url === "/signin") {
    next();
  } else {
    // Format of request is BEARER <token>. Splitting on ' ' will create an
    // array where the token is at index 1
    const token = getToken(req);

    if (token) {
      console.log('Auth Token:', token);
      if (jwt.verify(token, jsonSecretKey)) {
        // Decode the token to pass along to end-points that may need
        // access to data stored in the token.
        req.decode = jwt.decode(token);
        next();
      } else {
        res.status(403).json({ error: "Not Authorized." });
      }
    } else {
      res.status(403).json({ error: "No token. Unauthorized." });
    }
  }
});

function getToken(req) {
  if(!req.headers.authorization){
    return;
  } else {
    return req.headers.authorization.split(" ")[1];
  }
}

const users = {};

app.post("/signup", (req, res) => {
  const { username, email, password, confirmPassword, phone } = req.body;
  users[username] = {
    email,
    password, 
    confirmPassword,
    phone
  };
  db('users').insert({
    username: username,
    email: email,
    password: password,
    phone: phone
})
.then(console.log('Users Object:', users))
.then((data) => {
    if (data) {
        res.send(data);
    }
})
.catch(err => console.error(err));
});

app.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const users = await db('users');
  const user = users.find(user => user.username === username);
  if (user && user.password === password) {
    console.log('Found user:', user);
    res.json({ token: jwt.sign({ username: user.username }, jsonSecretKey) });
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

app.get("/profile", (req, res) => {
  // res.json(req);
  console.log(req);
  res.json(req.decode);
  // res.json({
  //   token: token,
  //   username: req.body.username
  // })
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
