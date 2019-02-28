import React, { Component } from 'react';
import './Create.css';

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      storyLine: '',
      trailerUrl: '',
      poster: ''
    };

    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(event) {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="Create">
        <h1>Create Movie</h1>
        <form onSubmit={(event) => this.props.handleSubmit(event, this.state, '/feed/movie/create')}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" placeholder="Titanic" name="title" onChange={this.handleFormChange} />
          <label htmlFor="storyLine">Story Line</label>
          <input type="text" id="storyLine" placeholder="Text" name="storyLine" onChange={this.handleFormChange} />
          <label htmlFor="trailerUrl">Trailer Url</label>
          <input type="text" id="trailerUrl" name="trailerUrl" placeholder="https://www.youtube.com/watch?v=DNyKDI9pn0Q" onChange={this.handleFormChange} />
          <label htmlFor="poster">Movie Poster</label>
          <input type="text" id="poster" name="poster" placeholder="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRzg6o0KjhufKFU1iBNr1zuyi0YDNgCUw4Ky5SNATZDVKaIUkiAA" onChange={this.handleFormChange} />
          <input type="submit" value="Create" />
        </form>
      </div>
    );
  }
}

export default Create;
