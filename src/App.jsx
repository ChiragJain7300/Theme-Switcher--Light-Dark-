import { useState } from 'react';
import './App.css';
import useLocalStorage from './useLocalStorage';

function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return (
    <>
      <div className="homeCont" data-theme={theme}>
        <h1>{theme === 'dark' ? 'Dark' : 'Light'} Mode</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </>
  );
}

export default App;
