var VideoList = ({click, videos}) => (
  <div className="video-list">
    <div><h5> {videos.map(video =>
      <VideoListEntry click={click} video={video} key={video.id.videoId} />)}</h5></div>
  </div>
);

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

window.VideoList = VideoList;
