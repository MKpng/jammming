import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

function Tracklist(props) {
    return (
        <div>
            {props.userSearchResults.map((track) => {
                return (
                    <Track
                        track={track} 
                        key={track.id}
                        isRemoval={props.isRemoval}
                        onAdd={props.onAdd}
                        onRemove={props.onRemove}
                    />
                )
            })}
        </div>
    );
}

export default Tracklist;