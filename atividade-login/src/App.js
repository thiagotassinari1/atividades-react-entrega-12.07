// App.js
import React, { createContext, useState } from 'react';
import Login from './components/Login';

export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <h1>Fazer Login</h1>
        {user ? (
          <div>
            <p>Bem-vindo, {user.username}!</p>
            <button onClick={() => setUser(null)}>Sair</button>
          </div>
        ) : (
          <Login />
        )}
      </div>
    </UserContext.Provider>
  );
};

export default App;
