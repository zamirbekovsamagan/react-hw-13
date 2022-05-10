import { useEffect, useState } from 'react'
import './App.css';
import Photos from './components/Photos';

function App() {

  const [request, setRequest] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then(response => response.json())
      .then(data => setRequest(data))
      .catch(error=>console.log(error.message))
  },[])

  return (
    <div className="App">
      {request.map(item => {
        return <Photos key={item.id} title={item.title} id={item.id} url={item.thumbnailUrl}/>
      })}
    </div>
  );
}

export default App;
