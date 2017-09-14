import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './Searchbar.js';
import VideoDetails from './VideoDetails';
import VideoList from './VideoList';
import _ from 'lodash';

import '../styles/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      activeVideo: null
    }

    this.videoSearch('rick and morty');
  }

  videoSearch(term) {
    getVideos(term, (data) => {
      this.setState({
        videos: data,
        activeVideo: data[0]
      });
    });
  }

  render() {
    // запросы не чаще, чем разз в 500мс
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 500);

    return (
      <div className='container'>
        <div className="row">
          <h3 className='col'>
            YouTube Search
          <small className="text-muted"> React App</small>
          </h3>
        </div>
        <div className="row">
          { /* Передать коллбэк onSearchTermChange в Searchbar */}
          <SearchBar 
            onSearchTermChange={videoSearch}
          />
        </div>
        <div className="row">
          <div className='col-12 col-md-6 col-lg-8'>
            <VideoDetails video={this.state.activeVideo}/>
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            { /* Передать коллбэк onVideoSelect в VideoListItem */ }
            <VideoList 
              videos={this.state.videos}
              onVideoSelect={(activeVideo) => this.setState({ activeVideo })}
            />
          </div>
        </div>
      </div>
    )
  }
}

function getVideos(term, callback) {
  const API_KEY = 'AIzaSyBAqUV-mNLUaqL5Kd9fhDkN4CR17yaAc4o';
  const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

  const params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video'
  };

  axios.get(ROOT_URL, { params })
    .then(function (response) {
      if (callback) {
        callback(response.data.items);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}