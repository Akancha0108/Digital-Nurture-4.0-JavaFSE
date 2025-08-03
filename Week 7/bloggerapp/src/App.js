import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import { books, blogs, courses } from './data';


function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);
  const [showCourses, setShowCourses] = useState(true);

  return (
    <div className="container">
      {}
      <button onClick={() => setShowBooks(!showBooks)}>Toggle Books</button>
      <button onClick={() => setShowBlogs(!showBlogs)}>Toggle Blogs</button>
      <button onClick={() => setShowCourses(!showCourses)}>Toggle Courses</button>

      {/* Conditional Rendering Techniques */}
      {showBooks && <BookDetails books={books} />}                {/* using && operator */}
      {showBlogs ? <BlogDetails blogs={blogs} /> : null}          {/* using ternary operator */}
      {showCourses && <CourseDetails courses={courses} />}        {/* using && operator */}
    </div>
  );
}

export default App;
