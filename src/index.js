import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBYf1d1OI9RrbBZ8ox-HppCUqyndH8herc';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { videos: [] }
        YTSearch({ key: API_KEY, term: 'Messi' }, videos => {
            this.setState({ videos }); // videos: videos
        });
    };
    render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    };
};


ReactDOM.render(<App />, document.querySelector('.container'));