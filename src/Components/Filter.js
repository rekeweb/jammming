import React from 'react';
import styles from '../styles/Filter.module.css';

function Filter({ filteredSongs, handleList }) {

    return (
        <>
  <h2 className={styles.heading}>Results</h2>
  <ul className={styles.resultsList}>
    {filteredSongs.map((song, index) => (
      <li key={index} className={styles.songItem}>
        <div className={styles.songInfo}>
          <div className={styles.songName}>{song.name}</div>
          <div className={styles.songDetails}>
            {song.artist} | {song.album}
          </div>
        </div>
        <button onClick={() => handleList(song)} className={styles.addButton}>
          Add
        </button>
      </li>
    ))}
  </ul>
</>
    );
};

export default Filter;