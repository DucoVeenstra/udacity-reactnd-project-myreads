import React, {Component} from 'react';

class BookshelfChanger extends Component {
  state = {
    showOptions: false
  }

  showOptions = () => {
    this.state.showOptions ? this.setState({showOptions:false}) : this.setState({showOptions:true});
  }

  render () {
    const {book, onChangeBookshelf} = this.props;

    return (
      <div className="book-shelf-changer" onClick={() => this.showOptions()}>
      <ul className={this.state.showOptions ? "book-shelf-options": "hidden"}>
        <li className={book.shelf === "currentlyReading" ? "checkmarked": ""} onClick={() => onChangeBookshelf(book, 'currentlyReading') && this.showOptions()}><span>Currently Reading</span></li>
        <li className={book.shelf === "wantToRead" ? "checkmarked": ""} onClick={() => onChangeBookshelf(book, 'wantToRead') && this.showOptions()}><span>Want to Read</span></li>
        <li className={book.shelf === "read" ? "checkmarked": ""} onClick={() => onChangeBookshelf(book, 'read') && this.showOptions()}><span>Read</span></li>
        <li className={book.shelf === "none" ? "checkmarked": ""} onClick={() => onChangeBookshelf(book, 'none') && this.showOptions()}><span>None</span></li>
      </ul>
      </div>
    )
  }
}

export default BookshelfChanger;