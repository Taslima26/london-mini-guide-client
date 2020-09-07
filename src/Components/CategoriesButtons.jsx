import React, {useState} from 'react';
import './CategoriesButton.css';
import DataTable from './DataTable';
const res = [
  {name: 'pharmacies'},
  {name: 'colleges'},
  {name: 'hospitals'},
  {name: 'doctors'},
];
const CategoriesButtons = ({City, Information, goBack}) => {
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
      <DataTable Click={Click} Information={Information} goBack={setClick} />
    );
  }
  console.log('City from catagories buttons', City);

  return res.map((button, key) => (
    <div>
      <button
        type="button"
        className="btn"
        id={button.name}
        disabled={City === '' ? true : false}
        className={`button ${
          City === '' ? 'btn btn-secondary' : ' btn-primary'
        }`}
        key={key}
        onClick={handleClick}
      >
        {button.name}
      </button>
      {/*  <DataTable /> */}
    </div>
  ));
};

export default CategoriesButtons;
