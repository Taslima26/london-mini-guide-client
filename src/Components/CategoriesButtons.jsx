import React, {useState} from 'react';
import './CategoriesButton.css';
import CitySelect from './CitiesSelect';
import DataTable from './DataTable';
const res = [
  {name: 'pharmacies'},
  {name: 'collages'},
  {name: 'hospitals'},
  {name: 'doctors'},
];
const CategoriesButtons = ({City, Information}) => {
  
  const [Click, setClick] = useState();

  const handleClick = (event) => {
    let buttonId = event.target.id;
    console.log(buttonId);
    let selectedButton = res.find((p) => p.name === buttonId);
    console.log(selectedButton.name);
    setClick(selectedButton.name);
  };

  if (Click) {
    return (
      <DataTable
        Click={Click}
        Information={Information}
        
      />
    );
  }
  return res.map((button, key) => (
    <div>
    <button
      id={button.name}
      disabled={City === 'not selected' ? true : false}
      key={key}
      //className={`button ${Toggle === key ? 'toggled' : ''}`}
      onClick={
        //setToggle(key);
        handleClick
      }
    >
      {button.name}
    </button>
   {/*  <DataTable /> */}
   </div>
  ));
};

export default CategoriesButtons;
