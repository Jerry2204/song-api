const Playlist = require('../models/Playlist');

class PlaylistService {
  static getPlaylists() {
    return Playlist.getSongPlaylist();
  }
  
  static getPopularSong() {
    return Playlist.getPopularSong();
  }

  static playSongById(id) {
    return Playlist.playSongById(id);
  }

  static addSongPlaylist(title, artists, url) {
    return Playlist.addSong(title, artists, url);
  }
}

module.exports = PlaylistService;
