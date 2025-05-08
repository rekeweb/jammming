import React from 'react';

function SavedPlay({ list, handleSave, savedPlay, playName, setPlayName }) {
    return (
        <>
        {list.length === 0 ? null : 
          <form onSubmit={handleSave}>
            <input
               onChange={(e) => setPlayName(e.target.value)}
               name='playlist'
               value={playName} 
            />  
            <button type='submit'>Save Play Name</button>
          </form>
        }

{savedPlay['playlist'] && (
  <div>
    <h3>{savedPlay['playlist']}</h3>
    <ul>
      {savedPlay.list.map((song, index) => (
        <li key={index}>
          {song.title} by {song.artist}
        </li>
      ))}
    </ul>
  </div>
)}
        </>
    );
}

export default SavedPlay;