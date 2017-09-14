import React, { Component } from 'react';
import Octicon from 'react-octicon';

import '../styles/Searchbar.css';

class SearchBar extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  render() {
    return (
      <div className='Searchbar input-group col'>
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Type here..."
          onChange={(e) => this.onInputChange(e.target.value)}
          value={this.state.term}
        />
      </div>    
    )
  }

  onInputChange(value) {
    this.setState({ term: value });
    this.props.onSearchTermChange(value);
  }
};

export default SearchBar;