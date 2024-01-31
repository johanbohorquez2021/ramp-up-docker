import React, { useState, useEffect } from 'react';
import DataDisplay from './components/DataDisplay';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>¡Hola desde el frontend!</h1>
      <DataDisplay data={data} />
    </div>
  );
}

export default App;
