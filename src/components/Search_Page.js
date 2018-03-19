import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Bookshelf from '../components/Bookshelf';
import * as BooksAPI from '../api/BooksAPI';

class SearchPage extends Component {

  state = {
    query: '',
    searchResults: []
  }

  updateQuery = (query) => {
    this.setState({ query: query });
    
    if (query.length > 0) {
      BooksAPI.search(query).then((booksInSearchResults) => {
        if(booksInSearchResults.length > 0) {
          this.setState({ searchResults: booksInSearchResults })
        } else {
          this.setState({ searchResults: [] });
        }
      })
    } else {
      this.setState({ searchResults: [] });
    }
  }

  clearQuery = () => {
    this.setState({ query: '' });
  }

  render() {
    const { booksOnHomePage } = this.props;
    const { searchResults } = this.state;

    //Map over searchResults to update shelf status
    const processedBooks = searchResults.map(book => {
      const found = booksOnHomePage.find(b => b.id === book.id);
      book.shelf = found ? found.shelf : "none";
      return book;
    });
    
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
        {processedBooks.length > 0 ? (
          <div className="search-books-results">
            <ol className="books-grid"></ol>
            <Bookshelf title={"Search Result"} books={processedBooks} onChangeBookshelf={this.props.onChangeBookshelf} />
          </div>
        ) : (null)}
      </div>
    )
  }
}

export default SearchPage;