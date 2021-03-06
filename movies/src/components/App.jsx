import React, { Component } from 'react';
import './App.css';
//import { moviesData } from './moviesData';
import MovieItem from './MovieItem';
import MovieTabs from './MovieTabs';
import { API_URL, API_KEY_3 } from '../utils/api';

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: 'popularity.desc'
    }
  }

  getMovies = () => {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`)
      .then(res => res.json())
      .then(data => {
        this.setState({movies: data.results});
      })
  }

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sort_by !== this.state.sort_by) {
      this.getMovies();
    }
  }

  removeMovie = movie => {

    const updateMovies = this.state.movies.filter(function(item) {
      return item.id !== movie.id;
    });
  
    this.setState({
      movies: updateMovies,
    });

  }

  addMovieToWillWatch = movie => {

    const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });

  }


  removeMovieFromWillWatch = movie => {

    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function(item) {
      return item.id !== movie.id;
    });
  
    this.setState({
      moviesWillWatch: updateMoviesWillWatch,
    });

  }

  updateSortBy = value => {
    this.setState({sort_by: value});
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-9">
            <div className="row mb-4">
              <div className="col-12">
                <MovieTabs sort_by={this.state.sort_by} updateSortBy={this.updateSortBy} />
              </div>
            </div>
            <div className="row">
              {this.state.movies.map(movie => {
                return (
                  <div className="col-6 mb-4" key={movie.id}>
                  <MovieItem 
                    movie={movie}
                    removeMovie={this.removeMovie}
                    addMovieToWillWatch={this.addMovieToWillWatch}
                    removeMovieFromWillWatch={this.removeMovieFromWillWatch} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3">
          <h4>Will Watch: {this.state.moviesWillWatch.length} movies</h4>
            <ul className="list-group">
              {this.state.moviesWillWatch.map(movie => (
                <li key={movie.id} className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <p>{movie.title}</p>
                    <p>{movie.vote_average}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
