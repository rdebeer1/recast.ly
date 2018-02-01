var VideoPlayer = (props) => (
  !props.video ? <div>Loading...</div> :
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + props.video.id.videoId} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{props.video.snippet.title}</h3>
        <div><h2>{props.video.snippet.description}</h2></div>
      </div>
    </div>
);


VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

window.VideoPlayer = VideoPlayer;
