import React, { Component, PropTypes } from 'react';

const VideoDetail = ({video}) => {
	if(!video){
		return <div>Loading!!!!</div>;
	}
	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    return (
        <div className="col-md-7 col-lg-7 video-play">
			<div className="embed-responsive embed-responsive-16by9">
			  <iframe className="embed-responsive-item"  src={url} allowfullscreen="allowfullscreen"></iframe>
			</div>
			<div className="detail card">
				<h3>{video.snippet.title}</h3>
				<p>{video.snippet.description}</p>
			</div>
        </div>
    );
}


export default VideoDetail;
