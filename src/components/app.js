import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import RateDisplay from '../containers/rates-display';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <RateDisplay />
      </div>
    );
  }
}
