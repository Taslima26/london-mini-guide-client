import React, {useState} from 'react';
const CitiesSelect = () => {
  return (
    <div>
      <label for="Cities">Choose a City:</label>

      <select name="cities" id="cities">
        <option value="Harrow">Harrow</option>
        <option value="Heathrow">Heathrow</option>
        <option value="Stratford">Stratford</option>

      </select>
    </div>
  );
};
export default CitiesSelect;
