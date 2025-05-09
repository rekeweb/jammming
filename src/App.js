import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import Filter from './Components/Filter';
import List from './Components/List';
import SavedPlay from './Components/SavedPlay';
import styles from './styles/App.module.css';

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
    }

    const handleClearSearch = () => {
      setFilteredSongs([]);
      setList([]);
    }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
          <h1>Ja<span style={{color: 'purple'}}>mmm</span>ing</h1>
        </header>

     <main>

        <section className={styles.searchBar}>
          <SearchBar 
            handleSearch={handleSearch} 
            search={search}
            setSearch={setSearch}
            setFilteredSongs={setFilteredSongs}
            handleClearSearch = {handleClearSearch}
          />
        </section>
       
    
    <section className={styles.result}>

      <div className={styles.leftSection}>
      <Filter 
        filteredSongs={filteredSongs}
        handleList={handleList} 
      />
       </div>

       <div className={styles.rightSection}>

       <SavedPlay 
        list={list}
        handleSave={handleSave}
        savedPlay={savedPlay}
        setSavedPlay={setSavedPlay}
        playName={playName}
        setPlayName={setPlayName}
        />

      <List 
        list={list}
        setList={setList}
        handleRemove={handleRemove}
      />

      
      
      </div>

    </section>


   
      </main>  
    </div>
  );
}

export default App;
