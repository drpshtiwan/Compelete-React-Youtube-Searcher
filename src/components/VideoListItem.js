import React, { Component, PropTypes } from 'react';

class VideoListItem extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
    }
    render() {
        return (
        	<li onClick={() => this.props.onVideoSelect(this.props.video) } className="list-group-item">
        		<img src={this.props.video.snippet.thumbnails.default.url} alt="" className="img-responsive" />
        		<p>{this.props.video.snippet.title}</p>
        	</li>
        );
    }
}

export default VideoListItem;
