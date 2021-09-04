import {useState} from "react";

function Employee (props) {

    const [employee, setEmployee] = useState({...props.employee});

    const handleDelete = () => {
        fetch(`/api/employees/${employee.id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    props.handleEmployeesModified()
                }
                else {
                    console.log(response)
                }
            });
    }

    return (
        <tr>
            <td><input type="text" value={employee.fname}
                       onChange={e => (setEmployee({...employee, fname: e.target.value}))}/></td>
            <td><input type="text" value={employee.lname}
                       onChange={e => (setEmployee({...employee, fname: e.target.value}))}/></td>
            <td><input type="text" value={employee.hdate}
                       onChange={e => (setEmployee({...employee, fname: e.target.value}))}/></td>
            <td><input type="text" value={employee.role}
                       onChange={e => (setEmployee({...employee, fname: e.target.value}))}/></td>
            <td>{employee.id}</td>
            <td><button onClick={handleDelete}>Delete</button></td>
        </tr>
    )

}

export default Employee;