import React from 'react';
import Book from './Book';
import styles from './books.module.css';

const Books = () => (
  <ul className={styles.bookList}>
    <Book />
  </ul>

);

export default Books;
