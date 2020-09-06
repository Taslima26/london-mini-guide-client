import React, {useState} from 'react';
import './CitiesSelect';
import CategoriesButtons from './CategoriesButtons';
import FetchData from './FetchData';
const CitiesSelect = ({setCity ,City}) => {
  const changeCity = (event) => {
    event.preventDefault();
    setCity(event.target.value);
  };

  return (
    <div>
      <label for="Cities" >
        Choose a City:
      </label>

      <select name="cities" id="cities" onChange={changeCity}>
        <option value='not selected'>Choose a city</option>
        <option value="Harrow">Harrow</option>
        <option value="Heathrow">Heathrow</option>
        <option value="Stratford">Stratford</option>
      </select>
      
    
      <div><CategoriesButtons City={City} /></div>
      <div><FetchData City={City}/></div>
    </div>
  );
};
export default CitiesSelect;
