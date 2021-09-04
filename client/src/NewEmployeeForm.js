import {useState} from "react";
import axios from "axios";

function NewEmployeeForm(props) {

    const [employee, setEmployee] = useState({fname: '', lname: '', hdate: '', role: ''});

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(employee);
        axios.post('api/employees', employee)
            .then(() => {
                    props.handleNewEmployeeAdded();
                    setEmployee({fname: '', lname: '', hdate: '', role: ''});
                }
            )
            .catch(error => console.log(error));
    }

    return (
        <>
        <h2>Add New Employee</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Hire Date</th>
                        <th>Role</th>
                    </tr>
                    <tr>
                        <td><input id="newEmployeeFirstName" type="text" value={employee.fname}
                                   onChange={e => (setEmployee({...employee, fname: e.target.value}))}
                        /></td>
                        <td><input id="newEmployeeLastName" type="text" value={employee.lname}
                                   onChange={e => (setEmployee({...employee, lname: e.target.value}))}
                        /></td>
                        <td><input id="newEmployeeHireDate" type="text" value={employee.hdate}
                                   onChange={e => (setEmployee({...employee, hdate: e.target.value}))}
                        /></td>
                        <td><input id="newEmployeeRole" type="text" value={employee.role}
                                   onChange={e => (setEmployee({...employee, role: e.target.value}))}
                        /></td>
                    </tr>
                    </thead>
                </table>
                <button>New Record</button>
            </form>
        </>
    );
}

export default NewEmployeeForm