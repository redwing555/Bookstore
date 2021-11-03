import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, addBook } from '../../redux/books/books';
import { fetchBookstoreData, removeBookApi } from '../../api/api';

const Book = () => {
  const books = useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    removeBookApi(book.id);
    dispatch(removeBook(book));
  };

  const getBooksFromApi = async () => {
    const bookObject = await fetchBookstoreData();
    const bookData = Object.keys(bookObject).map((_, index) => ({
      id: Object.keys(bookObject)[index],
      author: Object.values(bookObject)[index][0].category,
      title: Object.values(bookObject)[index][0].title,

    }));

    bookData.forEach((book) => {
      dispatch(addBook(book));
    });
  };

  useEffect(() => {
    getBooksFromApi();
  }, []);

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
