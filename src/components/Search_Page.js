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
    const {booksOnHomePage} = this.props;

    this.setState({ query: query });
    
    if (query.length > 0) {
      BooksAPI.search(query).then((booksInSearchResults) => {
        if(booksInSearchResults.length > 0) {          
          const results = booksInSearchResults.map((bookInSearchResults) => {
            const existingBook = booksOnHomePage.find((b) => b.id === bookInSearchResults.id)
            bookInSearchResults.shelf = !!existingBook ? existingBook.shelf : 'none'
            return bookInSearchResults
          });
          this.setState({ searchResults: results })
          
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
        {this.state.searchResults && this.state.searchResults.length > 0 ? (
          <div className="search-books-results">
            <ol className="books-grid"></ol>
            <Bookshelf title={"Search Result"} books={this.state.searchResults} onChangeBookshelf={this.props.onChangeBookshelf} />
          </div>
        ) : (null)}
      </div>
    )
  }
}

export default SearchPage;