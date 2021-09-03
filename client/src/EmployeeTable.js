import Employee from "./Employee";

function EmployeeTable (props) {
    return (
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
               {props.employees.map(e => <Employee employee={e}/>)}
            </tbody>
            <button>Submit Changes</button>
            <button>New Record</button>
        </table>
    )
}

export default EmployeeTable;