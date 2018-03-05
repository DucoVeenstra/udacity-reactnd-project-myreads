import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

class Bookshelf extends Component {
  static propTypes = {
    title:PropTypes.string.isRequired,
    books:PropTypes.array.isRequired//PropTypes.arrayOf(PropTypes.obj).isRequired
  }

  renderListitems(book, onChangeBookshelf) {
    return <li key={book.id}><Book book={book} onChangeBookshelf={onChangeBookshelf}/></li>
  }

  render() {
    const {books, title, onChangeBookshelf} = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => this.renderListitems(book, onChangeBookshelf))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf;