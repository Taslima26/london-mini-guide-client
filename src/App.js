import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import CitiesSelect from './Components/CitiesSelect';
import CategoriesButtons from './Components/CategoriesButtons';
import PharmacyTable from './Components/PharmacyTable';

function App() {
  const [City, setCity] = useState('Harrow');

  console.log(City);
  return (
    <div className="App">
      <h1>London Mini Guide</h1>

      <CitiesSelect setCity={setCity} />

      <CategoriesButtons />
      <PharmacyTable />
    </div>
  );
}

export default App;
