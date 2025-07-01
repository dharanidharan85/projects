import React, { useEffect, useState } from 'react';
import EmployeeForm from './EmployeeForm';
import axios from 'axios';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchEmployees = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/employees');
      setEmployees(res.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/employees/${id}`);
      fetchEmployees();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <EmployeeForm
        onSuccess={fetchEmployees}
        selectedEmployee={selectedEmployee}
        clearSelection={() => setSelectedEmployee(null)}
      />
      <h2>All Employees</h2>
      <input
        type="text"
        placeholder="Search by name, email or department"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{ padding: '8px', marginBottom: '10px', width: '80%' }}
      />
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>
                <button onClick={() => setSelectedEmployee(emp)}>Edit</button>
                <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;

// import React, { useEffect, useState } from 'react';
// import EmployeeForm from './EmployeeForm';

// import axios from 'axios';

// function EmployeeList() {
//   const [employees, setEmployees] = useState([]);

//   const fetchEmployees = async () => {
//     const res = await axios.get('http://localhost:8080/api/employees');
//     setEmployees(res.data);
//   };

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const deleteEmployee = async (id) => {
//     await axios.delete(`http://localhost:8080/api/employees/${id}`);
//     fetchEmployees();
//   };

//   return (
//     <div>
//       <EmployeeForm onSuccess={fetchEmployees} />
//       <h2>All Employees</h2>
//       <table className="employee-table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Department</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map(emp => (
//             <tr key={emp.id}>
//               <td>{emp.name}</td>
//               <td>{emp.email}</td>
//               <td>{emp.department}</td>
//               <td>
//                 <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default EmployeeList;
