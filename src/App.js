import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import BookList from './components/Book_List';
import * as BooksAPI from './api/BooksAPI';
import SearchPage from './components/Search_Page';

import './App.css';

class App extends Component {
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }

  state = {
    books: []
  }

  updateBookshelf = (book, shelfValue) => {
    BooksAPI.update(book,shelfValue)
      .then(() => {
        book.shelf = shelfValue;
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat(book)
        }));
      });
  }

  clearBookShelf = (booksOnShelf) => {
    // Use foreach not map to clear warning: Expected to return a value in arrow function
    booksOnShelf.forEach(book => {
      this.updateBookshelf(book, 'none');
    });
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <BookList
            books={this.state.books} onChangeBookshelf={this.updateBookshelf} clearBookShelf={this.clearBookShelf} />
        )} />

        <Route path="/search" render={() => (<SearchPage booksOnHomePage={this.state.books} onChangeBookshelf={this.updateBookshelf}/>)} />
      </div>
    );
  }
}

export default App;
