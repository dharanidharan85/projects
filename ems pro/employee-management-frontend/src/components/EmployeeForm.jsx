import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EmployeeForm({ onSuccess, selectedEmployee, clearSelection }) {
  const [formData, setFormData] = useState({ name: '', email: '', department: '' });

  useEffect(() => {
    if (selectedEmployee) {
      setFormData(selectedEmployee);
    } else {
      setFormData({ name: '', email: '', department: '' });
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedEmployee) {
        await axios.put(`http://localhost:8080/api/employees/${selectedEmployee.id}`, formData);
      } else {
        await axios.post('http://localhost:8080/api/employees', formData);
      }
      setFormData({ name: '', email: '', department: '' });
      clearSelection();
      onSuccess();
    } catch (error) {
      console.error('Error saving employee:', error);
    }
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h2>{selectedEmployee ? 'Update' : 'Add'} Employee</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input name="department" value={formData.department} onChange={handleChange} placeholder="Department" required />
      <button type="submit">{selectedEmployee ? 'Update' : 'Add'}</button>
      {selectedEmployee && <button type="button" onClick={clearSelection}>Cancel</button>}
    </form>
  );
}

export default EmployeeForm;
   
// // components/EmployeeForm.js
// import React, { useState } from 'react';
// import axios from 'axios';

// function EmployeeForm({ onSuccess }) {
//   const [formData, setFormData] = useState({ name: '', email: '', department: '' });

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post('http://localhost:8080/api/employees', formData);
//     setFormData({ name: '', email: '', department: '' });
//     onSuccess();
//   };

//   return (
//     <form className="employee-form" onSubmit={handleSubmit}>
//       <h2>Add Employee</h2>
//       <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
//       <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
//       <input name="department" value={formData.department} onChange={handleChange} placeholder="Department" required />
//       <button type="submit">Add</button>
//     </form>
//   );
// }

// export default EmployeeForm;