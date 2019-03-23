import React, { Component } from 'react';
import SearchBar from './SearchBar'
import Filters from './Filters'


class SearchTop extends Component {
  render() {
    return (
        <div>
          <h1>Search</h1>
          <SearchBar />
          <Filters />
        </div>
    );
  }
}

export default SearchTop;