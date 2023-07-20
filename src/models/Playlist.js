let songs = [
  {
    songId: '12345',
    title: 'If We Were Vampires',
    artists: ['Jason Isbel', 'Agnezmo'],
    url: 'https://open.spotify.com/track/250RLekaiL1q9qZer975Eg?si=67850068942c48bb',
    counter: 0,
  },
];

class Playlist {
  constructor(songId, title, artists, url, counter) {
    this.songId = songId;
    this.title = title;
    this.artists = artists;
    this.url = url;
    this.counter = counter;
  }

  static getSongPlaylist() {
    return songs;
  }

  static addSong(title, artists, url) {
    const songId = generateID();
    const newSong = new Playlist(songId, title, artists, url);
    songs.push(newSong);

    return newSong;
  }
}

function generateID() {
  return Math.random().toString(36).substring(2, 9);
}

module.exports = Playlist;
