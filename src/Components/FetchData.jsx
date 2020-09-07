import React, {useState, useEffect} from 'react';
import DataTable from './DataTable';
import CategoriesButtons from './CategoriesButtons';
import LoadingSpinner from './LoadingSpinner';

const FetchData = ({City}) => {
  console.log('City from FetchData', City);
  const [Information, setInformation] = useState([]);
  const [loading, setLoading] = useState(false);

  try {
    useEffect(() => {
      fetch(`https://glacial-cove-02168.herokuapp.com/${City}`)
        .then((res) => res.json())
        .then((data) => {
          setInformation(data);
          setLoading(true);
        });
    }, [City]);
  } catch (e) {
    setLoading(false);
  }

  return (
    <div>
      {loading ? (
        <CategoriesButtons Information={Information} City={City} />
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default FetchData;
