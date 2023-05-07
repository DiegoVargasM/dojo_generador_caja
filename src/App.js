import React, { useState } from 'react';
import './App.css';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

function App() {
  const [currentColors, setCurrentColors] = useState([]);

  const updateColorList = (newColor) => {
    setCurrentColors([...currentColors, newColor])
  }

  return (
    <div className="App">
      <BoxForm onNewColor={updateColorList} />
      <BoxDisplay displayedColors={currentColors} />
    </div>
  );
}

export default App;
