import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';
import { addBookApi } from '../../api/api';

const BookInput = () => {
  const dispatch = useDispatch();
  const handleAddBook = async () => {
    const newBook = {
      id: Math.ceil(Math.random() * 100),
      title: document.getElementById('title').value,
      author: document.getElementById('author').value,
    };
    if (newBook.title !== '' && newBook.author !== '') {
      await addBookApi(newBook.title, newBook.author, newBook.id);
      dispatch(addBook(newBook));
    } else {
      alert('PLEASE ADD BOOK TITLE AND AUTHOR !');
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
