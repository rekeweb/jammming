import React from 'react';
import styles from '../styles/SavedPlay.module.css';

function SavedPlay({ list, handleSave, savedPlay, setSavedPlay, playName, setPlayName }) {
    return (
        <>
          <form onSubmit={handleSave} className={styles.form}>
            <input
               onChange={(e) => setPlayName(e.target.value)}
               value={playName}
               name='playlist' 
               className={styles.input}
               placeholder='Playlist Name'
            />  
            <div className={styles.buttonGroup}>
            <button type='submit' className={styles.buttonSave}>Save</button>
            <button onClick={() => setSavedPlay({})} className={styles.buttonClear}>Clear</button>
            </div>
            
          </form>
        
{savedPlay['playlist'] && (
  <div>
    <h3 className={styles.savedName}>{savedPlay['playlist']}</h3>
  </div>
)}
        </>
    );
}

export default SavedPlay;