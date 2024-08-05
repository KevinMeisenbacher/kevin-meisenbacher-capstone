const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const { PORT, CORS_ORIGIN, SESSION_SECRET } = process.env;

// Middleware
app.use(express.json());
app.use(cors({ origin: CORS_ORIGIN }));
  
  function getToken(req) {
    if(!req.headers.authorization){
      return;
    } else {
      return req.headers.authorization.split(" ")[1];
    }
  }

// Is server good?
app.get('/', (_req, res) => {
    // Signup and login are public URLs that don't require a token
    if (req.url === "/signup" || req.url === "/login") {
      next();
    } else {
      // Format of request is BEARER <token>. Splitting on ' ' will create an
      // array where the token is at index 1
      const token = getToken(req);
  
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
})

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

const signupRoutes = require('./routes/signup');
app.use('/signup', signupRoutes);
const signinRoutes = require('./routes/signin');
app.use('/signin', signinRoutes);
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log('Server listening on ' + PORT);
})
