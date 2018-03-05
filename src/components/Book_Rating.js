import React, {Component} from 'react';

class BookRating extends Component {
  
  renderStars(rate) {
    // populate stars
    let starNodes = [];

    for (let i = 5; i >= 1; i--) {
      const starNodeInput = (
        <div className="star">
        <div
          key={i}
          className={rate <= i ? rate % 1 !== 0 ? "rated-half-star" : "rated-full-star" : "non-rated-full-star"}
        />
        </div>
        );
      starNodes.push(starNodeInput);
    }
    return starNodes;
  }

  render() {
    return(
      <div className="rating">{this.renderStars(this.props.averageRating)}</div>
    )
  }
}

export default BookRating;