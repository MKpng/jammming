import React, { useState, useCallback } from 'react';
import './SearchBar.css';

function SearchBar(props) {
    const [term, setTerm] = useState('');

    const handleChange = useCallback((e) => {
        setTerm(e.target.value);
    }, []);
    
    const searchButton = useCallback(() => {
        props.onSearch(term)
    }, [term, props.onSearch]); 

    return (
        <div className='searchy'>
            <input 
                className='inputy' 
                placeholder='Search by song, artist or album.' 
                onChange={handleChange}
                value={term} 
            />
            <br></br>
            <br></br>
            <button className='button button:hover' onClick={searchButton}>Search</button>
        </div>
    );
}

export default SearchBar;