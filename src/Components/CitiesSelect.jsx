import React, {useState} from 'react';
import './CitiesSelect.css';
import FetchData from './FetchData';
const CitiesSelect = ({setCity, City}) => {
  const changeCity = (event) => {
    event.preventDefault();
    setCity(event.target.value);
  };

  return (
    <div className="dropdown">
      {/* <label for="Cities">Choose a City:</label> */}

      <select
        name="cities"
        id="cities"
        onChange={changeCity}
        className="dropdown"
      >
        <option className="dropdown-item" value="not selected">
          Choose a city
        </option>
        <option className="dropdown-item" value="Harrow">Harrow</option>
        <option  className="dropdown-item"value="Heathrow">Heathrow</option>
        <option  className="dropdown-item" value="Stratford">Stratford</option>
      </select>

      <div>
        <FetchData City={City} />
      </div>
    </div>
  );
};
export default CitiesSelect;
