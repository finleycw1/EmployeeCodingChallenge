function Employee (props) {

    const employee = props.employee;

    return (
        <tr>
            <td><input type="text" value={employee.fname} onChange={props.onChange} /></td>
            <td><input type="text" value={employee.lname} onChange={props.onChange} /></td>
            <td><input type="text" value={employee.hdate} onChange={props.onChange} /></td>
            <td><input type="text" value={employee.role} onChange={props.onChange} /></td>
            <td>{employee.id}</td>
            <td><button>Delete</button></td>
        </tr>
    )

}

export default Employee;