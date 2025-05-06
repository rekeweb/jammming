import React, { useState } from 'react';

function SearchBar() {
    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        setSearch(event.target.value);
        //some code here to fetch playlist
        setSearch('');      
    }

    return (
        <>
          <form onSubmit={handleSearch}>
          <input
            name='searchBar'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type='submit'>Search</button>
          </form>
          
        </>
    );
};

export default SearchBar;