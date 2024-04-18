const express = require('express');
const emojis = require('./emojis');
const characters = require('./characters'); // Import characters router

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);
router.use('/characters', characters); // Mount characters router

module.exports = router;
