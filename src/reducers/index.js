import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    {
      name: "Goons mi",
      duration: "03:12",
    },
    {
      name: "Picture Perfect",
      duration: "02:34",
    },
    {
      name: "Magic",
      duration: "03:45",
    },
    {
      name: "Loving You",
      duration: "03:01",
    },
    {
      name: "Eni Duro",
      duration: "03:33",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});