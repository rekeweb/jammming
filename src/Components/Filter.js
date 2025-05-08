import React from 'react';

function Filter({ filteredSongs, handleList }) {

    return (
        <>
            <ul>
            <h2>Results</h2>
            {filteredSongs.map((song, index) => (
                <li key={index}>
                    {song.artist} - {song.name} - {song.album}
                    <button onClick={() => handleList(song)}>Add</button>    
                </li>    
            ))}
            </ul>
        </>
    );
};

export default Filter;