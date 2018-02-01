var VideoList = ({click, videos}) => (
  <div className="video-list">
    {videos.map(video =>
      <VideoListEntry click={click} video={video} key={video.id.videoId} />)}
  </div>
);

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

window.VideoList = VideoList;
