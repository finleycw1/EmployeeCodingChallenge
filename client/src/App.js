import './App.css';

import EmployeeTable from './EmployeeTable';
import NewEmployeeForm from "./NewEmployeeForm";

import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [employees, setEmployees] = useState([]);

    const populateEmployeeTable = () => {
        axios.get('/api/employees').then(
            response => {
                setEmployees(response.data);
            }
        );
    };

    // Populate the table
    useEffect(() => {
        populateEmployeeTable();
    }, []);

    return (
        <>
            <EmployeeTable employees={employees}/>
            <NewEmployeeForm onEmployeeAdded={populateEmployeeTable}/>
        </>
    );
}

export default App;
