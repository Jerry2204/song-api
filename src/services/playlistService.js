const Playlist = require('../models/Playlist');

class PlaylistService {
  static getPlaylists() {
    return Playlist.getSongPlaylist();
  }

  static addSongPlaylist(title, artists, url) {
    return Playlist.addSong(title, artists, url);
  }
}

module.exports = PlaylistService;
