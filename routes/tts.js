const express = require('express');
const router = express.Router();
const TTSRequest = require('../models/TTSRequest');

// Get all TTS requests
router.get('/', async (req, res) => {
  try {
    const requests = await TTSRequest.find();
    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new TTS request
router.post('/', async (req, res) => {
  const { text } = req.body;
  const newRequest = new TTSRequest({ text });
  try {
    const savedRequest = await newRequest.save();
    res.json(savedRequest);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
