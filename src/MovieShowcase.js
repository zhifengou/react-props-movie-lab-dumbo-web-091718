import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct 
    return(
      movieData.map(x=>
        <MovieCard poster={x.poster} title={x.title} IMDBRating={x.IMDBRating} genres={x.genres}/>
      )
<<<<<<< HEAD
      )
=======
>>>>>>> a778bb4b785b8fbffb29d479f3f26d03a76f9c7a
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
