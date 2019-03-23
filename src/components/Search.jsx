import React, { Component } from 'react';
import SearchTop from './SearchTop'
import Container from 'react-bootstrap/Container'


class Search extends Component {
  render() {
    return (
        <div>
           <Container>
           <SearchTop/>
           </Container>
        </div>
    );
  }
}

export default Search;
