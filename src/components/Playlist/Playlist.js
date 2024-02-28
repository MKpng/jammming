import React, { useCallback } from 'react';
import './Playlist.css';
import Tracklist from '../TrackList/Tracklist';

function Playlist(props) {
    const handlePlaylistName = useCallback((e) => {
        props.onNameChange(e.target.value)
    }, [props.onNameChange]);

    return (
        <div className='containe containe:hover'>
            <input className='input' defaultValue={'New Playlist'} onChange={handlePlaylistName}/>
            <Tracklist 
                userSearchResults={props.playlistTracks}
                isRemoval={true}
                onRemove={props.onRemove}
            />
            <button className='buttonSpot buttonSpot:hover' onClick={props.onSave}>SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist; 