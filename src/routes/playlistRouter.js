const express = require('express');
const PlaylistController = require('../controllers/playlistController');

const router = express.Router();

router.get('/', PlaylistController.getAllSong);
router.get('/popular', PlaylistController.getPopularSong);
router.get('/:id', PlaylistController.playSong);
router.post('/', PlaylistController.addSong);

module.exports = router;
