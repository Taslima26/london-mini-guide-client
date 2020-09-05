import React from 'react';
import logo from './logo.svg';
import './App.css';
import CitiesSelect from './Components/CitiesSelect';
import CategoriesButtons from './Components/CategoriesButtons';
import PharmacyTable from './Components/PharmacyTable';

function App () {
  return (
    <div className="App">
      <h1>London Mini Guide</h1>
      <CitiesSelect />
      <CategoriesButtons />
      <PharmacyTable />

    </div>
  );
}

export default App;
