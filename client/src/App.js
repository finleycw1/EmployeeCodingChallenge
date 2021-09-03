import './App.css';

import EmployeeTable from './EmployeeTable';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('/api/employees').then(
        response => {
          setEmployees(response.data);
        }
    );
  }, []);

  return (
    <EmployeeTable employees={employees} />
  );
}

export default App;
