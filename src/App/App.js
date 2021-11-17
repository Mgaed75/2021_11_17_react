import React from 'react';

import './App.css';

import Button from './components/Button/Button'

function App() {
  return (
    <div className="App">
    
      <Button text="OK"/>

      <Button text="Cancel"/>
      
      <Button text="User ne clique pas ICI"/>
      
      <Button text="Je sais quand tu vas quand même cliquer"/>
      
      <Button text="For Test"/>
    </div>
  );
}

export default App;
