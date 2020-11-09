'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const settings = require('./settings');

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '100mb'
}));

const $ = {
  settings: settings
};

require('./app/example')(app, $);

app.all('/', (req, res) => {
  res.json({
    hi: '👋',
    slab: '😈'
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    error: 500,
    status: 'Internal Server Error',
    message: err.toString()
  });
});

app.use((req, res, next) => {
  res.status(404).json({
    error: 404,
    status: 'Not Found'
  });
});

const server = app.listen($.settings['system'].port, () => {
  console.log('♥♥ http://localhost:' + server.address().port + ' ♥♥');
});