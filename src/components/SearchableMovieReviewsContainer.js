import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '3IyNRwfu6LmPwtMG1HGPokewK5GTYpCV';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ''
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let searchURL = URL + `&query=${this.state.searchTerm}`
    fetch(searchURL)
    .then(response => response.json())
    .then(data => {
      this.setState({
        reviews: data.results
      })
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.searchTerm} onChange={this.handleChange}/>
          <button type="submit">Search</button>
          <MovieReviews reviews={this.state.reviews}/>
        </form>
      </div>
    )
  }
}
