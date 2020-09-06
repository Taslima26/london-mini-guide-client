import React, {useState} from 'react';
import './CategoriesButton.css';
import CitySelect from './CitiesSelect';
const res = [
  {name: 'Pharmacies'},
  {name: 'Collages'},
  {name: 'Hospitals'},
  {name: 'Doctors'},
];
const CategoriesButtons = ({City}) => {
  const [Toggle, setToggle] = useState (null);

  console.log ('City value from CatagoriesButton', City);

  return res.map ((button, key) => (
    <button
      disabled={City === 'not selected' ? true : false}
      key={key}
      className={`button ${Toggle === key ? 'toggled' : ''}`}
      onClick={() => setToggle (key)}
    >
      {button.name}
    </button>
  ));
};

export default CategoriesButtons;
