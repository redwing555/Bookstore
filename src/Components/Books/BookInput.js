import React from 'react';

const BookInput = () => (
  <form>
    <input type="text" name="title" placeholder="Add book title" />
    <input type="text" name="author" placeholder="Add book author" />
    <input type="button" value="add" />
  </form>
);

export default BookInput;
