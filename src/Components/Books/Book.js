import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const Book = () => {
  const books = useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(removeBook(book));
  };

  return books.map((book) => (
    <li key={book.id}>
      <span>
        {' '}
        {book.title}
      </span>
      <span>
        {' '}
        {book.author}
      </span>
      <button type="button" onClick={() => handleRemoveBook(book)}>remove</button>
    </li>
  ));
};

export default Book;
