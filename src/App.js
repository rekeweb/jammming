import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import Filter from './Components/Filter';
import List from './Components/List';
import SavedPlay from './Components/SavedPlay';

const MUSICS = [
  {artist: '50 cent', name: 'in da club', album: 'on fire', id: 1},
  {artist: 'snoop dogg', name: 'drop it like its hot', album: 'thirty shades', id: 2},
  {artist: '50 cent', name: 'gangsta', album: 'no pressure', id: 3}
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
          music.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())));
        setSearch('');
      }      
    }

      
    const handleList = (song) => {
        if (!list.some(s => s.artist === song.artist && s.name === song.name)) {
        setList((prev) => [
           song,
            ...prev
        ]);
      }
    }

    const handleRemove = (song) => {
      setList((prev) => prev.filter((one) => one.name !== song.name));
    }

    const handleSave = (event) => {
      event.preventDefault();
      const name = event.target.elements['playlist'].name;
      setSavedPlay(
        {[name]: playName, 'list': list}
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
    handleRemove={handleRemove}
    />

    <SavedPlay 
    list={list}
    handleSave={handleSave}
    savedPlay={savedPlay}
    setSavedPlay={setSavedPlay}
    playName={playName}
    setPlayName={setPlayName}
    />

    </div>
  );
}

export default App;
