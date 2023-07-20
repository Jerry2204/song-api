const PlaylistService = require('../services/playlistService');

class PlaylistController {
  static getAllSong(req, res) {
    const playlists = PlaylistService.getPlaylists();

    res.json(playlists);
  }

  static playSong(req, res) {
    const id = req.params.id;
    const playlist = PlaylistService.playSongById(id);

    res.json(playlist);
  }

  static addSong(req, res) {
    const { title, artists, url } = req.body;
    const playlist = PlaylistService.addSongPlaylist(title, artists, url);

    res.status(201).json(playlist);
  }

  static getPopularSong(req, res) {
    const playlists = PlaylistService.getPopularSong();

    res.json(playlists);
  }
}

module.exports = PlaylistController;
