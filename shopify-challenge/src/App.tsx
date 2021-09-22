import React, {useEffect, useState} from 'react';
import './App.css'
import Header from './components/Header'
import Card from './components/Card'

function App() {
  const [nasaPod, setNasaPod] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetching data from API
  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=f9fHmaDFOH42fn7hAAhAv0RXIQ3deBI1U3lcnfst&start_date=2021-09-01&end_date=2021-09-21")
    .then(response => response.json())
    .then(data => {
      setNasaPod(data)
      setLoading(false)
    });
  }, [])
  return (
    <div className="App">
      <Header />
      {!loading ? nasaPod.map((p: any) => <Card nasaPod = {p} key={p.date}/>) : <h2 className='loading'>Loading...</h2>}
    </div>
  );
}

export default App;
