import {useState} from "react";

function Employee (props) {

    const [employee, setEmployee] = useState({...props.employee});

    const handleDelete = () => {
        fetch(`/api/employees/${employee.id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    props.handleEmployeeDeleted();
                }
                else {
                    console.log(response);
                }
            });
    }

    return (
        <tr>
            <td><input type="text" value={employee.fname}
                       onChange={e => {
                           const modifiedEmployee = {...employee, fname: e.target.value};
                           (setEmployee(modifiedEmployee));
                           props.handleEmployeeModified(modifiedEmployee);
                       }}/></td>
            <td><input type="text" value={employee.lname}
                       onChange={e => {
                           const modifiedEmployee = {...employee, lname: e.target.value};
                           (setEmployee(modifiedEmployee));
                           props.handleEmployeeModified(modifiedEmployee);
                       }}/></td>
            <td><input type="text" value={employee.hdate}
                       onChange={e => {
                           const modifiedEmployee = {...employee, hdate: e.target.value};
                           (setEmployee(modifiedEmployee));
                           props.handleEmployeeModified(modifiedEmployee);
                       }}/></td>
            <td><input type="text" value={employee.role}
                       onChange={e => {
                           const modifiedEmployee = {...employee, role: e.target.value};
                           (setEmployee(modifiedEmployee));
                           props.handleEmployeeModified(modifiedEmployee);
                       }}/></td>
            <td>{employee.id}</td>
            <td><button onClick={handleDelete}>Delete</button></td>
        </tr>
    )

}

export default Employee;