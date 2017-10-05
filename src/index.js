import _  from "lodash";
import React,{Component} from "react";
import ReactDom from "react-dom";
import YTSearch  from 'youtube-api-search';
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
const API_KEY = 'AIzaSyACvVJBQ_GSN6XwPKOliSFUoQ_zArzM1Y4';	

class App extends Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	videos:[],
	  	selectedOne: null
	  };
	  this.searchByKey('sia');
	  
	}
	searchByKey(term){
		YTSearch({key:API_KEY,term},videos => {
		  	this.setState({videos});
		  	this.setState({selectedOne:videos[0]});
		  });
	}
	render() {
		const videSearch = _.debounce(term => this.searchByKey(term),300);
		return(
			<div>
			<SearchBar onKeyChange={videSearch} />
			<div className="row">
				<VideoDetail video={this.state.selectedOne} />
				<VideoList onVideoSelect={selectedOne => this.setState({selectedOne}) } videos={this.state.videos}/>
			</div>
			</div>
			);
	}
}
ReactDom.render(<App />,document.querySelector('.container'));