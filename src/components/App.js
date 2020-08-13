import React from 'react';
import SearchBar from './SearchBar';
import youtubeRequest from './../apis/youtube'
import VideoList from './VideoList';


class App  extends React.Component {

    state={
        videos: []
    }

    onTermSubmit = async (term)=>{
        const response = await youtubeRequest(term);
        this.setState({videos: response.items})
    }


    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;