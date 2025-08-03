
import React from 'react';

function BookDetails({ books }) {
  const list = books.map((book) => (
    <div key={book.id}>
      <h3>{book.bname}</h3>
      <h4>{book.price}</h4>
    </div>
  ));

  return (
    <div className="st2">
      <h1>Book Details</h1>
      <ul>{list}</ul>
    </div>
  );
}

export default BookDetails;
