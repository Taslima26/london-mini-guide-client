import React, {useState} from 'react';
import '../App.css';
const res = [
  {name: 'Pharmacies'},
  {name: 'Collages'},
  {name: 'Hospitals'},
  {name: 'Doctors'},
];
const CategoriesButtons = () => {
  const [Toggle, setToggle] = useState(null);
  

  return res.map((button, key) => (
   
    <button
      key={key}
      className={`button ${Toggle === key ? 'toggled' : ''}`}
      onClick={() => setToggle(key)}
    >
      {button.name}
    </button>
  ));
};

export default CategoriesButtons;
