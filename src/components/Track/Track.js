import React, { useCallback } from 'react';
import './Track.css';

function Track(props) {
    const passTrack = () => {
        props.onAdd(props.track)
    }

    const trackToRemove = () => {
        props.onRemove(props.track)
    }
    
    function renderOption() {
        if (props.isRemoval) { 
            return (
                <button onClick={trackToRemove}>
                    -
                </button>
            );
        } else {
            return (
                <button onClick={passTrack}>
                    +
                </button>
            );
        }
    }

    return (
            <div className='back'>
                <h3 className='title'>{props.track.name} {renderOption()}</h3>
                <p className='addons'><span>Album:</span> {props.track.album} <span>|</span> <span>By:</span> {props.track.artist}</p>
                
            </div> 
    );
}

export default Track;