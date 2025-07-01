import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/api/students', { name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Student</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Student Name" />
      <button type="submit">Add</button>
    </form>
  );
};

export default StudentForm;
