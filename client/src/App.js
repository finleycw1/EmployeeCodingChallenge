import './App.css';

import EmployeeTable from './EmployeeTable';
import NewEmployeeForm from "./NewEmployeeForm";

import {useEffect, useState} from "react";

function App() {
    const [employees, setEmployees] = useState([]);

    const reloadEmployeeTable = () => {
        fetch(`/api/employees`, {
            method: 'GET',
            accept: "Application/JSON"
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    throw new Error("Unable to fetch employee list.")
                }
            })
            .then(updatedEmployees => setEmployees(updatedEmployees))
            .catch(error => console.log(error));
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
