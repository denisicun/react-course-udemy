import React, { Component } from 'react';
import ReactDom from 'react-dom';
import _ from 'lodash';
import YoutubeSearch from 'youtube-api-search';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';


const API_KEY =  'AIzaSyD7dvLvYM76ndaGBtPrpwhHD-Wwv5ee6Mo ';

// create the component and make something
class App extends Component {
// constructor method for the app component, it initializes the state of the app object
constructor(props){
	super(props);

	// initialize the state
	this.state = {
		 videos: [],
		 selectedVideo: null
	  };

		// initial searc for loading the page
		this.videoSearch('cats');
	}

	// this method will search videos in the app using the youtube api
	// used also on the search bar
	videoSearch(term){
			// make an initial search from youtube for the user
			YoutubeSearch({	key: API_KEY,	term: term }, (videos) => {
				this.setState({
					videos: videos,
					selectedVideo: videos[0]
				 }); // same as this.setState({ videos: videos });
			});
	}

	render() {

		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})} // this is a function that is passed to this list component for selection
					videos={this.state.videos} />
			</div>
		);
	};
};

// send the component to the DOM
ReactDom.render(<App />, document.querySelector('.container'));
