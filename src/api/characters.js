const express = require('express');
const charactersData = require('../../charactersData.json'); // Import charactersData.json

const router = express.Router();

// Endpoint to get character data by name
router.get('/:name', (req, res, next) => {
  const characterName = req.params.name;
  const character = charactersData.find(char => char.name.toLowerCase() === characterName.toLowerCase());
  if (!character) {
    const error = new Error(`Character '${characterName}' not found`);
    error.status = 404;
    return next(error);
  }
  res.json(character);
});

module.exports = router;
