const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const gamesRouter = require('./routes/games');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/codenames_bot';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', gamesRouter);

app.listen(PORT, HOST, async () => {
    try {
        await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

        console.log(`Listening on ${HOST}:${PORT}`)
        console.log('Successfully connected to database');
    } catch (e) {
        console.error(e);
    }
});
