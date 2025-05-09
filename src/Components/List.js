import React from 'react';

function List({ list, handleRemove }) {

    return (
    <>
          <ul>
             {list.map((song) => (
              <li key={song.title}>
                {song.artist} - {song.name} - {song.album}
                <button onClick={() => handleRemove(song)}>Remove</button>
                </li>
              ))}
         </ul>
    </>
    );
};

export default List;
