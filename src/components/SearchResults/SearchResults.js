import React from 'react';
import './SearchResults.css';
import Tracklist from '../TrackList/Tracklist';

function SearchResults(props) {
    return (
        <div className='container container:hover'>
            <h2 className='h2'>RESULTS</h2>
            <Tracklist 
                userSearchResults={props.userSearchResults} 
                onAdd={props.onAdd}
                
            />
        </div>
    );
}

export default SearchResults;