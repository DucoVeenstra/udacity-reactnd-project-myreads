import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import BookList from './components/Book_List';
import * as BooksAPI from './api/BooksAPI';
import SearchPage from './components/Search_Page';

class App extends Component {
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    })
  }

  componentDidUpdate() {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    })
  }
  
  state = {
    books: []
  }

  updateBookshelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
  }

  render() {  
    return (
      <div className="App">        
          <Route exact path="/" render={() => (
            <BookList 
              books={this.state.books} onChangeBookshelf={this.updateBookshelf} />
          )} />

          <Route path="/search" render={() => (<SearchPage/>)} />        
      </div>
    );
  }
}

export default App;
