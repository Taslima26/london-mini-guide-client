import React, {useState} from 'react';
import './App.css';
import CitiesSelect from './Components/CitiesSelect';

function App() {
  const [City, setCity] = useState('');

  console.log('from app', City);
  return (
    <div className="App container">
      <h1 className="display-3">London Mini Guide</h1>

      {/* {City ? null: <CitiesSelect City={City} setCity={setCity} /> } */}
      <CitiesSelect City={City} setCity={setCity} />
    </div>
  );
}

export default App;
