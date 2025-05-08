import React from 'react';
import styles from '../styles/SearchBar.module.css'


function SearchBar(props) {
   const { handleSearch, search, setSearch, handleClearSearch } = props;

    return (
        <>
        <div>
          <form onSubmit={handleSearch}>
          <input
            name='searchBar'
            placeholder='Artist or Title'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.input}
          />
          <div className={styles.buttonGroup}>
          <button className={styles.button} type='submit'>Search</button>
          <button className={`${styles.button} ${styles.clearButton}`} onClick={handleClearSearch}>Clear Search</button>
          </div>
          </form>
          
          </div>
          </>
    )
};

export default SearchBar;