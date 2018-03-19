import React from 'react';

const BookshelfChanger = ({book, onChangeBookshelf}) => {
  return (
    <div className="book-shelf-changer">
      <select value={book.shelf} onChange={(event) => onChangeBookshelf(book, event.target.value)}>
        <option value="moveTo" disabled>Move to...</option>
        <option value="currentlyReading" >Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}

export default BookshelfChanger;