class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: window.exampleVideoData[0],
      videos: window.exampleVideoData,
    };
  }
  onVideoListClick(clickedVideo) {
    this.setState({
      currentVideo: clickedVideo
    });
  }
  onSearchInput(event) {
    this.defaultSearch({ query: event.currentTarget.value });
  }

  onSearchClick(event) {
    this.defaultSearch({ query: event.currentTarget.previousSibling.value });
  }

  componentDidMount() {
    this.defaultSearch = _.debounce(this.defaultSearch, 500);
    this.defaultSearch();
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onSearchInput={this.onSearchInput.bind(this)} onSearchClick={this.onSearchClick.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} click={this.onVideoListClick.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
  defaultSearch(options, cb) {
    options = options || {};
    options.query = options.query || 'React';
    options.max = options.max || 10;
    options.key = options.key || window.YOUTUBE_API_KEY;
    cb = cb || (videos => this.setState({ videos: videos }));
    this.props.searchYouTube(options, cb);
  }
}

window.App = App;
