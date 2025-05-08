import React from 'react';

function List({ list, setList }) {

    return (
    <>
      {list.length === 0 ? null : (   
        <>
          <ul>
             {list.map((song, index) => (
              <li key={index}>{song.artist} - {song.title}</li>
              ))}
         </ul>
          <button onClick={() => setList([])}>Clear List</button>
          
          
          
        </>
      )} 
    </>
    );
};

export default List;
