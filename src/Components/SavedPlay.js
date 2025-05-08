import React from 'react';

function SavedPlay({ list, handleSave, savedPlay, setSavedPlay, playName, setPlayName }) {
    return (
        <>
          <form onSubmit={handleSave}>
            <input
               onChange={(e) => setPlayName(e.target.value)}
               value={playName}
               name='playlist' 
            />  
            <button type='submit'>Save Play Name</button>
          </form>
        

{savedPlay['playlist'] && (
  <div>
    <h3>{savedPlay['playlist']}</h3>
    <ul>
      {savedPlay.list.map((song, index) => (
        <li key={index}>
          {song.name} by {song.artist}. Album - {song.album}
        </li>
      ))}
    </ul>
    <button onClick={() => setSavedPlay({})}>Clear Saved Playlist</button>
  </div>
)}
        </>
    );
}

export default SavedPlay;