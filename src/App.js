import styles from './App.module.css';
import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import Filter from './Components/Filter';

const MUSICS = [
  {artist: '50 cent', title: 'in da club'},
  {artist: 'snoop dogg', title: 'drop it like its hot'},
  {artist: '50 cent', title: 'gangsta'}
];

function App() {

    const [search, setSearch] = useState('');
    const [filteredSongs, setFilteredSongs] = useState([]);
    const [list, setList] = useState([]);

    const handleSearch = (event) => {
        event.preventDefault();
        setFilteredSongs(MUSICS.filter((music) => 
          music.artist.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || 
          music.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())));
        setSearch('');      
    }

      
    const handleList = (song) => {
        if (!list.some(s => s.artist === song.artist && s.title === song.title)) {
        setList((prev) => [
           song,
            ...prev
        ]);
      }
    }

  return (
    <div>
   
    <SearchBar 
    handleSearch={handleSearch} 
    search={search}
    setSearch={setSearch}
    />

    <Filter 
    filteredSongs={filteredSongs}
    handleList={handleList} 
    />
       
    </div>
  );
}

export default App;
