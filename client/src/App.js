import './App.css';

import EmployeeTable from './EmployeeTable';
import NewEmployeeForm from "./NewEmployeeForm";

import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [employees, setEmployees] = useState([]);

    // Populate the table
    useEffect(() => {
        axios.get('/api/employees').then(
            response => {
                setEmployees(response.data);
            }
        );
    }, []);

    return (
        <>
            <EmployeeTable employees={employees}/>
            <NewEmployeeForm/>
        </>
    );
}

export default App;
