import Employee from "./Employee";

function EmployeeTable(props) {
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
                                                        handleEmployeesModified={props.handleEmployeesModified}/>)}
                    </tbody>
                </table>
                <button>Submit Changes</button>
            </form>
        </>
    )
}

export default EmployeeTable;