import React, { useState, useEffect } from 'react';
import DataTable from './DataTable'; 

const FetchData = ({ City }) => {
    console.log('City from FetchData', City);
    const [Information, setInformation] = useState([]);
    useEffect(() => {
        fetch(`https://glacial-cove-02168.herokuapp.com/${City}`).
            then((res) => res.json()).
            then((data) => setInformation(data))
    },[City])

    return (<div>
        <DataTable Information={Information}/>
    </div> );
}
 
export default FetchData;