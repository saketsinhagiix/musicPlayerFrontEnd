import React from 'react';


const MusicPlayer = ({ path, title }) => {
    return (
        <div>
            <audio src={path} autostart loop controls>
                <b>{title}</b>
            </audio>
        </div>
    );
};

export default MusicPlayer;