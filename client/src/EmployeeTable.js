function EmployeeTable () {
    return (
        <table style={{border: "3px solid black"}}>
            <thead>
            <tr style={{border: "3px solid black"}}>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Hire Date</th>
                <th>Role</th>
                <th>ID</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><input id="fname1" type="text" value="Alfred" /></td>
                <td><input id="lname1" type="text" value="Hong" /></td>
                <td><input id="hdate1" type="text" value="2012-12-12" /></td>
                <td><input id="role1" type="text" value="Manager" /></td>
                <td>1</td>
                <td>
                    <button>Delete</button>
                </td>
            </tr>
            <tr>
                <td><input id="fname2" type="text" value="Maria" /></td>
                <td><input id="lname2" type="text" value="Fuentes" /></td>
                <td><input id="hdate2" type="text" value="2005-09-10" /></td>
                <td><input id="role2" type="text" value="CEO" /></td>
                <td>2</td>
                <td>
                    <button>Delete</button>
                </td>
            </tr>
            <tr>
                <td><input id="fname3" type="text" value="Tom" /></td>
                <td><input id="lname3" type="text" value="Smith" /></td>
                <td><input id="hdate3" type="text" value="2001-03-05" /></td>
                <td><input id="role3" type="text" value="VP" /></td>
                <td>3</td>
                <td>
                    <button>Delete</button>
                </td>
            </tr>
            </tbody>
            <button>Submit Changes</button>
            <button>New Record</button>
        </table>
    )
}

export default EmployeeTable;