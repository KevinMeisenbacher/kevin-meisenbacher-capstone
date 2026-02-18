const express = require('express');
const cors = require('cors');
const knex = require('knex');

// Middleware for creating a session id on server and a session cookie on client
const expressSession = require('express-session');

// Add http headers, small layer of security
const helmet = require('helmet');

// Passport library and Github Strategy
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

const app = express();
require('dotenv').config();
app.use(helmet());
const { 
    PORT, 
    CORS_ORIGIN, 
    SESSION_SECRET, 
    GITHUB_CLIENT_ID, 
    GITHUB_CLIENT_SECRET,
    GITHUB_CALLBACK_URL
 } = process.env;

// Middleware
app.use(express.json());

app.use(cors({ 
    origin: CORS_ORIGIN, 
    credentials: true
}));

// Include express-session middleware (with additional config options required for Passport session)
app.use(
    expressSession({
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
    })
);

// =========== Passport Config ============

// Initialize Passport middleware
app.use(passport.initialize());

// Passport.session middleware alters the `req` object with the `user` value
// by converting session id from the client cookie into a deserialized user object.
// This middleware also requires `serializeUser` and `deserializeUser` functions written below
// Additional information: https://stackoverflow.com/questions/22052258/what-does-passport-session-middleware-do
app.use(passport.session());

// Initialize GitHub strategy middleware
// http://www.passportjs.org/packages/passport-github2/
// We can add multiple strategies with `passport.use` syntax
passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: GITHUB_CALLBACK_URL,
    },
    (_accessToken, _refreshToken, profile, done) => {
      // For our implementation we don't need access or refresh tokens.
      // Profile parameter will be the profile object we get back from GitHub
      console.log('GitHub profile:', profile);

      // First let's check if we already have this user in our DB
      knex('users')
        .select('id')
        .where({ github_id: profile.id })
        .then((user) => {
          if (user.length) {
            // If user is found, pass the user object to serialize function
            done(null, user[0]);
          } else {
            // If user isn't found, we create a record
            knex('users')
              .insert({
                github_id: profile.id,
                avatar_url: profile._json.avatar_url,
                username: profile.username,
              })
              .then((userId) => {
                // Pass the user object to serialize function
                done(null, { id: userId[0] });
              })
              .catch((err) => {
                console.log('Error creating a user', err);
              });
          }
        })
        .catch((err) => {
          console.log('Error fetching a user', err);
        });
    }
  )
);

// `serializeUser` determines which data of the auth user object should be stored in the session
// The data comes from `done` function of the strategy
// The result of the method is attached to the session as `req.session.passport.user = 12345`
passport.serializeUser((user, done) => {
  console.log('serializeUser (user object):', user);

  // Store only the user id in session
  done(null, user.id);
});

// `deserializeUser` receives a value sent from `serializeUser` `done` function
// We can then retrieve full user information from our database using the userId
passport.deserializeUser((userId, done) => {
  console.log('deserializeUser (user id):', userId);

  // Query user information from the database for currently authenticated user
  knex('users')
    .where({ id: userId })
    .then((user) => {
      // Remember that knex will return an array of records, so we need to get a single record from it
      console.log('req.user:', user[0]);

      // The full user object will be attached to request object as `req.user`
      done(null, user[0]);
    })
    .catch((err) => {
      console.log('Error finding user', err);
    });
});

// Additional information on serializeUser and deserializeUser:
// https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize

// =========================================

// Is server good?
app.get('/', (_req, res) => {
    res.send('Server good on ' + PORT)
})

// Data routing
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

// Auth routing
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
})
