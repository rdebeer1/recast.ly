var VideoListEntry = ({click, video}) => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div onClick={() => { click(video); }} className="video-list-entry-title">{video.snippet.title} </div>
      <div className="video-list-entry-detail">{video.snippet.description}</div>
    </div>
  </div>
);
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

window.VideoListEntry = VideoListEntry;
