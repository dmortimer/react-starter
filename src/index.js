import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = `AIzaSyAO59G1lq6Uq14FcI4ZL0Q-de5EW3SIFKQ`



class App extends React.Component{
    constructor(props){
        super(props);

        this.state={videos: [ ], selectedVideo: null };

        YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
            console.log(data);
            this.setState({videos: data, selectedVideo: data[0] });
        });
    }
    render() {
        return (
        <div>
            <SearchBar />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})}videos={this.state.videos}/>
        </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));