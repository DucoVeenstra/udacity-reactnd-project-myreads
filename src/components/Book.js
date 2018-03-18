import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BookshelfChanger from './Bookshelf_Changer';
import BookRating from './Book_Rating';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  }

  renderAuthors(authors) {
    let text = '';
    if (authors) {
      for (var i = 0; i < authors.length; i++) {
        if (i === authors.length - 1) {
          text += authors[i];
        } else {
          text += authors[i] + ", "
        }
      }
    }

    return text;
  }

  // Fix: When Searching on 'B' imageLinks is null on some books
  getBookThumbnail(book) {
    let urlThumbnail = "";
    if (!book.imageLinks) {
    } else {
      if (!book.imageLinks.thumbnail) {
      }
      else {
        urlThumbnail = book.imageLinks.thumbnail
      }
    }
    return urlThumbnail;
  }

  render() {
    const { onChangeBookshelf, book, bookshelf } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url('${this.getBookThumbnail(book)}')` }}></div>
          <BookshelfChanger book={book} bookshelf={bookshelf} onChangeBookshelf={onChangeBookshelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{this.renderAuthors(book.authors)}</div>
        <BookRating value={book.ratingsCount ? book.ratingsCount : 0} count={5} />
      </div>
    )
  }
}

export default Book;