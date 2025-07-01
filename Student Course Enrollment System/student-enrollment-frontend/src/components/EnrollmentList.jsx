import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EnrollmentList = () => {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/enrollments')
      .then(res => setEnrollments(res.data));
  }, []);

  return (
    <div>
      <h2>Enrollments</h2>
      <ul>
        {enrollments.map((enroll, index) => (
          <li key={index}>
            {enroll.student.name} → {enroll.course.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnrollmentList;
