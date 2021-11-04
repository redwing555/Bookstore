import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook, addBook } from '../../redux/books/books';
import { fetchBookstoreData, removeBookApi } from '../../api/api';
import styles from './book.module.css';
import 'react-circular-progressbar/dist/styles.css';

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

  const chapter = Math.floor((Math.random() * 10) + 1);
  const percentage = chapter * 10;
  return books.map((book) => (

    <li className={styles.book} key={book.id}>

      <div className={styles.bookInfo}>
        <span className={styles.category}>
          {' '}
          Philosophy
        </span>
        <span className={styles.title}>
          {' '}
          {book.title}
        </span>
        <span className={styles.author}>
          {' '}
          {book.author}
        </span>
      </div>
      <div className={styles.progressionBar}>
        <div className={styles.circularProgressionBar}>

          <CircularProgressbar value={percentage} text="" />
        </div>

        <span className={styles.progressionPercent}>
          {percentage}
          %
          {' '}
          <div className={styles.completed}>Completed</div>
        </span>

      </div>
      <div className={styles.progression}>
        <span className={styles.chapter}> CURRENT CHAPTER</span>
        <span className={styles.currentChapter}>

          chapter
          {' '}
          {' '}

          {chapter}
        </span>
        <button type="button" className={styles.progressBtn}>UPDATE PROGRESS</button>
      </div>
      <div className={styles.buttons}>
        <button type="button" className={styles.btn}>Comments</button>
        <button type="button" className={styles.btn} onClick={() => handleRemoveBook(book)}>Remove</button>
        <button type="button" className={styles.btn}>Edit</button>
      </div>
    </li>
  ));
};

export default Book;
