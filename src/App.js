import React, {useState} from 'react';

import './App.css';
import CitiesSelect from './Components/CitiesSelect';
import CategoriesButtons from './Components/CategoriesButtons';
import DataTable from './Components/DataTable';
import FetchData from './Components/FetchData';

function App() {
  const [City, setCity] = useState('');

  console.log(City);
  return (
    <div className="App">
      <h1 className="title">London Mini Guide</h1>

      <CitiesSelect City={City} setCity={setCity} />
      
    </div>
  );
}

export default App;
