import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: this.props.movies,
      username: this.props.username,
      trailerUrl: this.props.trailerUrl,
      storyLine: this.props.storyLine,
    };

    this.handleViewTrailer = this.handleViewTrailer.bind(this);
    this.handleViewStoryLine = this.handleViewStoryLine.bind(this);
  }

  handleViewTrailer(index) {
    this.setState(state =>
      ({
        trailerUrl: state.movies[index].trailerUrl,
        storyLine: null
      }));
  }

  handleViewStoryLine(index) {
    this.setState(state =>
      ({
        title: state.movies[index].title,
        storyLine: state.movies[index].storyLine,
        trailerUrl: null
      }));
  }

  render() {
    return (
      <div className="Home">
        <h1>All movies</h1>
        <ul className="movies">
        {
            this.state.trailerUrl
              ?
                <ReactPlayer url={this.state.trailerUrl} width="640px" height="360px" className="trailer" playing controls />
              :
              null
          }
          {
            this.state.storyLine
              ?
              <span>
                <h2>{this.state.title}</h2>
                <p style={{ width: "500px", height: "200px" }}>{this.state.storyLine}</p>
              </span>
              : null
          }
        {
            this.props.movies.map((movie, index) =>
              (
                <li key={movie._id} className="movie">
                  <h2>{movie.title}</h2>
                  <img src={movie.poster} alt={movie.title} />
                  {
                    this.state.username
                      ?
                      <span>
                        <button onClick={() => this.handleViewTrailer(index)}>View Trailer </button>
                        <button onClick={() => this.handleViewStoryLine(index)}>View Story Line</button>
                      </span>
                      :
                      null
                  }
                </li>
              ))
          }
        </ul>
      </div>
    );
  }
}

export default Home;
