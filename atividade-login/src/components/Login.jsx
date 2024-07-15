// Login.jsx
import React, { useContext, useState } from 'react';
import { UserContext } from '../App';

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Autenticação fictícia
    if (username === 'Thiago' && password === '1234') {
      setUser({ username });
    } else {
      alert('Usuário ou senha incorretos');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Usuário:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
      </div>
      <div>
        <label>Senha:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
