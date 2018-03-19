import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Bookshelf from '../components/Bookshelf';
import * as BooksAPI from '../api/BooksAPI';

class SearchPage extends Component {

  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    const {booksOnHomePage} = this.props;
    this.setState({ query: query });
    if (query.length > 0) {
      BooksAPI.search(query.trim()).then((booksInSearchResults) => {
        booksInSearchResults.forEach(bookInSearchResults => {
          booksOnHomePage.forEach(bookOnHomePage => {
            if (bookInSearchResults.id === bookOnHomePage.id) {
              bookInSearchResults.shelf = bookOnHomePage.shelf;
            }
          });
        });
        this.setState({ books: booksInSearchResults });
      })
    } else {
      this.setState({ books: [] });
    }
  }

  clearQuery = () => {
    this.setState({ query: '' });
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)} />
          </div>
        </div>
        {this.state.books && this.state.books.length > 0 ? (
          <div className="search-books-results">
            <ol className="books-grid"></ol>
            <Bookshelf title={"Search Result"} books={this.state.books.filter(book => !book.shelf)} onChangeBookshelf={this.props.onChangeBookshelf} />
          </div>
        ) : (null)}
      </div>
    )
  }
}

export default SearchPage;