import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class BookshelfChanger extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.book.shelf };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChangeBookshelf(this.props.book, event.target.value);
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="moveTo" disabled>Move to...</option>
          <option value="currentlyReading" >Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default withRouter(BookshelfChanger);