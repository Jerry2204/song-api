const express = require('express');
const PlaylistController = require('../controllers/playlistController');

const router = express.Router();

router.post('/', PlaylistController.addSong);

module.exports = router;
