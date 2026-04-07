const express = require('express');
const urlRoute = require('./routes/url.routes');
const connectDB = require('./config/db');
require('dotenv').config();

const { handleRedirectURL } = require('./controllers/url.controller');

const app = express();

app.use(express.json());
connectDB();

app.use('/url', urlRoute);


app.get('/:shortId', handleRedirectURL);

module.exports = app;