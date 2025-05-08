import React from 'react';

function List({ list, setList, handleRemove }) {

    return (
    <>
      {list.length === 0 ? null : (   
        <>
          <ul>
             {list.map((song) => (
              <li key={song.title}>
                {song.artist} - {song.name} - {song.album}
                <button onClick={() => handleRemove(song)}>Remove</button>
                </li>
              ))}
         </ul>
          <button onClick={() => setList([])}>Clear List</button>
          
          
          
        </>
      )} 
    </>
    );
};

export default List;
