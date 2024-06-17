const express = require('express');
const app = express();
// const cors = require('cors');
require('dotenv').config();
const { PORT = 8080, CORS_ORIGIN = 'http://localhost:3000' } = process.env;

// Middleware
// app.use(express.json());
// app.use(cors({ origin: CORS_ORIGIN }));

// Is server good?
app.get('/', (_req, res) => {
    res.send('Server good on ' + PORT)
})

app.listen(PORT, () => {
    console.log('Server listening on ' + PORT);
})