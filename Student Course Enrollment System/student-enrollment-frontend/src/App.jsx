import React from 'react';
import StudentForm from './components/StudentForm';
import CourseForm from './components/CourseForm';
import EnrollmentForm from './components/EnrollmentForm';
import StudentList from './components/StudentList';
import CourseList from './components/CourseList';
import EnrollmentList from './components/EnrollmentList';
import './App.css'

const App = () => {
  return (
    <div className="container">
      <h1>Student Course Enrollment System</h1>

      <div className="forms">
        <StudentForm />
        <CourseForm />
        <EnrollmentForm />
      </div>

      <div className="lists">
        <StudentList />
        <CourseList />
        <EnrollmentList />
      </div>
    </div>
  );
};

export default App;
