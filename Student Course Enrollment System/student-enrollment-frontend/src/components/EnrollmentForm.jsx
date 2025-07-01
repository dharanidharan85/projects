import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EnrollmentForm = () => {
  const [studentId, setStudentId] = useState('');
  const [courseId, setCourseId] = useState('');
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/students').then(res => setStudents(res.data));
    axios.get('http://localhost:8080/api/courses').then(res => setCourses(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/api/enrollments', {
      studentId,
      courseId
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enroll Student</h2>
      <select value={studentId} onChange={(e) => setStudentId(e.target.value)}>
        <option value="">Select Student</option>
        {students.map(student => (
          <option key={student.id} value={student.id}>{student.name}</option>
        ))}
      </select>

      <select value={courseId} onChange={(e) => setCourseId(e.target.value)}>
        <option value="">Select Course</option>
        {courses.map(course => (
          <option key={course.id} value={course.id}>{course.name}</option>
        ))}
      </select>

      <button type="submit">Enroll</button>
    </form>
  );
};

export default EnrollmentForm;
