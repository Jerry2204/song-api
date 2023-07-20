let songs = [
  {
    songId: 1,
    title: 'If We Were Vampires',
    artists: ['Jason Isbel', 'Agnezmo'],
    url: 'https://open.spotify.com/track/250RLekaiL1q9qZer975Eg?si=67850068942c48bb',
    counter: 0,
  },
  {
    songId: 2,
    title: 'Tak Ingin Usai',
    artists: ['Keisya Levronka'],
    url: 'https://open.spotify.com/track/1b0aDgrG775i4sPQgJGmkU?si=5a8a82c743ab4b17',
    counter: 0,
  },
  {
    songId: 3,
    title: 'The One You Love',
    artists: ['Passenger', 'Kate Miller'],
    url: 'https://open.spotify.com/track/6EfXf9OhZ64J6D3ssVCTon?si=e83a567ad3214482',
    counter: 0,
  },
  {
    songId: 4,
    title: 'Still With You',
    artists: ['Jung Kook'],
    url: 'https://open.spotify.com/track/0eFMbKCRw8KByXyWBw8WO7?si=0cb26ab956054bef',
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

  static playSongById(id) {
    const playedSong = songs.find((song) => {
      if (song.songId == id) {
        return (song.counter += 1);
      }
    });

    return playedSong;
  }

  static addSong(title, artists, url) {
    const songId = generateID();
    const newSong = new Playlist(songId, title, artists, url);
    songs.push(newSong);

    return newSong;
  }

  static getPopularSong() {
    return songs.sort((a, b) => b.counter - a.counter);
  }
}

function generateID() {
  return Math.random().toString(36).substring(2, 9);
}

module.exports = Playlist;
