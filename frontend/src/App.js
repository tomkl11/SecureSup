import React, { useState, useEffect } from 'react';

function App() {
  const [schools, setSchools] = useState([]);
  const [search, setSearch] = useState('');
  const fetchSchools = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/schools?name=${search}`);
      const data = await response.json();
      setSchools(data);
    } catch (err) {
      console.error("Erreur backend:", err);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>SecureSup - Portail Parcoursup</h1>
      
      <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
        <h3>Rechercher une formation</h3>
        <input 
          type="text" 
          placeholder="Nom de l'école..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={fetchSchools}>Rechercher</button>
      </div>

      <div className="results">
        {schools.map(school => (
          <div key={school.id} style={{ borderBottom: '1px solid #eee', padding: '10px' }}>
            <strong>{school.name}</strong> - {school.city}
            <p>Places disponibles : {school.availablePlaces} / {school.totalPlaces}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;