
import React from 'react';

function BlogDetails({ blogs }) {
  return (
    <div className="v1">
      <h1>Blog Details</h1>
      {blogs.map((blog, i) => (
        <div key={i}>
          <h2>{blog.title}</h2>
          <strong>{blog.author}</strong>
          <p>{blog.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
