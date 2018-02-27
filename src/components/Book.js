import React, {Component} from 'react';
import PropTypes from 'prop-types';

import BookshelfChanger from './BookshelfChanger';

class Book extends Component {
  static propTypes = {
    title:PropTypes.string.isRequired,
    authors:PropTypes.array,
    thumbnailUrl:PropTypes.string //TODO: can be null search on B
  }

  renderAuthors(authors) {
    let text = '';
    if (authors) {
      for (var i = 0; i < authors.length; i++) { 
        if (i === authors.length -1) {
          text += authors[i];
        } else {
          text += authors[i] + ", "
        }
      }
    }
    
    return text;
  }

  render() {
    const {title, authors, thumbnailUrl, onChangeBookshelf, book} = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url('${thumbnailUrl}')` }}></div>
          <BookshelfChanger book={book} onChangeBookshelf={onChangeBookshelf} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{this.renderAuthors(authors)}</div>
      </div>
    )
  }
}

export default Book;