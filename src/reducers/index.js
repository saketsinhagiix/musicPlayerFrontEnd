import { combineReducers } from "redux";
import { AllSongs } from "../constants/songsList";
import { SortArrayInAscending } from "../components/SortListArray";

const songsReducer = () => {
    const SortedListOfSongsByTitle = SortArrayInAscending(AllSongs);
    return SortedListOfSongsByTitle;
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});