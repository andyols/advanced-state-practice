import React, { Component } from 'react'

class Reviews extends Component {
  state = {
    showReviews: false
  }

  toggleReviews = () => this.setState({ showReviews: !this.state.showReviews })

  render() {
    const { product } = this.props

    return (
      <div>
        <button
          onClick={() => this.toggleReviews()}
          className="btn btn-primary"
        >
          Reviews
        </button>
        <ul className="list-group">
          {this.state.showReviews &&
            product.reviewsArr.map((review, i) => (
              <li key={i} className="list-group-item">
                {review.description}
              </li>
            ))}
        </ul>
      </div>
    )
  }
}

export default Reviews
