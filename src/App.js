import styles from './App.module.css';
import React from 'react';
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>ja<span style={{color: 'purple'}}>mmm</span>ing</h1>
      </header>
      <main className={styles.main}>
        <section>
          <SearchBar />
        </section>
        <section></section>
      </main>
      <footer className={styles.footer}>
        <p>© 2025 jammming</p>
      </footer>
    </div>
  );
}

export default App;
