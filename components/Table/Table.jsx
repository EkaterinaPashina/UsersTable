import './Table.css'

import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic

import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-alpine.css"; // Theme

function Table() {
    const [rowData, setRowData] = useState([]);
    const [columnDefs] = useState([
        {
            headerName: 'First Name',
            field: 'firstName',
        },
        {
            headerName: 'Last Name',
            field: 'lastName'
        },
        {
            headerName: 'Age',
            field: 'age'
        },
        {
            headerName: 'Gender',
            field: 'gender'
        },
        {
            headerName: 'Phone',
            field: 'phone',
            sortable: false
        },
        {
            headerName: 'Address',
            field: 'address'
        },
    ]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(res => res.users)
            .then(rowData => setRowData(rowData))
    }, []);

    const defaultColDef = {
        sortable: true, flex: 1, filter: true, resizable: true, minWidth: 50 //Комфортнее для чтения было бы 150px
    };

    return (
        <div className="ag-theme-alpine ag-style">
            <AgGridReact className="custom-font"
                columnDefs={columnDefs}
                rowData={rowData}
                defaultColDef={defaultColDef}>
            </AgGridReact>
        </div>
    );
}

export default Table;