const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const db = require('./dbConfig');
const bcrypt = require('bcrypt');
const saltRounds = 12;
const { PORT, CORS_ORIGIN, SESSION_SECRET } = process.env;

app.use((req, res, next) => {
  // Signup and login are public URLs that don't require a token
  if (req.url === '/signin' || req.url === '/signup') {
    next();
  } else {
    // Format of request is BEARER <token>. Splitting on ' ' will create an
    // array where the token is at index 1
    const token = getToken(req);
    console.log('token', token);
    console.log('headers', req.headers);

    if (token) {
      console.log('Auth Token:', token);
      if (jwt.verify(token, SESSION_SECRET)) {
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

app.post("/signup", (req, res) => {
  console.log(req.body);
  const { username, password, email, phone} = req.body;
    db('users')
    .where('users.username', username)
    .then(user => {
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
    })
  // const { username, name, password } = req.body;
  // users[username] = {
  //   name,
  //   password, // NOTE: Passwords should NEVER be stored in the clear like this. Use a              
  //   // library like bcrypt to Hash the password. For demo purposes only.
  // };
  console.log('Users Object:', users);
  res.json({ success: "true" });
});

app.post("/signin", async (req, res) => {
  console.log('authorization', req.headers.authorization);
    const { username, password } = req.body;
    const users = await db('users');
    // const user = users.find(user => user.username === username);
    const user = users[username];
    // if (!user) {
    //     res.send('Invalid username')
    // } else {
    //     bcrypt.compare(password, user.password, (err, result) => {
    //         if (result === true) {
    //                 // res.send(user);
    //                 const accessToken = jwt.sign({username: username}, SESSION_SECRET);
    //                 console.log('token', accessToken);
    //                 res.json(accessToken);
    //         } else {
    //             res.send('Incorrect password');
    //         }
    //     });
    // }
    
  if (user && user.password === password) {
    console.log('Found user:', user);
    res.json({ token: jwt.sign({ name: user.name }, jsonSecretKey) });
  } else {
    res.status(403).json({
      token: "",
      error: {
        message: "Error logging in. Invalid username/password combination.",
      },
    });
  }
});

// Middleware
app.use(express.json());
app.use(cors({ origin: CORS_ORIGIN }));
  
const getToken = (req) => {
  console.log(req.headers);
  if(!req.headers.authorization){
    return;
  } else {
    return req.headers.authorization.split(" ")[1];
  }
}

// // Is server good?
// app.get('/', (_req, res) => {
//     // Signup and login are public URLs that don't require a token
//     if (req.url === "/signup" || req.url === "/login") {
//       next();
//     } else {
//       // Format of request is BEARER <token>. Splitting on ' ' will create an
//       // array where the token is at index 1
//       const token = getToken(req);
  
//       if (token) {
//         console.log('Auth Token:', token);
//         if (jwt.verify(token, SESSION_SECRET)) {
//           // Decode the token to pass along to end-points that may need
//           // access to data stored in the token.
//           req.decode = jwt.decode(token);
//           next();
//         } else {
//           res.status(403).json({ error: "Not Authorized." });
//         }
//       } else {
//         res.status(403).json({ error: "No token. Unauthorized." });
//       }
//     }
// })

// Routes
const genreRoutes = require('./routes/genres');
app.use('/genres', genreRoutes);
const subgenreRoutes = require('./routes/subgenres');
app.use('/subgenres', subgenreRoutes);
const artistRoutes = require('./routes/artists');
app.use('/artists', artistRoutes);
const albumRoutes = require('./routes/albums');
app.use('/albums', albumRoutes);
const songRoutes = require('./routes/songs');
app.use('/songs', songRoutes);

// const signupRoutes = require('./routes/signup');
// app.use('/signup', signupRoutes);
// const signinRoutes = require('./routes/signin');
// app.use('/signin', signinRoutes);
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log('Server listening on ' + PORT);
})
