import Employee from "./Employee";
import {useState} from "react";

function EmployeeTable(props) {

    const [modifiedEmployees, setModifiedEmployees] = useState({});

    const handleEmployeeModified = (e) => {
        modifiedEmployees[e.id] = e;
        setModifiedEmployees(modifiedEmployees);
    }

    // PUT all modified employees
    const handleSubmitButton = event => {
        event.preventDefault();

        let requests = [];

        for(let id in modifiedEmployees) {
            const employee = modifiedEmployees[id];
            requests = [...requests,
                fetch(`/api/employees/${employee.id}`, {
                    method: 'PUT',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(employee)
                })
            ];
        }

        // Wait for all PUTs to complete, then print any error messages and update table
        Promise.all(requests)
            .then(values => {
                values.filter(response => !response.ok).forEach(response => console.log(response.errorText));
                props.reloadTable();
            })
    }

    return (
        <>
            <h2>Employees</h2>
            <form>
                <table>
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Hire Date</th>
                        <th>Role</th>
                        <th>ID</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.employees.map(e => <Employee key={e.id} employee={e}
                                                        handleEmployeeDeleted={props.reloadTable}
                                                        handleEmployeeModified={handleEmployeeModified}
                    />)}
                    </tbody>
                </table>
                <button onClick={handleSubmitButton}>Submit Changes</button>
            </form>
        </>
    )
}

export default EmployeeTable;