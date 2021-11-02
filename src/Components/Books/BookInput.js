import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

const BookInput = () => {
  const dispatch = useDispatch();
  const handleAddBook = () => {
    const newBook = {
      id: Math.ceil(Math.random() * 100),
      title: document.getElementById('title').value,
      author: document.getElementById('author').value,
    };
    if (newBook.title !== '' && newBook.author !== '') {
      dispatch(addBook(newBook));
    }

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  };
  return (
    <form>
      <input id="title" type="text" name="title" placeholder="Add book title" />
      <input id="author" type="text" name="author" placeholder="Add book author" />
      <input type="button" value="add" onClick={handleAddBook} />
    </form>
  );
};

export default BookInput;
