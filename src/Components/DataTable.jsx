import React, {useState} from 'react';
import TableRow from './TableRow';

const DataTable = ({Information, Click,goBack}) => {
  console.log('Set Click', Click);
  console.log('Information from data table', Information[Click]);
  const mapRes = Information[Click];
  const goBackToMainPage = () => {
    goBack();
  };
  console.log(mapRes);
  return (
    <div>
      <button onClick={goBackToMainPage}>Go back to main page!!</button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Website</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {mapRes.map((info, index) => {
            return <TableRow info={info} key={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
