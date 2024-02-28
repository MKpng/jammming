import React, { useState, useCallback } from "react";
import "./App.css";

import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../Spotify";

function App() {
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = track => {
    if(playlistTracks.some(song => song.id === track)) 
      return;
    setPlaylistTracks((prevTracks) => [...prevTracks, track])
    setSearchResults(searchResults.filter(item => item.id !== track.id));  
  }

  const removeTrack = track => {
    setPlaylistTracks((prevTracks) => 
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id))
      setSearchResults([...searchResults, track]);
}

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, [])

  const changePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

  return (
    <body className='App'>
      <div className='opacity'>
        <div>
          <SearchBar onSearch={search}/>
        </div>
        <div className='flexin'>
          <SearchResults 
            userSearchResults={searchResults}
            onAdd={addTrack}
          />
          <Playlist 
            onNameChange={changePlaylistName} 
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </body>
  );
}

export default App;
