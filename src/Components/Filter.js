import React from 'react';

function Filter({ filteredSongs, handleList }) {

    return (
        <>
            {filteredSongs.length === 0 ? <p>No music found</p> : (
           
            <ul>
            {filteredSongs.map((song, index) => (
                <li key={index}>
                    {song.artist} - {song.title}
                    <button onClick={() => handleList(song)}>Add</button>    
                </li>    
            ))}
            </ul>
            )} 
        </>
    );
};

export default Filter;