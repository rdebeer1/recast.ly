var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map (video => <VideoListEntry video={video}/>)}
  </div>
);

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

window.VideoList = VideoList;
