import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import Filter from './Components/Filter';
import List from './Components/List';
import SavedPlay from './Components/SavedPlay';

const MUSICS = [
  {artist: '50 cent', title: 'in da club'},
  {artist: 'snoop dogg', title: 'drop it like its hot'},
  {artist: '50 cent', title: 'gangsta'}
];

function App() {

    const [search, setSearch] = useState('');
    const [filteredSongs, setFilteredSongs] = useState([]);
    const [list, setList] = useState([]);
    const [savedPlay, setSavedPlay] = useState({});
    const [playName, setPlayName] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        if (search.trim()){
        setFilteredSongs(MUSICS.filter((music) => 
          music.artist.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || 
          music.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())));
        setSearch('');
      }      
    }

      
    const handleList = (song) => {
        if (!list.some(s => s.artist === song.artist && s.title === song.title)) {
        setList((prev) => [
           song,
            ...prev
        ]);
      }
    }

    const handleSave = (event) => {
      event.preventDefault();
      setSavedPlay(
        {'playlist': playName, 'list': list}
      );
      setPlayName('');
      setList([]);
      setFilteredSongs([]);
    }

  return (
    <div>
   
    <SearchBar 
    handleSearch={handleSearch} 
    search={search}
    setSearch={setSearch}
    setFilteredSongs={setFilteredSongs}
    />

    <Filter 
    filteredSongs={filteredSongs}
    handleList={handleList} 
    />
       
    <List 
    list={list}
    setList={setList}
    />

    <SavedPlay 
    list={list}
    handleSave={handleSave}
    savedPlay={savedPlay}
    playName={playName}
    setPlayName={setPlayName}
    />

    </div>
  );
}

export default App;
