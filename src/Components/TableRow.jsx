import React, {useState} from 'react';

const TableRow = ({info}) => {
  return (
    <tr>
      <td>{info.name}</td>
      <td>{info.website}</td>
      <td>{info.phone}</td>
      <td>{info.address}</td>
    </tr>
  );
};

export default TableRow;
