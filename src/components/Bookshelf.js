import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

class Bookshelf extends Component {
  static propTypes = {
    title:PropTypes.string.isRequired,
    books:PropTypes.array.isRequired//PropTypes.arrayOf(PropTypes.obj).isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      showBookShelfOptions: false
    }
    this.showBookShelfOptions = this.showBookShelfOptions.bind(this);
  }

  renderListitems(book, onChangeBookshelf) {
    return <li key={book.id}><Book book={book} onChangeBookshelf={onChangeBookshelf}/></li>
  }
  showBookShelfOptions() {
    this.setState({showBookShelfOptions: true});
  }

  renderBookShelfOptions(clearBookShelf, books) {
    return (
      <div className="bookshelf-actions" onClick={this.showBookShelfOptions}>
        <ul className={this.state.showBookShelfOptions ? null : "hidden" }>
          <li onClick={() => clearBookShelf(books)}>Clear Shelf</li>
        </ul>
      </div>
    )
  }
  render() {
    const {books, title, onChangeBookshelf, clearBookShelf} = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title} ({books.length})</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => this.renderListitems(book, onChangeBookshelf))}
          </ol>
        </div>
        {books.length > 0 ? this.renderBookShelfOptions(clearBookShelf, books) : null}
      </div>
    )
  }
}

export default Bookshelf;