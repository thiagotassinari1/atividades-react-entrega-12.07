import React, { useContext } from 'react';
import './App.css';
import { ThemeContext } from './components/Theme';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <header className="App-header">
        <h1>{`Tema atual: ${theme}`}</h1>
        <button onClick={toggleTheme}>Alternar Tema</button>
      </header>
    </div>
  );
}

export default App;