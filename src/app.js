// src/app.js

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares');
const charactersRouter = require('./api/characters'); // Import the characters router

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  const message = `
╭──────────────────────────────────────╮
│   Welcome to the Genshin Buddy API!   │
╰──────────────────────────────────────╯

Get started by exploring the character data endpoints:
- /characters - Retrieve information about Genshin Impact characters.
- /characters/:name - Get details of a specific character by name.

Example Usage:
To retrieve information about Genshin Impact characters:
input https://genshin-buddy-api.vercel.app/characters

To retrieve information about a specific Genshin Impact character:
input https://genshin-buddy-api.vercel.app/characters/albedo
  `;
  res.type('text/plain').send(message);
});

// Mount the characters router at the root level
app.use('/characters', charactersRouter);

// Use the middleware for 404 and error handling
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
