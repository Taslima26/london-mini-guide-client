import React, {useState} from 'react';

import './App.css';
import CitiesSelect from './Components/CitiesSelect';
import CategoriesButtons from './Components/CategoriesButtons';
import DataTable from './Components/DataTable';
import FetchData from './Components/FetchData';

function App() {
  const [City, setCity] = useState('');

  console.log('from app',City);
  return (
    <div className="App container">

      <h1 className="title">London Mini Guide</h1>

      {/* {City ? null: <CitiesSelect City={City} setCity={setCity} /> } */}
      <CitiesSelect City={City} setCity={setCity} />
    </div>
  );
}

export default App;
