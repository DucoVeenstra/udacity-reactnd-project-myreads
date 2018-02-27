import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Bookshelf from '../components/Bookshelf';
import * as BooksAPI from '../api/BooksAPI';

class SearchPage extends Component {

  state = {
    query: '',
    books: []
  }

  updateQuery = (query) => {
    this.setState({query: query.trim()})

    BooksAPI.search(query.trim()).then((books) => {
      this.setState({books: books});
    })

  }

  clearQuery = () => {
    this.setState({query: ''});
  }

  updateBookshelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
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
          <Bookshelf title={"Search Result"} books={this.state.books} onChangeBookshelf={this.updateBookshelf} />
        </div>
        ) : (null)}        
    </div>
    )
  }
}

export default SearchPage;