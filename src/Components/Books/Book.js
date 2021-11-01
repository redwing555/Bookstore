import React from 'react';

const books = [
  { id: 1, name: 'Meditations', author: 'Marcus Aurelius' },
  { id: 1, name: 'Crime and punishement', author: 'Dostoevsky' },
];

const Book = () => books.map((book) => (
  <li key={book.id}>
    <span>
      {' '}
      {book.name}
    </span>
    <span>
      {' '}
      {book.author}
    </span>
    <button type="button">remove</button>
  </li>
));

export default Book;
