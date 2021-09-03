import Employee from "./Employee";

function EmployeeTable (props) {
    return (
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
                   {props.employees.map(e => <Employee key={e.id} employee={e} onChange={() => console.log("Something changed...")}/>)}
                </tbody>
            </table>
            <button>Submit Changes</button>
        </form>
    )
}

export default EmployeeTable;