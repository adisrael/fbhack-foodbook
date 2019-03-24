import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import SearchTop from './SearchTop';
import SearchContent from './SearchContent.jsx';


class Search extends Component {
  render() {
    return (
        <div>
           <Container>
           <SearchTop/>
           <SearchContent suggestionHandler={this.props.suggestionHandler}/>
           </Container>
        </div>
    );
  }
}

export default Search;
