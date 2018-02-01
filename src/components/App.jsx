
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentVideo: null,
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
      <div class ="flex-container">
        <div class ="main">
          <nav className="navbar">
            <div className="col-md-7 offset-md-0">
              <div><h5><Search onSearchInput={this.onSearchInput.bind(this)} onSearchClick={this.onSearchClick.bind(this)} /></h5></div>
            </div>
          </nav>
          <div className="row">
            <div className="col-md-7">
              <div><h5>><VideoPlayer video={this.state.currentVideo} /></h5></div>
            </div>
            <div className="col-md-5">
              <div><h5><VideoList videos={this.state.videos} click={this.onVideoListClick.bind(this)} /></h5></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  defaultSearch(options, cb) {
    options = options || {};
    options.query = options.query || 'Deadmau5';
    options.max = options.max || 30;
    options.key = options.key || window.YOUTUBE_API_KEY;
    cb = cb || (videos => this.setState({ videos: videos, currentVideo: videos[0] }));
    this.props.searchYouTube(options, cb);
  }
}

window.App = App;
