const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const { PORT = 8080, CORS_ORIGIN = 'http://localhost:3000' } = process.env;

// Middleware
app.use(express.json());
app.use(cors({ origin: CORS_ORIGIN }));

// Is server good?
app.get('/', (_req, res) => {
    res.send('Server good on ' + PORT)
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

app.listen(PORT, () => {
    console.log('Server listening on ' + PORT);
})
