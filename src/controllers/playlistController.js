const PlaylistService = require('../services/playlistService');

class PlaylistController {
  static addSong(req, res) {
    const { title, artists, url } = req.body;
    const playlist = PlaylistService.addSongPlaylist(title, artists, url);

    res.status(201).json(playlist);
  }
}

module.exports = PlaylistController;
