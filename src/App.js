import React, { useState, useEffect } from 'react';
import SearchBar from './Components/SearchBar';
import Filter from './Components/Filter';
import List from './Components/List';
import SavedPlay from './Components/SavedPlay';
import styles from './styles/App.module.css';
import { generateCodeChallenge } from './Components/pkceUtils';
import { fetchToken, fetchUserData, refreshToken } from './Components/spotifyApi';

const clientId = "94b744b20e144998bc75daefb7b967bc";
const redirectUri = "http://127.0.0.1:3000";
const scopes = "user-read-private user-read-email";

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
    const [accessToken, setAccessToken] = useState(localStorage.getItem("access_token"));
    const [user, setUser] = useState(null);

    const handleSearch = (event) => {
        event.preventDefault();
        if (search.trim()){
        setFilteredSongs(MUSICS.filter((music) => 
          music.artist.toLocaleLowerCase().includes(search.toLocaleLowerCase()) || 
          music.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())));
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
      setSearch('');
      setFilteredSongs([]);
      setList([]);
    }

    //additional for authorization

    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
  
      if (code && !accessToken) {
        const codeVerifier = localStorage.getItem("code_verifier");
  
        fetchToken(code, codeVerifier, clientId, redirectUri).then((tokenData) => {
          if (tokenData.access_token) {
            saveToken(tokenData);
            setAccessToken(tokenData.access_token);
            window.history.replaceState({}, document.title, redirectUri);
          }
        });
      }
  
      if (accessToken && !user) {
        fetchUserData(accessToken).then(setUser);
      }
    }, [accessToken, user]);
  
    const saveToken = (data) => {
      const expiresAt = Date.now() + data.expires_in * 1000;
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("refresh_token", data.refresh_token || "");
      localStorage.setItem("expires_at", expiresAt.toString());
    };
  
    const login = async () => {
      const verifier = crypto.randomUUID().replace(/-/g, "");
      const challenge = await generateCodeChallenge(verifier);
  
      localStorage.setItem("code_verifier", verifier);
  
      const params = new URLSearchParams({
        response_type: "code",
        client_id: clientId,
        redirect_uri: redirectUri,
        scope: scopes,
        code_challenge_method: "S256",
        code_challenge: challenge,
      });
  
      window.location = `https://accounts.spotify.com/authorize?${params}`;
    };
  
    const logout = () => {
      localStorage.clear();
      setAccessToken(null);
      setUser(null);
    };



  return (
    <div className={styles.container}>
      <header className={styles.header}>
          <h1>Ja<span style={{color: 'purple'}}>mmm</span>ing</h1>
          <div>
            <button onClick={login}>Login</button>
            {accessToken && user (
            <h2 style={{color: 'white'}}>test{user.email}</h2>
            )}
          </div>
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
