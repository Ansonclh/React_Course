
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      total_ratings: 0,
      handleLike: () => {
        this.setState({ likes: this.state.likes + 1, total_ratings: this.state.total_ratings + 1 });
      },
      handleDislike: () => {
        this.setState({ dislikes: this.state.dislikes + 1, total_ratings: this.state.total_ratings + 1 });
      }
    }
  }
  render() {
    return (
     <>

      <div className='content-rating'>
          <p>//Add text here</p>

          <div className='rating-buttons'>
              <button className="like-button" onClick={this.state.handleLike}>Like ({this.state.likes})</button>
              <button className="dislike-button" onClick={this.state.handleDislike}>Dislike ({this.state.dislikes})</button>
              <p>Total Ratings: {this.state.total_ratings}</p>

          </div>
      </div>

     </>
    );
  }
}

export default ContentRating;
