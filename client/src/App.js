import './App.css';

import EmployeeTable from './EmployeeTable';
import NewEmployeeForm from "./NewEmployeeForm";

import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [employees, setEmployees] = useState([]);

    const reloadEmployeeTable = () => {
        axios.get('/api/employees').then(
            response => {
                setEmployees(response.data);
            }
        );
    };

    // Populate the table
    useEffect(() => {
        reloadEmployeeTable();
    }, []);

    return (
        <>
            <EmployeeTable employees={employees} reloadTable={reloadEmployeeTable} />
            <NewEmployeeForm handleNewEmployeeAdded={reloadEmployeeTable}/>
        </>
    );
}

export default App;
