import React from 'react';
import { Link } from 'react-router-dom';

import Bookshelf from './Bookshelf';

const BookList = ({books, onChangeBookshelf, clearBookShelf}) => {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Bookshelf title={"Currently Reading"} books={books.filter(book => book.shelf === "currentlyReading")} onChangeBookshelf={onChangeBookshelf} clearBookShelf={clearBookShelf} />
          <Bookshelf title={"Want to Read"} books={books.filter(book => book.shelf === "wantToRead")} onChangeBookshelf={onChangeBookshelf} clearBookShelf={clearBookShelf} />
          <Bookshelf title={"Read"} books={books.filter(book => book.shelf === "read")} onChangeBookshelf={onChangeBookshelf} clearBookShelf={clearBookShelf} />
        </div>
        <div className="open-search">
          <Link to="/Search" booksOnHomePage={books}>Add a book</Link>
        </div>
      </div>
    )
};

export default BookList;