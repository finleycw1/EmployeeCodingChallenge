function Employee (props) {

    const employee = props.employee;

    return (
        <tr>
            <td><input type="text" value={employee.fname} /></td>
            <td><input type="text" value={employee.lname} /></td>
            <td><input type="text" value={employee.hdate} /></td>
            <td><input type="text" value={employee.role} /></td>
            <td>{employee.id}</td>
            <td><button>Delete</button></td>
        </tr>
    )

}

export default Employee;