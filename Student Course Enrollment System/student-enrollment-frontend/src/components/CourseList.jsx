import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/courses')
      .then(res => setCourses(res.data));
  }, []);

  return (
    <div>
      <h2>All Courses</h2>
      <ul>
        {courses.map(c => <li key={c.id}>{c.name}</li>)}
      </ul>
    </div>
  );
};

export default CourseList;
