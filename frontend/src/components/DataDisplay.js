import React from 'react';

function DataDisplay({ data }) {
  return (
    <div>
      <h2>Datos del backend:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataDisplay;
