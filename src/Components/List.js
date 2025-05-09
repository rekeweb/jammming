import React from 'react';
import styles from '../styles/List.module.css';

function List({ list, handleRemove }) {

    return (
    <>
          <ul className={styles.resultsList}>
             {list.map((song) => (
              <li key={song.title} className={styles.songItem}>
                  <div className={styles.songInfo}>
                    <div className={styles.songName}>{song.name}</div> 
                    <div className={styles.songDetails}>{song.artist} | {song.album}</div>
                  </div>
                  <button onClick={() => handleRemove(song)} className={styles.removeButton}>Remove</button>
                </li>
              ))}
         </ul>
    </>
    );
};

export default List;
