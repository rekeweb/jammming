import React, { useState } from 'react';


function SearchBar(props) {
   const { handleSearch, search, setSearch, setFilteredSongs } = props;

    return (
        <>
          <form onSubmit={handleSearch}>
          <input
            name='searchBar'
            placeholder='Artist or Title'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type='submit'>Search</button>
          
          </form>
          <button onClick={() => setFilteredSongs([])}>Clear Search</button>
          </>
    )
};

export default SearchBar;