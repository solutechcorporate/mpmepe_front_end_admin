import React, {useEffect, useState} from 'react';
import DataTable from 'datatables.net-dt';
// import { red } from '@mui/material/colors';
import CheckboxForm from './CheckboxForm';
import AppConfig from '../config/AppConfig';
import {Link} from 'react-router-dom';
 


const TableView = ({ columns, children }) => {
  
 const [m, setM] = useState(true)
 const _init_ = () => {
  let table = new DataTable('#datatable-buttons', {
    responsive: true,
    // paging: true,
    // destroy: true,
    // searching: true,
    // ordering:  true,
    // select: true,
    // data: data,
    // columns:columns
  })
 }

  useEffect(() => {
    
    _init_();
    
  }, [])
  return (
    <table
     className="  table table-bordered dt-responsive nowrap w-100 align-middle"
    >
      <thead className="" style={{ background: 'linear-gradient(to right, #0303A8, #027227)', color: "#fff", textAlign: 'center',  }}>
        <tr>
          <th className="align-middle"><CheckboxForm/></th>
          {columns.map((column, index) => (
            <th className="align-middle" key={index}>{column}</th>
            
          ))}
           <th className="align-middle">Actions</th> {/* Colonne pour les titres des actions */}
        </tr>
      </thead>

      <tbody>
          {children}
      </tbody>
    </table>
  );
};
 
export default TableView;