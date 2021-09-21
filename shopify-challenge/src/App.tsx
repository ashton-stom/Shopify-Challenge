import React, {useEffect, useState} from 'react';
import './App.css';
import { isNamespaceExport } from 'typescript';
import Header from './components/Header'
import Card from './components/Card'

function App() {
  const [nasaPod, setNasaPod] = useState(null)
  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=0a28lLtadUnstI1idwH3Gttd1AF7Ta7CY62Az0f9")
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setNasaPod(data)
    });
  })
  return (
    <div className="App">
      <Header />
      <Card nasaPod = {nasaPod}/>
    </div>
  );
}

export default App;
