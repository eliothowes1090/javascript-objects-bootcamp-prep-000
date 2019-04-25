var playlist = { artist: "song"};

function updatePlaylist(playlist, artistName, songTitle) {
  return object.assign({}, playlist, {[artistName]: songTitle})
};
