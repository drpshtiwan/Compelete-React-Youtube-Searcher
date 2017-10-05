import React, { Component, PropTypes } from 'react';
import VideoListItem from "./VideoListItem";

class VideoList extends Component {
    constructor(props) {
        super(props);
    }

    videoListItem(video){
        // console.log(video.id.videoId);
        return (
            <VideoListItem 
            onVideoSelect={this.props.onVideoSelect} 
            key={video.etag} video={video} />
            );
    }
    render() {
        return (
        <div className="col-md-5 col-lg-5 video-list">
            <ul>
            {this.props.videos.map(video => this.videoListItem(video))}
            </ul>
        </div>
        );
    }
}

export default VideoList;
