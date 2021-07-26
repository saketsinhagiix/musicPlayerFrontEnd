import React from 'react';
import { connect } from 'react-redux';
import MusicPlayer from './MusicPlayer';

const SongDetail = ({ mySelectedSong }) => {
    if (!mySelectedSong) {
        return <div><b>Select a song for information!!!</b></div>;
    }
    return (
        <div>
            <h3>Details For:</h3>
            <p>
                Title: <b>{mySelectedSong.title}</b>
                <br />
                Artist: <b>{mySelectedSong.artist}</b>
                <br />
                Duration: <b>{mySelectedSong.duration}</b>
                <br />
                <br />
                <MusicPlayer
                    path={mySelectedSong.path}
                    title={mySelectedSong.title}
                />
            </p >

        </div >
    );
};

const mapStateToProps = (state) => {
    return { mySelectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);