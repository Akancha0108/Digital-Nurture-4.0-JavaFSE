
import React from 'react';

function CourseDetails({ courses }) {
  return (
    <div className="mystyle1">
      <h1>Course Details</h1>
      {courses.length > 0 ? (
        courses.map((course, i) => (
          <div key={i}>
            <h2>{course.name}</h2>
            <h4>{course.date}</h4>
          </div>
        ))
      ) : (
        <p>No courses available</p> 
      )}
    </div>
  );
}

export default CourseDetails;
