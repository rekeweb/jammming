import React from 'react';

function Filter({ filteredSongs, handleList }) {

    return (
        <>
            {!filteredSongs ? <p>No music found</p> : (
           
            <ul>
            {filteredSongs.map((song, index) => (
                <li key={index}>
                    {song.artist} - {song.name} - {song.album}
                    <button onClick={() => handleList(song)}>Add</button>    
                </li>    
            ))}
            </ul>
            )} 
        </>
    );
};

export default Filter;