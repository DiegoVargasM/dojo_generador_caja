import React, { useState } from 'react';
import './App.css';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

function App() {
  const [currentBoxes, setCurrentBoxes] = useState([]);

  const updateBoxList = (newBox) => {
    setCurrentBoxes((prevState) => [...prevState, newBox]);
  };

  return (
    <div className="App">
      <BoxForm onNewBox={updateBoxList} />
      <BoxDisplay displayedBoxes={currentBoxes} />
    </div>
  );
}

export default App;
