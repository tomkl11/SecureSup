import React, { useState } from 'react';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null); // Stocke les infos de l'utilisateur connecté

  if (!user) {
    return <Login onLoginSuccess={(userData) => setUser(userData)} />;
  }

  return (
    <div style={{ padding: '20px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #003366' }}>
        <h1>SecureSup</h1>
        <div>
          <span>Welcome, <strong>{user.name}</strong> ({user.role})</span>
          <button onClick={() => setUser(null)} style={{ marginLeft: '10px' }}>Déconnexion</button>
        </div>
      </header>

      {user.role === 'ADMIN' ? (
        <div style={{ marginTop: '20px', padding: '20px', background: '#ffe6e6' }}>
          <h2>Administration Panel</h2>
        </div>
      ) : (
        <div style={{ marginTop: '20px', padding: '20px', background: '#e6f3ff' }}>
          <h2>Student Space</h2>
          <p>Check your preferences and available training courses.</p>
        </div>
      )}
    </div>
  );
}

export default App;