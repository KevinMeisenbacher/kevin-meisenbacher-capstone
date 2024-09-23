const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bodyParser = require('body-parser');
app.use(bodyParser.json())
const cors = require("cors");
const db = require('./dbConfig');

app.use(express.json());
app.use(cors());

const {PORT, SESSION_SECRET} = process.env;

app.use((req, res, next) => {
  // Signup and signin are public URLs that don't require a token
  if (req.url !== "/") {
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
});

// Routes for music data
const genreRoutes = require('./routesForMusic/genres');
app.use('/genres', genreRoutes);
const subgenreRoutes = require('./routesForMusic/subgenres');
app.use('/subgenres', subgenreRoutes);
const artistRoutes = require('./routesForMusic/artists');
app.use('/artists', artistRoutes);
const albumRoutes = require('./routesForMusic/albums');
app.use('/albums', albumRoutes);
const songRoutes = require('./routesForMusic/songs');
app.use('/songs', songRoutes);

// Routes for interactive filtering
const likeRoutes = require('./routesForMusic/like');
app.use('/like', likeRoutes);
const unlikeRoutes = require('./routesForMusic/unlike');
app.use('/unlike', unlikeRoutes);
const hateRoutes = require('./routesForMusic/hate');
app.use('/hate', hateRoutes);
const unhateRoutes = require('./routesForMusic/unhate');
app.use('/unhate', unhateRoutes);
const bangerRoutes = require('./routesForMusic/bangers');
app.use('/bangers', bangerRoutes);
const crapRoutes = require('./routesForMusic/crap');
app.use('/crap', crapRoutes);

// Routes for authentication
const userRoutes = require('./routesForAuth/users');
app.use('/users', userRoutes);
const signupRoutes = require('./routesForAuth/signup');
app.use('/signup', signupRoutes);
const signinRoutes = require('./routesForAuth/signin');
app.use('/signin', signinRoutes);
const profileRoutes = require('./routesForAuth/profile');
app.use('/profile', profileRoutes);

// Power for the server
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
