import React, { useState } from 'react';
import axios from 'axios';

const CourseForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/api/courses', { name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Course</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Course Name" />
      <button type="submit">Add</button>
    </form>
  );
};

export default CourseForm;
