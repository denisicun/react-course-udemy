import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  render(){
    return (
      <div className="search-bar  ">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  };

  // this method handels the change event of the input
  // changes the state of the searc bar, and also searches the new search term for videos in yountube
  // the search is with the method we passed from the app component
  onInputChange(term){
    this.setState({ term });

    this.props.onSearchTermChange(term);

  }
};

export default SearchBar;
