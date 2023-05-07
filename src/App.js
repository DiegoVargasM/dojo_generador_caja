import React, { useState } from 'react';
import './App.css';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

function App() {
  const [currentColors, setCurrentColors] = useState("");

  const updateColorList = (newColors) => {
    setCurrentColors(newColors)
  }

  return (
    <div className="App">
      <BoxForm onNewColors={updateColorList} />
      <BoxDisplay displayedColors={currentColors} />
    </div>
  );
}

export default App;
